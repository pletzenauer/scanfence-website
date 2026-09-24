---
title: ダッシュボード
description: 今日の数値と最新スキャンのライブ表示。サインイン後に最初に表示される画面です。
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="4 つの数値タイルと最近のスキャン履歴の表が表示されたダッシュボード" width="1600" height="1250" loading="lazy"><figcaption>ダッシュボードはリアルタイムで更新されます。再読み込みは不要です。</figcaption></figure>

## 4 つのタイル

| タイル | 表示内容 |
|---|---|
| **Scans · today** | 午前 0 時以降の、ワークスペースのコードのすべてのスキャン数。 |
| **Compliance** | 今日の位置確認付きスキャンのうち、ジオフェンス内で行われた割合。90 % 以上は *healthy*、それ未満は *watch* と表示されます。 |
| **Geofences** | 有効なゾーンの数。 |
| **Active users** | ワークスペースのメンバー数。 |

コンプライアンス率が下がっている場合、原因はたいてい 2 つのどちらかです。会場から離れた場所でコードが試されているか、現地の GPS の精度に対してゾーンが小さすぎるかです。どちらなのかは[分析](/documentation/analytics/)で確認できます。

## 最近のスキャン履歴

表には最新 10 件のスキャンがリアルタイムで表示されます。

- **When:** スキャンの日時。
- **User · QR:** スキャンした人とコード。一般の方は *Anonymous* と表示されます。
- **Verdict:** ゾーン内なら *Verified*、ゾーン外なら *Blocked*。
- **Where:** 照合に使われたゾーン。
- **Delta:** ゾーンの中心からの距離。

## 表示されることがあるバナー

- **Team invitations:** ほかの人からワークスペースに招待されています。<kbd>Review</kbd> を押して承諾または辞退してください。[チームとロール](/documentation/team/#joining-a-team)をご覧ください。
- **No active subscription:** アカウントは使えますが、コードの作成とスキャンにはプランが必要です。<kbd>View plans →</kbd> を押してください。
