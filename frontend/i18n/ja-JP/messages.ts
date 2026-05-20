/**
 * 日本語（日本）メッセージ — Crowdin / i18n 検証用。
 * ICU MessageFormat と同様のプレースホルダーを使用（プラットフォーム側でパース）。
 */
export const messages = {
  thisIsNewFromFeature: "これは新しい機能です",
  
  appTitle: "Crowdin サンプルアプリ",

  greetingWithName: "こんにちは、{name}さん",

  notificationCount:
    "{count, plural, =0 {通知はありません} other {通知が # 件あります}}",

  tasksRemaining: "{count, plural, other {残りタスクが # 件です}}",

  guestCount: "{count, plural, other {ゲストが # 名です}}",

  presenceLabel:
    "{status, select, online {オンライン} away {留守} busy {取り込み中} offline {オフライン} other {不明}}",

  appointmentOnDateLong: "予約日は {date, date, long} です。",

  clinicOpensAtTime: "受付開始は {opensAt, time, short} です。",

  reportGeneratedAt:
    "レポート作成日時: {generatedOn, date, medium} {generatedAt, time, medium}",

  accountBalanceUsd: "残高: {balance, number, :: currency/JPY}",

  welcomeBackSummaries:
    "おかえりなさい、{name}さん。{count, plural, other {未読メッセージが # 件あります。}}",

  lastUpdatedHuman: "最終更新: {relativeLabel}",

  storageUsedGb:
    "合計 {quotaGb, number} GB 中、{usedGb, number} GB を使用中です。",
} as const;

export type JaJPMessages = typeof messages;
