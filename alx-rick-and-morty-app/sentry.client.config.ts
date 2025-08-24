import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN, // put your DSN in .env.local
  tracesSampleRate: 1.0, // capture 100% of transactions (adjust in production!)
});
