# VIPER Admin (Twilio)

Deploy-ready Next.js dashboard to read & reply to Twilio SMS — **no database needed**.

## Deploy on Vercel
1) Create a new Vercel project and connect this repo.
2) Add env vars:
- TWILIO_ACCOUNT_SID
- TWILIO_AUTH_TOKEN
- TWILIO_PHONE_NUMBER (E.164, e.g. +18335971432)

3) Deploy. Open `/` to send a test SMS, `/admin` for dashboard.

## Auto-Reply (optional)
In Twilio → Phone Numbers → (your number) → Messaging webhook:
`https://YOURDOMAIN.vercel.app/api/inbound-sms` (HTTP POST)
