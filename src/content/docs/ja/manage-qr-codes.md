---
title: コードの管理
description: QR コードの検索、ダウンロード、編集、無効化、削除、そしてカテゴリーとタグによる整理の方法です。
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="検索、フィルター、コードのカードが並ぶグリッド表示の QR Codes ページ" width="1600" height="1250" loading="lazy"><figcaption>QR Codes ページ。上部のカウンターに、プランで作成できるコード数が表示されます。</figcaption></figure>

## ツールバー

- **Active / Trash** で、使用中のコードと削除したコードを切り替えます。
- **Grid / List** で表示方法を変えます。選んだ表示はブラウザに保存されます。
- **My QR codes / All users**(管理者のみ)で、自分のコード、全員のコード、特定の同僚のコードを表示します。
- <kbd>Bulk</kbd> で複数のコードを選び、まとめてゴミ箱に移せます。
- <kbd>Upload</kbd> で、表計算ファイルから多数のコードを取り込めます(アカウントで一括アップロードが有効な場合)。[一括アップロード](/documentation/bulk-upload/)をご覧ください。
- <kbd>+ Generate QR</kbd> で新しいコードを作成します。[QR コードの作成](/documentation/create-qr-codes/)をご覧ください。

## 検索と絞り込み

検索欄では、名前、リンク、フォールバックリンク、ジオフェンス名、上限到達時のリンクでコードを探せます。**Filters** を押すと、**カテゴリー**や**タグ**で一覧を絞り込めます。複数のタグを選ぶと、いずれかのタグが付いたコードが表示されます。**Clear all filters** ですべて解除します。

## コードのカード

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="種類、名前、有効スイッチ、QR 画像、タグ、操作ボタンが表示された 1 つの QR コードのカード" width="471" height="1356" loading="lazy"><figcaption>各カードに、コードとそのすべての操作がまとまっています。</figcaption></figure>

上から順に:

- **種類と名前**。例:*Geofence*、*Standard · Dynamic*。
- **Active / Inactive スイッチ**。キャンペーン終了時などに、動的コードを無効にできます。無効にしたコードは、再び有効にするまで使えません。
- **QR 画像**。その下にカテゴリー、タグ、移動先が表示されます。
- <kbd>PNG</kbd> と <kbd>SVG</kbd> で画像をダウンロードします。印刷には SVG をお使いください。どのサイズでも鮮明です。PNG はスライドや文書に向いています。
- <kbd>Copy</kbd> でコードに含まれるリンクをコピーします。パソコンでのテストに便利です。
- <kbd>Delete</kbd> でコードをゴミ箱に移します。
- <kbd>Edit category & tags</kbd> で分類を変更します。
- <kbd>Edit redirect URL</kbd>(動的コード)で移動先を変更します。変更は次のスキャンから反映され、印刷済みのコードはそのまま使えます。
- <kbd>View analytics</kbd> でこのコードのスキャンを表示します。合計、地図、最新 100 件のスキャン、CSV または PDF のエクスポートがあります。
- <kbd>View location</kbd>(Geofence コード)でゾーンを地図に表示します。
- <kbd>Edit locations & stats</kbd>(Multi-location コード)で場所の編集画面を開きます。
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>。[時間ルール](/documentation/time-based-rules/)をご覧ください。
- **Scans & limits** にスキャン数と上限が表示されます。[スキャン上限](/documentation/scan-limits/)をご覧ください。

## リスト表示

リスト表示では、同じ操作をコンパクトな行にまとめ、より多くのコードを画面に表示します。長い一覧やまとめて選択するときに便利です。

<figure><img src="/images/docs/qr-list-dark.webp" alt="リスト表示の QR Codes ページ" width="1600" height="1250" loading="lazy"><figcaption>リスト表示。</figcaption></figure>

## カテゴリーとタグ

**カテゴリー**は主な分類に(コードごとに 1 つ、色付き)、**タグ**はそれ以外の分類に(いくつでも)使います。

- **カテゴリー:** **Filters → Manage categories**。作成、名前変更、色変更、削除ができます。カテゴリーを削除すると、すべてのコードから外れますが、コード自体は残ります。
- **タグ:** **My Settings → Tags**。コードの作成中に作ることもできます。

## ゴミ箱と復元

<kbd>Delete</kbd> を押してもコードは完全には削除されず、**Trash** に移ります。ゴミ箱に入ったコードは**すぐに使えなくなり**、スキャンした人にはページの代わりにエラーが表示されます。

<figure><img src="/images/docs/qr-trash-dark.webp" alt="復元ボタンと完全削除ボタンがあるゴミ箱の表示" width="1600" height="1250" loading="lazy"><figcaption>ゴミ箱。コードを復元すると、以前とまったく同じように使えます。</figcaption></figure>

ゴミ箱では次のことができます。

- <kbd>Restore</kbd> でコードを復元します。すべての設定が戻り、再び使えるようになります。
- <kbd>Delete forever</kbd> でコードを完全に削除します。元に戻せません。
- 複数のコードを選び、まとめて復元または削除します。

ゴミ箱のコードはプランの上限に数えられません。

<div class="warn"><strong>印刷済みのコードに注意してください。</strong>すでに印刷したコードを削除する前に、無効にするか、<em>Edit redirect URL</em> で「このキャンペーンは終了しました」のページに向けることを検討してください。</div>
