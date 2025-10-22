export async function sendSMS(to, body) {
  // Placeholder for local/dev. In production, this should call an API route.
  console.log(`[DEV] sendSMS -> ${to}: ${body}`);
  return { ok: true };
}
