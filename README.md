# agent-email-approval

![Demo: running node agent.js, the agent pauses and asks for approval by email](https://cdn.hashnode.com/uploads/covers/629f27b7aa1e065bd75f6b54/8b3de551-f110-4ad5-9130-3b9b8dfb3a52.gif)

A human-in-the-loop approval system for AI agents using email, Resend, and Next.js.

Instead of acting autonomously, the agent pauses before taking any high-stakes action and sends you an approval email with two buttons — **Approve** or **Reject**. Nothing happens until you decide.

## Why This Exists

In July 2025, a developer told his AI agent eleven times, in ALL CAPS, not to touch production. It deleted the database anyway.

Instructions are only suggestions to an agent. A human approval gate that lives outside the model is not. This project puts that gate in the one place people already check every day: their inbox.

## How It Works

1. Agent scans support tickets and identifies a pattern
2. Instead of acting, it sends you an approval email via Resend
3. You tap Approve or Reject from your inbox
4. Agent proceeds or stops based on your decision
5. A confirmation email fires to close the loop

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router), React 19 |
| Email delivery | [Resend](https://resend.com) |
| Email templates | [React Email](https://react.email) |
| AI analysis | [Groq](https://groq.com) SDK with Llama 3.3 70B (`llama-3.3-70b-versatile`) |
| Link security | Node `crypto`: HMAC-SHA256 signed links, 24-hour expiry, timing-safe comparison |
| Runtime | Node.js |

## Prerequisites

- Node.js
- A [Resend](https://resend.com) account with a verified domain
- A [Groq](https://groq.com) API key 
  
## Setup
```bash
git clone https://github.com/Calm-Rock/agent-email-approval.git
cd agent-email-approval
npm install
```

Create a `.env.local` file in the root:
```bash
RESEND_API_KEY=re_xxxxxxxxx
SECRET_KEY=your_secret_key_here        # generate with: openssl rand -hex 32
APPROVAL_BASE_URL=http://localhost:3000
APPROVER_EMAIL=you@youremail.com
FROM_EMAIL=agent@yourdomain.com
GROQ_API_KEY=your_groq_api_key_here    
```

## Running

**Terminal 1** — start the Next.js server:
```bash
npm run dev
```

**Terminal 2** — run the agent:
```bash
node agent.js
```

Check your inbox for the approval email.

## Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | Your Resend API key from the [Resend dashboard](https://resend.com/api-keys) |
| `SECRET_KEY` | Random secret used to sign approval URLs. Generate with `openssl rand -hex 32` |
| `APPROVAL_BASE_URL` | Base URL of the server. Use `http://localhost:3000` for local development |
| `APPROVER_EMAIL` | Email address that receives the approval request |
| `FROM_EMAIL` | Email address the agent sends from. Must be a verified Resend domain |
| `GROQ_API_KEY` | Groq API key for AI-powered ticket analysis |

## Blog Post

Read the full walkthrough: [Email as the Human-in-the-Loop for AI Agents](https://dev.to/cheeto/email-as-the-human-in-the-loop-for-ai-agents-12k3).