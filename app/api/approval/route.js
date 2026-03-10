import { Resend } from "resend";
import { verifyToken } from "../../../utils/tokens";
import { decisions } from "../../../utils/store";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const actionId = searchParams.get("actionId");
  const decision = searchParams.get("decision");
  const expiry = searchParams.get("expiry");
  const token = searchParams.get("token");

  const { valid, reason } = verifyToken(actionId, decision, expiry, token);
  if (!valid) {
    return new Response(`
      <h1>Link invalid or expired</h1>
      <p>${reason}</p>
    `, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  if (decisions[actionId]) {
    return new Response(`
      <h1>Already decided</h1>
      <p>This action was already ${decisions[actionId].decision}ed.</p>
    `, { headers: { "Content-Type": "text/html; charset=utf-8" } });
  }

  decisions[actionId] = {
    decision,
    decidedAt: new Date().toISOString(),
  };

  await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: process.env.APPROVER_EMAIL,
    subject: `${decision === "approve" ? "✅ Approved" : "❌ Rejected"}: ${actionId}`,
    html: `
      <p>You <strong>${decision === "approve" ? "approved" : "rejected"}</strong> the following action:</p>
      <p><strong>Action ID:</strong> ${actionId}</p>
      <p><strong>Decided at:</strong> ${new Date().toISOString()}</p>
      <p>The agent has been notified and will ${decision === "approve" ? "proceed" : "stop"}.</p>
    `,
  });

  const approved = decision === "approve";
  return new Response(`
    <h1>${approved ? "✅ Approved" : "❌ Rejected"}</h1>
    <p>The agent has been notified and will ${approved ? "proceed" : "stop"}.</p>
  `, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}