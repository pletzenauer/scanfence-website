---
title: ScanFence ヘルプ
eyebrow: はじめに
description: スキャンされた場所と時間がわかる QR コードのアプリ、ScanFence の使い方です。アプリのすべての画面について、スクリーンショット付きの手順ガイドを用意しています。
---

ScanFence では、一度印刷すればずっと管理できる QR コードを作れます。コードは、スキャンされた**場所**(ジオフェンス)、スキャンされた**時間**(時間ルール)、それまでに**何人**がスキャンしたか(スキャン上限)に応じて、別のページに案内できます。これらはすべて、印刷し直さずに後から変更できます。

<figure><img src="/images/docs/dashboard-dark.webp" alt="今日のスキャン数、コンプライアンス率、ジオフェンス、最近のスキャンのライブ一覧が表示された ScanFence のダッシュボード" width="1600" height="1250"><figcaption>サインイン後のダッシュボード。このヘルプのスクリーンショットはライブデモのもので、サンプルデータを使っています。</figcaption></figure>

## どこから始めるか

<ul class="cards">
<li><a href="/documentation/quick-start/"><b>クイックスタート</b><span>登録から最初のコードの印刷まで、約 5 分です。</span></a></li>
<li><a href="/documentation/create-qr-codes/"><b>QR コードの作成</b><span>Standard、Geofence、Multi-location コード。静的と動的。</span></a></li>
<li><a href="/documentation/geofences/"><b>ジオフェンス</b><span>地図上にゾーンを設定して、現地でだけ使えるコードにします。</span></a></li>
<li><a href="/documentation/time-based-rules/"><b>時間ルール</b><span>同じコードで、昼はランチメニュー、夜はディナーメニューを表示します。</span></a></li>
<li><a href="/documentation/analytics/"><b>分析</b><span>コードがどこで、いつ、どのくらいの精度でスキャンされたかを確認します。</span></a></li>
<li><a href="/documentation/team/"><b>チームとロール</b><span>同僚を管理者、マネージャー、現場ユーザーとして招待します。</span></a></li>
</ul>

## アプリの概要

アプリの左側のメニューには、次の項目があります。

| 項目 | できること |
|---|---|
| **Dashboard** | 今日の数値と最新スキャンのライブ表示。 |
| **Geofences** | コードの照合に使うゾーンの作成と編集。 |
| **QR Codes** | コードの作成、ダウンロード、編集、絞り込み、削除。 |
| **Analytics** | スキャンの地図、グラフ、CSV エクスポート。 |
| **Team** | メンバーの招待とロールの管理。 |
| **Audit Log** | ワークスペースで行われたすべての変更の記録。 |
| **Support** | 問い合わせ方法と個別サポートの予約。 |
| **My Settings** | プラン、請求、パスワード、タグ、アカウントの削除。 |

メニューの一番下では、ダークテーマ(**Mission**)とライトテーマ(**Instrument**)の切り替えとサインアウトができます。スマートフォンでは、上部バーの ☰ ボタンからメニューを開きます。

> **登録前にお試しください。** [ライブデモ](/demo/app/)は、サンプルデータで動く本物のアプリです。自由に操作してください。何も保存されず、再読み込みすると元に戻ります。

## 1 分でわかる基本

- **静的と動的。** *静的*コードにはリンクが直接入っています。速くて簡単ですが、後から変更できず、スキャン数もカウントされません。*動的*コードは ScanFence を指し、ScanFence がスキャンした人を転送します。そのため、移動先の変更、スキャン数のカウント、後からのルール追加ができます。[詳しく](/documentation/create-qr-codes/#static-or-dynamic)
- **ジオフェンス。** 地図上の円で、半径は 50 m から 5 km です。Geofence コードは、その中にいる人だけが使えます。[詳しく](/documentation/geofences/)
- **ワークスペース。** 作成したものはすべて、組織のワークスペースに属します。招待した同僚は、ロールに応じてそれを共有します。[詳しく](/documentation/team/)
