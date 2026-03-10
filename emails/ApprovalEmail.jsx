import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Button,
  Hr,
  Preview,
} from "@react-email/components";

export default function ApprovalEmail({
  actionId,
  bug,
  affectedCount,
  sampleUsers,
  message,
  approveUrl,
  rejectUrl,
}) {
  return (
    <Html>
      <Head />
      <Preview>Agent approval required: {bug}</Preview>
      <Body style={{ fontFamily: "sans-serif", backgroundColor: "#f9f9f9" }}>
        <Container style={{ maxWidth: "600px", margin: "0 auto", padding: "24px" }}>

          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Agent Approval Required
          </Text>

          <Hr />

          <Text><strong>Action:</strong> Send workaround email to {affectedCount} affected users</Text>
          <Text><strong>Bug:</strong> {bug}</Text>
          <Text><strong>Sample affected users:</strong> {sampleUsers.join(", ")}</Text>

          <Section style={{ backgroundColor: "#f4f4f4", padding: "16px", borderRadius: "8px" }}>
            <Text style={{ margin: 0 }}><strong>Message that will be sent:</strong></Text>
            <Text style={{ margin: "8px 0 0 0" }}>{message}</Text>
          </Section>

          <Hr />

          <Section style={{ textAlign: "center", marginTop: "24px" }}>
            <Button
              href={approveUrl}
              style={{
                backgroundColor: "#22c55e",
                color: "white",
                padding: "12px 24px",
                borderRadius: "6px",
                marginRight: "16px",
                textDecoration: "none",
              }}
            >
              Approve
            </Button>
            <Button
              href={rejectUrl}
              style={{
                backgroundColor: "#ef4444",
                color: "white",
                padding: "12px 24px",
                borderRadius: "6px",
                textDecoration: "none",
              }}
            >
              Reject
            </Button>
          </Section>

          <Hr />

          <Text style={{ fontSize: "12px", color: "#888" }}>
            This link expires in 24 hours. Action ID: {actionId}
          </Text>

        </Container>
      </Body>
    </Html>
  );
}