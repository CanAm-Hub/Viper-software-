import twilio from 'twilio';

export default async function handler(req, res) {
  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  const to = req.query.to;

  try {
    const message = await client.messages.create({
      body: 'Test message from Viper Software — success!',
      from: process.env.TWILIO_PHONE_NUMBER,
      to,
    });

    res.status(200).json({ success: true, sid: message.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
}
