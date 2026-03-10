import { decisions } from "../../../utils/store";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const actionId = searchParams.get("actionId");

  if (!decisions[actionId]) {
    return Response.json({ decision: null });
  }

  return Response.json({ decision: decisions[actionId].decision });
}