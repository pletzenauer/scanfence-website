---
title: 批量上传
description: 用 CSV 表格一次创建几十甚至几百个二维码。
---

当你需要很多类似的二维码时，批量上传会很方便：每张桌子、每件商品、每家分店各一个。你只需填写表格，保存为 CSV 并上传。ScanFence 会为每一行创建一个二维码。

> 批量上传需要由 ScanFence 团队开启。如果你在 QR Codes 页面上看不到 <kbd>Upload</kbd>，请[联系我们](mailto:hello@scanfence.com)开启。

## 操作步骤

1. 在 **QR Codes** 页面点击 <kbd>Upload</kbd>。
2. 点击 **Download sample CSV →**，下载带示例行的 `qr-codes-bulk-template.csv`。
3. 用 Excel、Numbers 或 Google Sheets 打开，每个二维码填写一行。第一行（列名）保持不变。
4. 保存或导出为 **CSV**。
5. 回到上传窗口，在 **Upload your CSV file** 下选择你的文件。选好后上传会立即开始。
6. 随后 **Upload results** 会显示创建了多少个二维码；如果有行失败，还会显示是哪几行以及原因。

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="Bulk upload QR codes 窗口，列出必填列、可选列、扫描限额列和地理围栏列" width="1344" height="1350" loading="lazy"><figcaption>上传窗口列出了文件可以包含的所有列。</figcaption></figure>

## 列说明

| 列 | 必填 | 填写内容 |
|---|---|---|
| `type` | 是 | `standard` 或 `geofence` |
| `content` | 是 | 链接或文本。动态码填写跳转目标。 |
| `name` | 否 | 显示名称，例如 *Table 12* |
| `category` | 否 | 已有分类的名称 |
| `tags` | 否 | 已有标签的名称，用 `;` 分隔 |
| `is_dynamic` | 否 | 填 `true` 表示动态码，否则留空或填 `false` |
| `global_scan_limit` | 否 | 一个数字，例如 `100`。请参阅[扫描限额](/documentation/scan-limits/) |
| `limit_reached_url` | 否 | 达到限额后跳转的页面 |
| `geofence_lat` | 地理围栏码必填 | 纬度，例如 `48.2082` |
| `geofence_lng` | 地理围栏码必填 | 经度，例如 `16.3738` |
| `geofence_radius` | 否 | 半径（米），50 到 5,000。默认 50 |

### 示例

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## 小贴士

- **先创建分类和标签**。尚不存在的名称会被跳过，二维码会在没有它们的情况下创建。
- **查找坐标**：在 Google 地图上右键点击某个位置，菜单第一项就是*纬度, 经度*。
- **多地点二维码**无法通过表格创建，请在应用中创建。请参阅[多地点二维码](/documentation/multi-location/)。
- **行错误**会注明行号，例如 *Row 4: Missing required fields (type or content)* 或 *Row 7: Geofence type requires valid geofence_lat and geofence_lng*。修正这些行后只重新上传它们即可；成功的行已经创建好了。
- 批量上传的二维码和其他二维码一样，计入套餐的限额。
