<h1 align="center">agent-email-approval</h1>

<p align="center">
  <a href="https://nextjs.org"><img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" /></a>
  <a href="https://resend.com"><img src="https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white" alt="Resend" /></a>
  <a href="https://react.email/"><img src="https://img.shields.io/badge/React_Email-111111?style=for-the-badge&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjYgNiAyMCAyMCI%2BPHBhdGggY2xpcC1ydWxlPSJldmVub2RkIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGw9IndoaXRlIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIgZD0iTTI0LjQ1NTggMjQuNDg1M0MyNS4yMzM5IDIzLjcwNzMgMjUuMzgwNSAyMi42NTQ5IDI1LjI5NDcgMjEuNzQ2QzI1LjIwNzggMjAuODI1NCAyNC44Njk3IDE5LjgyNTggMjQuMzg5NiAxOC44Mjg3QzIzLjk1NyAxNy45MzAyIDIzLjM4MDIgMTYuOTc0NSAyMi42ODIxIDE2QzIzLjM4MDIgMTUuMDI1NSAyMy45NTcgMTQuMDY5OCAyNC4zODk2IDEzLjE3MTNDMjQuODY5NyAxMi4xNzQyIDI1LjIwNzggMTEuMTc0NiAyNS4yOTQ3IDEwLjI1NEMyNS4zODA1IDkuMzQ1MDggMjUuMjMzOSA4LjI5MjczIDI0LjQ1NTggNy41MTQ3MkMyMy42Nzc4IDYuNzM2NzEgMjIuNjI1NSA2LjU5MDA0IDIxLjcxNjUgNi42NzU4NEMyMC43OTYgNi43NjI3MyAxOS43OTY0IDcuMTAwODYgMTguNzk5MyA3LjU4MDk0QzE3LjkwMDcgOC4wMTM1NyAxNi45NDUgOC41OTAzNiAxNS45NzA2IDkuMjg4NDJDMTQuOTk2MSA4LjU5MDM2IDE0LjA0MDQgOC4wMTM1NyAxMy4xNDE4IDcuNTgwOTRDMTIuMTQ0NyA3LjEwMDg2IDExLjE0NTEgNi43NjI3MyAxMC4yMjQ2IDYuNjc1ODRDOS4zMTU2NCA2LjU5MDA0IDguMjYzMjkgNi43MzY3MSA3LjQ4NTI4IDcuNTE0NzJDNi43MDcyNyA4LjI5MjczIDYuNTYwNiA5LjM0NTA4IDYuNjQ2NCAxMC4yNTRDNi43MzMzIDExLjE3NDYgNy4wNzE0MiAxMi4xNzQyIDcuNTUxNSAxMy4xNzEzQzcuOTg0MTQgMTQuMDY5OCA4LjU2MDkyIDE1LjAyNTUgOS4yNTg5OCAxNkM4LjU2MDkyIDE2Ljk3NDUgNy45ODQxNCAxNy45MzAyIDcuNTUxNSAxOC44Mjg3QzcuMDcxNDIgMTkuODI1OCA2LjczMzMgMjAuODI1NCA2LjY0NjQgMjEuNzQ2QzYuNTYwNiAyMi42NTQ5IDYuNzA3MjcgMjMuNzA3MyA3LjQ4NTI4IDI0LjQ4NTNDOC4yNjMyOSAyNS4yNjMzIDkuMzE1NjQgMjUuNDEgMTAuMjI0NiAyNS4zMjQyQzExLjE0NTEgMjUuMjM3MyAxMi4xNDQ3IDI0Ljg5OTEgMTMuMTQxOCAyNC40MTkxQzE0LjA0MDQgMjMuOTg2NCAxNC45OTYxIDIzLjQwOTYgMTUuOTcwNiAyMi43MTE2QzE2Ljk0NSAyMy40MDk2IDE3LjkwMDcgMjMuOTg2NCAxOC43OTkzIDI0LjQxOTFDMTkuNzk2NCAyNC44OTkxIDIwLjc5NiAyNS4yMzczIDIxLjcxNjUgMjUuMzI0MkMyMi42MjU1IDI1LjQxIDIzLjY3NzggMjUuMjYzMyAyNC40NTU4IDI0LjQ4NTNaTTE1Ljk3MDYgMjAuOTQ4QzE2LjgzOTkgMjAuMjY4NCAxNy43MjQgMTkuNDg3NCAxOC41OTEgMTguNjIwNUMxOS40NTggMTcuNzUzNSAyMC4yMzkgMTYuODY5MyAyMC45MTg2IDE2QzIwLjIzOSAxNS4xMzA3IDE5LjQ1OCAxNC4yNDY1IDE4LjU5MSAxMy4zNzk1QzE3LjcyNCAxMi41MTI2IDE2LjgzOTkgMTEuNzMxNiAxNS45NzA2IDExLjA1MkMxNS4xMDEyIDExLjczMTYgMTQuMjE3MSAxMi41MTI2IDEzLjM1MDEgMTMuMzc5NUMxMi40ODMxIDE0LjI0NjUgMTEuNzAyMSAxNS4xMzA3IDExLjAyMjUgMTZDMTEuNzAyMSAxNi44NjkzIDEyLjQ4MzEgMTcuNzUzNSAxMy4zNTAxIDE4LjYyMDVDMTQuMjE3MSAxOS40ODc0IDE1LjEwMTIgMjAuMjY4NCAxNS45NzA2IDIwLjk0OFpNMTcuMTQ5OCAyMS44MTQ1QzE3Ljk2OCAyMS4xNTU4IDE4Ljc4ODUgMjAuNDE5NSAxOS41ODkzIDE5LjYxODdDMjAuMzkgMTguODE4IDIxLjEyNjQgMTcuOTk3NCAyMS43ODUxIDE3LjE3OTJDMjMuNzE4NyAxOS45OTE5IDI0LjQ2MjcgMjIuNDgxOSAyMy40NTc2IDIzLjQ4N0MyMi40NTI0IDI0LjQ5MjIgMTkuOTYyNSAyMy43NDgyIDE3LjE0OTggMjEuODE0NVpNMTAuMTU2IDE3LjE3OTJDMTAuODE0OCAxNy45OTc0IDExLjU1MTEgMTguODE4IDEyLjM1MTggMTkuNjE4N0MxMy4xNTI2IDIwLjQxOTUgMTMuOTczMSAyMS4xNTU4IDE0Ljc5MTQgMjEuODE0NUMxMS45Nzg2IDIzLjc0ODIgOS40ODg3MSAyNC40OTIyIDguNDgzNTUgMjMuNDg3QzcuNDc4MzkgMjIuNDgxOSA4LjIyMjM4IDE5Ljk5MTkgMTAuMTU2IDE3LjE3OTJaTTEwLjE1NiAxNC44MjA4QzEwLjgxNDggMTQuMDAyNiAxMS41NTExIDEzLjE4MiAxMi4zNTE4IDEyLjM4MTNDMTMuMTUyNiAxMS41ODA1IDEzLjk3MzEgMTAuODQ0MiAxNC43OTE0IDEwLjE4NTVDMTEuOTc4NiA4LjI1MTgyIDkuNDg4NzEgNy41MDc4MyA4LjQ4MzU1IDguNTEyOTlDNy40NzgzOSA5LjUxODE1IDguMjIyMzggMTIuMDA4MSAxMC4xNTYgMTQuODIwOFpNMTcuMTQ5OCAxMC4xODU1QzE3Ljk2OCAxMC44NDQyIDE4Ljc4ODUgMTEuNTgwNSAxOS41ODkzIDEyLjM4MTNDMjAuMzkgMTMuMTgyIDIxLjEyNjQgMTQuMDAyNiAyMS43ODUxIDE0LjgyMDhDMjMuNzE4NyAxMi4wMDgxIDI0LjQ2MjcgOS41MTgxNSAyMy40NTc2IDguNTEyOTlDMjIuNDUyNCA3LjUwNzgzIDE5Ljk2MjUgOC4yNTE4MiAxNy4xNDk4IDEwLjE4NTVaIi8%2BPC9zdmc%2B" alt="React Email" /></a>
  <a href="https://groq.com"><img src="https://img.shields.io/badge/Groq-F55036?style=for-the-badge" alt="Groq" /></a>
</p>

<p align="center">
  <img src="https://cdn.hashnode.com/uploads/covers/629f27b7aa1e065bd75f6b54/8b3de551-f110-4ad5-9130-3b9b8dfb3a52.gif" alt="Demo: running node agent.js, the agent pauses and asks for approval by email" width="800" />
</p>

A human-in-the-loop approval system for AI agents using email, Resend, and Next.js.

Instead of acting autonomously, the agent pauses before taking any high-stakes action and sends you an approval email with two buttons — **Approve** or **Reject**. Nothing happens until you decide.

## Why This Exists

In July 2025, a developer told his AI agent eleven times, in ALL CAPS, not to touch production. It deleted the database anyway.

Instructions are only suggestions to an agent. A human approval gate that lives outside the model is not. This project puts that gate in the one place people already check every day: their inbox.

## How It Works

1. Agent scans support tickets and identifies a pattern
2. Instead of acting, it sends you an approval email via Resend
3. You tap Approve or Reject from your inbox (links are HMAC-SHA256 signed and expire after 24 hours)
4. Agent proceeds or stops based on your decision
5. A confirmation email fires to close the loop

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