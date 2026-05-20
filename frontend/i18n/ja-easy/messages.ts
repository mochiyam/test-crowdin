/**
 * 日本語（日本）メッセージ — Crowdin / i18n 検証用。
 * ICU MessageFormat と同様のプレースホルダーを使用（プラットフォーム側でパース）。
 */
export const messages = ({
  thisIsNewFromFeature: "これは新しい機能です",
  appTitle: "Crowdin の サンプル アプリ",
  greetingWithName: "こんにちは、{name} さん",
  notificationCount: "{count, plural, =0 {おしらせは ありません} other {おしらせが # こ あります}}",
  tasksRemaining: "{count, plural, other {のこりの やることが # こ あります}}",
  guestCount: "{count, plural, other {お客さんが # 人 います}}",
  presenceLabel: "{status, select, online {つうわ できます} away {いません} busy {いそがしい} offline {オフライン} other {わかりません}}",
  appointmentOnDateLong: "よやくの日は {date, date, long} です。",
  clinicOpensAtTime: "うけつけ は {opensAt, time, short} から です。",
  reportGeneratedAt: "レポートを つくった日: {generatedOn, date, medium} {generatedAt, time, medium}",
  accountBalanceUsd: "ざんだか: {balance, number, :: currency/JPY}",
  welcomeBackSummaries: "おかえりなさい、{name} さん。{count, plural, other {よんでいない メッセージが # こ あります。}}",
  lastUpdatedHuman: "さいごに かわった日: {relativeLabel}",
  storageUsedGb: "ぜんぶ {quotaGb, number} GB のうち、{usedGb, number} GB を つかっています。"
} as const);
export type JaJPMessages = typeof messages;