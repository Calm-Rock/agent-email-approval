const crypto = require("crypto");
if (!process.env.SECRET_KEY) throw new Error("SECRET_KEY is not set. Run: openssl rand -hex 32");

function generateApprovalUrls(actionId) {
  const expiry = Date.now() + 24 * 60 * 60 * 1000;

  const approveToken = sign(actionId, "approve", expiry);
  const rejectToken = sign(actionId, "reject", expiry);

  const baseUrl = process.env.APPROVAL_BASE_URL;

  return {
    approveUrl: `${baseUrl}/api/approval?actionId=${actionId}&decision=approve&expiry=${expiry}&token=${approveToken}`,
    rejectUrl: `${baseUrl}/api/approval?actionId=${actionId}&decision=reject&expiry=${expiry}&token=${rejectToken}`,
  };
}

function sign(actionId, decision, expiry) {
  const payload = `${actionId}:${decision}:${expiry}`;
  return crypto
    .createHmac("sha256", process.env.SECRET_KEY)
    .update(payload)
    .digest("hex");
}

function verifyToken(actionId, decision, expiry, token) {
  if (Date.now() > parseInt(expiry)) {
    return { valid: false, reason: "Link has expired" };
  }

  const expected = sign(actionId, decision, expiry);
  const valid = crypto.timingSafeEqual(
    Buffer.from(token),
    Buffer.from(expected)
  );

  return { valid, reason: valid ? null : "Invalid token" };
}

module.exports = { generateApprovalUrls, verifyToken };