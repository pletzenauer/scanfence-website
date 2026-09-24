---
title: 管理二维码
description: 查找、下载、编辑、停用和删除二维码，并用分类和标签把它们整理好。
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="网格视图下的 QR Codes 页面，包含搜索、筛选和二维码卡片" width="1600" height="1250" loading="lazy"><figcaption>QR Codes 页面。顶部的计数器显示你的套餐允许多少个二维码。</figcaption></figure>

## 工具栏

- **Active / Trash** 在正在使用的二维码和已删除的二维码之间切换。
- **Grid / List** 更改布局。浏览器会记住你的选择。
- **My QR codes / All users**（仅管理员可见）显示你自己的、所有人的或某位同事的二维码。
- <kbd>Bulk</kbd> 可以勾选多个二维码，一次性移到回收站。
- <kbd>Upload</kbd> 从表格导入大量二维码（需要你的账户已开启批量上传）。请参阅[批量上传](/documentation/bulk-upload/)。
- <kbd>+ Generate QR</kbd> 创建新的二维码。请参阅[创建二维码](/documentation/create-qr-codes/)。

## 搜索与筛选

搜索框可以按名称、链接、备用链接、地理围栏名称或限额链接查找二维码。点击 **Filters** 可按**分类**或**标签**缩小列表范围。选择多个标签时，会显示带有其中任意一个标签的二维码**。Clear all filters** 会重置所有条件。

## 二维码卡片

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="单个二维码卡片，显示类型、名称、启用开关、二维码图片、标签和操作按钮" width="471" height="1356" loading="lazy"><figcaption>每张卡片包含二维码本身及其所有操作。</figcaption></figure>

从上到下依次是：

- **类型和名称**，例如 *Geofence* 或 *Standard · Dynamic*。
- **Active / Inactive 开关**。点击可停用动态码，比如在活动结束时。停用的二维码会停止工作，直到你重新启用。
- **二维码图片**，下方是分类、标签和跳转目标。
- <kbd>PNG</kbd> 和 <kbd>SVG</kbd> 用于下载图片。印刷请用 SVG：任何尺寸都清晰。PNG 适合幻灯片和文档。
- <kbd>Copy</kbd> 复制二维码中的链接，方便在电脑上测试。
- <kbd>Delete</kbd> 把二维码移到回收站。
- <kbd>Edit category & tags</kbd> 重新归类二维码。
- <kbd>Edit redirect URL</kbd>（动态码）更改二维码的跳转目标。更改从下一次扫描开始生效，已印刷的二维码保持不变。
- <kbd>View analytics</kbd> 打开该二维码的扫描数据：总数、地图、最近 100 次扫描，以及 CSV 或 PDF 导出。
- <kbd>View location</kbd>（地理围栏码）在地图上显示区域。
- <kbd>Edit locations & stats</kbd>（多地点二维码）打开地点编辑器。
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>。请参阅[时间规则](/documentation/time-based-rules/)。
- **Scans & limits** 显示扫描次数和限额（如有）。请参阅[扫描限额](/documentation/scan-limits/)。

## 列表视图

列表视图能在屏幕上显示更多二维码，每一行紧凑地提供相同的操作。适合很长的列表和批量选择。

<figure><img src="/images/docs/qr-list-dark.webp" alt="列表视图下的 QR Codes 页面" width="1600" height="1250" loading="lazy"><figcaption>列表视图。</figcaption></figure>

## 分类与标签

用**分类**做主要分组（每个二维码一个，带颜色），用**标签**标记其他所有信息（数量不限）。

- **分类：** **Filters → Manage categories**。可以创建、重命名、更改颜色或删除。删除分类会把它从所有二维码上移除，但二维码本身会保留。
- **标签：** **My Settings → Tags**，也可以在创建二维码时新建。

## 回收站与恢复

<kbd>Delete</kbd> 不会永久删除二维码，而是把它移到 **Trash**。回收站中的二维码会**立即停止工作**，扫码的人会看到错误提示，而不是你的页面。

<figure><img src="/images/docs/qr-trash-dark.webp" alt="回收站视图，包含恢复和永久删除按钮" width="1600" height="1250" loading="lazy"><figcaption>回收站。恢复后的二维码会和之前完全一样地继续工作。</figcaption></figure>

在回收站中你可以：

- <kbd>Restore</kbd> 恢复二维码。它会带着所有设置回来，并重新开始工作。
- <kbd>Delete forever</kbd> 永久删除二维码。此操作无法撤销。
- 选择多个二维码，一起恢复或删除。

回收站中的二维码不计入套餐的限额。

<div class="warn"><strong>已印刷的二维码请谨慎处理。</strong>删除已经印刷的二维码之前，可以考虑改为停用它，或者用 <em>Edit redirect URL</em> 把它指向一个“活动已结束”的页面。</div>
