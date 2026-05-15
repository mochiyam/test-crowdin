/**
 * 日本語（日本）メッセージ — Crowdin / i18n 検証用。
 * ICU MessageFormat と同様のプレースホルダーを使用（プラットフォーム側でパース）。
 */
export const messages = ({
  appTitle: "Crowdin Sample App",
  greetingWithName: "Hello, {name}!",
  notificationCount: "{count, plural, =0 {No notifications} one {# notification} other {# notifications}}",
  tasksRemaining: "{count, plural, one {# task remaining} other {# tasks remaining}}",
  guestCount: "{count, plural, one {# guest} other {# guests}}",
  presenceLabel: "{status, select, online {Online} away {Away} busy {Busy} offline {Offline} other {Unknown}}",
  appointmentOnDateLong: "Your appointment is on {date, date, long}.",
  clinicOpensAtTime: "Clinic opens at {opensAt, time, short}.",
  reportGeneratedAt: "Report generated on {generatedOn, date, medium} at {generatedAt, time, medium}.",
  accountBalanceUsd: "Balance: {balance, number, :: currency/USD}",
  welcomeBackSummaries: "Welcome back, {name}. You have {count, plural, one {# unread message} other {# unread messages}}.",
  lastUpdatedHuman: "Last updated: {relativeLabel}",
  storageUsedGb: "{usedGb, number} GB used of {quotaGb, number} GB quota."
} as const);
export type JaJPMessages = typeof messages;