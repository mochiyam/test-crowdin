/**
 * English (US) messages for Crowdin / i18n testing.
 * Uses ICU MessageFormat placeholders for variables, plurals, dates, and times.
 */
export const messages = {
  appTitle: "Crowdin Sample App",

  greetingWithName: "Hello, {name}!",

  /** Pluralization: zero / one / other */
  notificationCount:
    "{count, plural, =0 {No notifications} one {# notification} other {# notifications}}",

  /** Plural-only (no zero branch) */
  tasksRemaining:
    "{count, plural, one {# task remaining} other {# tasks remaining}}",

  /** Ordinal-style wording (still driven by ICU plural categories) */
  guestCount: "{count, plural, one {# guest} other {# guests}}",

  /** Select variant (e.g. status chips) */
  presenceLabel:
    "{status, select, online {Online} away {Away} busy {Busy} offline {Offline} other {Unknown}}",

  /** Date placeholder — formatting resolved by runtime (Intl / formatjs) */
  appointmentOnDateLong: "Your appointment is on {date, date, long}.",

  /** Time only */
  clinicOpensAtTime: "Clinic opens at {opensAt, time, short}.",

  /** Combined date + time */
  reportGeneratedAt:
    "Report generated on {generatedOn, date, medium} at {generatedAt, time, medium}.",

  /** Numbers (decimals, grouping) */
  accountBalanceUsd: "Balance: {balance, number, :: currency/USD}",

  /** Named params + ICU plural together */
  welcomeBackSummaries:
    "Welcome back, {name}. You have {count, plural, one {# unread message} other {# unread messages}}.",

  /** Simple relative-style string — translators can reorder for JA */
  lastUpdatedHuman: "Last updated: {relativeLabel}",

  /** File-style label with numeric param */
  storageUsedGb: "{usedGb, number} GB used of {quotaGb, number} GB quota.",
} as const;

export type EnUSMessages = typeof messages;
