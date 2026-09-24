---
title: 多地点二维码
description: 一个印刷的二维码，最多十个地点，每个地点有自己的跳转目标、时间安排和扫描限额。
---

多地点二维码会检查扫码者所在的位置，并把他们引导到所在区域的页面。如果同时位于多个区域内，以最近的区域为准。不在任何区域内的人会跳转到**备用网址**（fallback URL）。

**示例**：一家连锁店为所有咖啡馆印刷同样的桌牌。在每家咖啡馆里，二维码打开该店的菜单；在家里扫则打开连锁品牌的官网。

## 创建多地点二维码

1. 在 **QR Codes** 中点击 <kbd>+ Generate QR</kbd>，选择 **Multi-location**。
2. 填写 **Fallback URL (Default)**：当人们不在你的任何地点，或不分享位置时跳转的页面。
3. 点击 **Add location** 并填写：
   - **Label/Name**，例如 *Café Old Town*
   - **Search by address**，或 **Latitude** 和 **Longitude**
   - **Radius (meters)**
   - 该地点的 **Destination URL**
4. 重复以上步骤，最多添加 **10 个地点**。未填写完整的条目会标记为 *(incomplete)*，直到所有字段都填好。
5. 点击 <kbd>Generate QR →</kbd>。

## 每个地点的附加设置

每个地点都可以有自己的：

- **时间安排**，包括 **Time of day**、**Days of week** 和 **Date range**，以及 1 到 10 的 **Priority**。适用于某个地点只应在营业时间内生效的情况。
- **稀缺限额**：该地点的前 N 次扫描会打开它的页面；之后的所有人会跳转到该地点自己的 **Fallback URL (when limit reached)**。

## 编辑地点并查看数据

在二维码卡片上点击 <kbd>Edit locations & stats</kbd>。**Location rules & statistics** 窗口会在一张地图上显示所有区域，每个地点一种颜色。地图下方可以搜索列表，添加、编辑或删除地点，并查看每个地点的扫描统计、最大扫描次数和时间规则。

<figure><img src="/images/docs/multi-overview-dark.webp" alt="Location rules and statistics 窗口，城市地图上以彩色圆圈显示三家咖啡馆的位置" width="1600" height="1250" loading="lazy"><figcaption>同一个二维码的三个地点显示在同一张地图上。现场用户可以查看这个窗口，但不能修改。</figcaption></figure>

## 小贴士

- 尽量避免区域重叠。如果确实重叠，以中心最近的区域为准。
- 无论有多少个地点，一个多地点二维码在套餐中只算一个二维码。
- 多地点二维码总是经过 ScanFence，所以你之后可以修改每个地点，无需重新印刷。
