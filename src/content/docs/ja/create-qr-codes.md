---
title: QR コードの作成
description: 3 種類のコード、静的と動的の違い、そして「Generate a code」ウィンドウの各項目について説明します。
---

メニューで **QR Codes** を開き、<kbd>+ Generate QR</kbd> を押します。**Generate a code** ウィンドウが開きます。選んだ種類に必要な項目がすべて入力されるまで、<kbd>Generate QR →</kbd> はグレー表示のままです。

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="Standard、Geofence、Multi-location の 3 種類が表示された Generate a code ウィンドウ" width="1344" height="1227" loading="lazy"><figcaption>最初に種類を選びます。残りの入力欄は種類に合わせて変わります。</figcaption></figure>

## 種類を選ぶ

| 種類 | 使う場面 | スキャンした人に表示されるもの |
|---|---|---|
| **Standard** | 誰がどこでスキャンしても同じ内容を表示したいとき。 | リンクまたはテキスト。 |
| **Geofence** | チェックイン地点、テーブル、店舗など、1 か所でだけ使えるようにしたいとき。 | ゾーン内にいればアクセスできます。ゾーン外なら「外にいます」という画面が表示されます。 |
| **Multi-location** | 1 つの印刷デザインを複数の場所で使い、場所ごとに別のページを開きたいとき。 | いる場所の最も近いゾーンのページ、またはフォールバックページ。 |

## すべての種類に共通の項目

- **QR code name**(任意)。*Summer campaign 2026* のような分かりやすい名前です。一覧、分析、エクスポートに表示されるので、設定しておくことをおすすめします。
- **Category**(任意)。コードごとに色分けされたカテゴリーを 1 つ付けられます。例:*Menus*、*Events*。コード一覧をカテゴリーで絞り込めます。カテゴリーは QR Codes ページの **Filters → Manage categories** で管理します。
- **Tags**(任意)。いくつでも付けられます。**Add tag** で既存のタグを選ぶか、**Create new tag** でその場で新しいタグを作成します。

## Standard コード

**URL or text** にウェブアドレスまたは任意のテキストを入力します。テキストの場合は、スマートフォンにそのまま表示されます。

## Geofence コード

Geofence コードは、スキャンした人のスマートフォンに位置情報を求め、ゾーン内にいる場合だけ先に進めます。

1. *Main entrance* のような **Geofence name** を入力します。
2. **Search by address** に住所を入力して **Search** を押すか、**Latitude** と **Longitude** を直接入力します。位置が決まると地図のプレビューが表示されます。
3. **Radius (meters)** を設定します。50 m 以上にしてください。スマートフォンの GPS は、特に屋内ではそれ以上正確になることはほとんどありません。
4. 確認を通過した人に表示する内容を **URL or text · inside fence** に入力します。

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="名前、住所検索、緯度、経度、半径が表示された Generate a code ウィンドウのジオフェンス欄" width="1344" height="1350" loading="lazy"><figcaption>住所を検索し、地図のプレビューでピンの位置を確認します。</figcaption></figure>

Geofence コードを作るたびに新しいゾーンが作成され、**Geofences** ページにも表示されます。後からそこで位置や半径を変更できます。[ジオフェンス](/documentation/geofences/)をご覧ください。

## Multi-location コード

すべてのゾーンの外にいる人のために **Fallback URL** を設定し、場所ごとに **Add location** を押します(最大 10 か所)。各場所に住所、半径、移動先を設定でき、必要に応じてスケジュールとスキャン上限も個別に設定できます。この種類には専用のページがあります:[複数拠点コード](/documentation/multi-location/)。

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="フォールバック URL と、最大 10 か所まで追加できる空の場所一覧が表示された複数拠点の欄" width="1344" height="1350" loading="lazy"><figcaption>複数拠点:フォールバックページ 1 つと、最大 10 個のゾーン。</figcaption></figure>

## 静的と動的

コードを動的にするには、**Make this a dynamic QR code** にチェックを入れます。すると上の欄の名前が **Destination URL** に変わります。

| | 静的 | 動的 |
|---|---|---|
| 印刷されたコードの中身 | リンクそのもの | スキャンした人を転送する ScanFence の短いリンク |
| 後から移動先を変更 | できません。印刷し直しが必要です | いつでもできます |
| スキャン数のカウントと分析 | なし(Standard コード) | あり |
| 時間ルールとスキャン上限 | なし(Standard コード) | あり |
| コードの無効化 | できません(Standard コード) | できます |

> **目安:** 印刷物に載せるコードは動的にしてください。Wi-Fi のパスワードのように変わらないものなら、静的コードでも問題ありません。

このウィンドウで時間ルールをオンにすると、コードは自動的に動的になります。Multi-location コードは常に ScanFence を経由するため、この選択肢は表示されません。

## 追加の設定

ウィンドウの下部にある 2 つの項目は、今すぐ設定することも、後でコードのカードから設定することもできます。

- **Global scarcity limit:** 一定のスキャン数に達したら、それ以降の人を別のページに送ります。[スキャン上限](/documentation/scan-limits/)をご覧ください。
- **Time-based rules:** 特定の時間、曜日、日付に別の移動先を使います。[時間ルール](/documentation/time-based-rules/)をご覧ください。

## 入力が足りないとき

ウィンドウに、必要な内容が表示されます。例:*Please enter URL or text*、*Please complete all geofence location fields*、*Please add at least one location*。*QR code limit reached* と表示された場合は、プランのコード数をすべて使っています。不要なコードをゴミ箱に移すか、[アップグレード](/documentation/plans-and-limits/)してください。
