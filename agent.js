require("dotenv").config({ path: ".env.local" });
const Groq = require("groq-sdk");
const tickets = require("./tickets.json");

async function analyzeTickets() {
  if (process.env.GROQ_API_KEY) {
    console.log("🤖 Agent: Analyzing support tickets with Groq...\n");

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a support agent analyzing tickets. 
          If you find 3 or more users with the same error, respond with JSON only, no extra text:
          {
            "action": "send_workaround",
            "bug": "<bug description>",
            "affectedUsers": ["<email1>", "<email2>"],
            "message": "<workaround message>"
          }
          If no pattern is found, respond with: { "action": "none" }`,
        },
        {
          role: "user",
          content: `Analyze these support tickets: ${JSON.stringify(tickets)}`,
        },
      ],
    });

    return JSON.parse(response.choices[0].message.content);
  } else {
    console.log("⚙️  Agent: No GROQ_API_KEY found. Using hardcoded analysis...\n");

    const authErrors = tickets.filter((t) =>
      t.error.includes("Authentication failure")
    );

    return {
      action: "send_workaround",
      bug: "Authentication failure on login after v2.3.1 deployment",
      affectedUsers: authErrors.map((t) => t.user),
      // Demo fallback message. In production the agent generates this.
      message: "We have identified an issue affecting your account after our recent update. As a temporary workaround, please clear your browser cache and log in again.",
    };
  }
}

async function pollForDecision(actionId) {
  console.log("⏳ Agent: Waiting for approval decision...\n");

  while (true) {
    const response = await fetch(
      `${process.env.APPROVAL_BASE_URL}/api/approval-status?actionId=${actionId}`
    );
    const data = await response.json();

    if (data.decision) {
      return data.decision;
    }

    await new Promise((resolve) => setTimeout(resolve, 3000));
  }
}

async function sendWorkaroundEmails(affectedUsers, bug, message) {
  const { Resend } = require("resend");
  const resend = new Resend(process.env.RESEND_API_KEY);

  console.log(`📧 Agent: Sending workaround emails to ${affectedUsers.length} users...\n`);

  for (const user of affectedUsers) {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: user,
      subject: `Important: Workaround for ${bug}`,
      html: `<p>${message}</p>`,
    });
    console.log(`   ✓ Sent to ${user}`);
  }

  console.log(`\n✅ Done. ${affectedUsers.length} users notified.`);
}

async function run() {
  console.log("🔍 Agent: Scanning support tickets...\n");

  const analysis = await analyzeTickets();

  if (analysis.action === "none") {
    console.log("✅ Agent: No action needed.");
    return;
  }

  const actionId = `fix-auth-bug-${Date.now()}`;

  console.log(`🚨 Agent: Found ${analysis.affectedUsers.length} users hitting the same bug.`);
  console.log(`   Bug: ${analysis.bug}`);
  console.log(`   Requesting approval before sending emails...\n`);

  await fetch(`${process.env.APPROVAL_BASE_URL}/api/request-approval`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      actionId,
      bug: analysis.bug,
      affectedCount: analysis.affectedUsers.length,
      sampleUsers: analysis.affectedUsers.slice(0, 3),
      message: analysis.message,
    }),
  });

  console.log("📨 Agent: Approval email sent. Check your inbox.\n");

  const decision = await pollForDecision(actionId);

  if (decision === "approve") {
    console.log("✅ Agent: Approved! Proceeding...\n");
    await sendWorkaroundEmails(analysis.affectedUsers, analysis.bug, analysis.message);
  } else {
    console.log("❌ Agent: Rejected. Stopping.");
  }
}

run();