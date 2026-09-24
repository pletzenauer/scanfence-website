---
title: 一括アップロード
description: CSV ファイルから、数十から数百の QR コードをまとめて作成できます。
---

一括アップロードは、テーブルごと、商品ごと、店舗ごとなど、似たコードをたくさん作りたいときに便利です。表計算ファイルに入力して CSV で保存し、アップロードします。ScanFence は 1 行につき 1 つのコードを作成します。

> 一括アップロードは ScanFence チームが有効にします。QR Codes ページに <kbd>Upload</kbd> が表示されない場合は、[お問い合わせください](mailto:hello@scanfence.com)。

## 手順

1. **QR Codes** ページで <kbd>Upload</kbd> を押します。
2. **Download sample CSV →** を押して、例の行が入った `qr-codes-bulk-template.csv` をダウンロードします。
3. Excel、Numbers、Google スプレッドシートで開き、コード 1 つにつき 1 行ずつ入力します。1 行目(列名)はそのままにしてください。
4. **CSV** 形式で保存またはエクスポートします。
5. アップロード画面に戻り、**Upload your CSV file** でファイルを選びます。選ぶとすぐにアップロードが始まります。
6. **Upload results** に、作成されたコードの数が表示されます。失敗した行があれば、どの行がなぜ失敗したかも表示されます。

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="必須、任意、スキャン上限、ジオフェンスの列が並ぶ Bulk upload QR codes ウィンドウ" width="1344" height="1350" loading="lazy"><figcaption>アップロード画面には、ファイルに使えるすべての列が表示されます。</figcaption></figure>

## 列

| 列 | 必須 | 入力する内容 |
|---|---|---|
| `type` | はい | `standard` または `geofence` |
| `content` | はい | リンクまたはテキスト。動的コードの場合は移動先です。 |
| `name` | いいえ | 表示名。例:*Table 12* |
| `category` | いいえ | 既存のカテゴリー名 |
| `tags` | いいえ | 既存のタグ名。`;` で区切ります |
| `is_dynamic` | いいえ | 動的にする場合は `true`。それ以外は空欄または `false` |
| `global_scan_limit` | いいえ | 数値。例:`100`。[スキャン上限](/documentation/scan-limits/)をご覧ください |
| `limit_reached_url` | いいえ | 上限に達した後の移動先 |
| `geofence_lat` | ジオフェンスの場合 | 緯度。例:`48.2082` |
| `geofence_lng` | ジオフェンスの場合 | 経度。例:`16.3738` |
| `geofence_radius` | いいえ | 半径(メートル)。50 から 5,000。既定は 50 |

### 例

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## ヒント

- **カテゴリーとタグは先に作成してください。** まだ存在しない名前は無視され、コードはそれなしで作成されます。
- **座標を調べるには**、Google マップで場所を右クリックします。メニューの最初の項目が「緯度, 経度」です。
- **複数拠点コード**は表計算ファイルでは設定できません。アプリで作成してください。[複数拠点コード](/documentation/multi-location/)をご覧ください。
- **行のエラー**には行番号が示されます。例:*Row 4: Missing required fields (type or content)*、*Row 7: Geofence type requires valid geofence_lat and geofence_lng*。該当する行を修正し、その行だけを再度アップロードしてください。成功した行はすでに作成されています。
- 一括アップロードしたコードも、ほかのコードと同じくプランの上限に数えられます。
