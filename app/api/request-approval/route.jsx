import { Resend } from "resend";
import { render } from "@react-email/components";
import ApprovalEmail from "../../../emails/ApprovalEmail";
import { generateApprovalUrls } from "../../../utils/tokens";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { actionId, bug, affectedCount, sampleUsers, message } = await request.json();

  const { approveUrl, rejectUrl } = generateApprovalUrls(actionId);

  const html = await render(
    <ApprovalEmail
        actionId={actionId}
        bug={bug}
        affectedCount={affectedCount}
        sampleUsers={sampleUsers}
        message={message}
        approveUrl={approveUrl}
        rejectUrl={rejectUrl}
    />
  );

  await resend.emails.send({
    from: process.env.FROM_EMAIL,
    to: process.env.APPROVER_EMAIL,
    subject: `Approval Required: ${bug} [${actionId}]`,
    html,
  });

  return Response.json({ success: true, message: "Approval email sent" });
}
