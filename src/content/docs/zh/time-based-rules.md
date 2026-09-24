---
title: 时间规则
description: 在一天中的特定时段、一周中的特定日子或某个日期范围内，把扫码者引导到不同的页面，无需重新印刷二维码。
---

时间规则为二维码设置第二个跳转目标，只在满足条件时生效。在这些时间之外，二维码照常工作。

**示例**

- 餐桌上的二维码在工作日 11:30 到 15:00 打开午餐菜单，其他时间打开常规菜单。
- 海报在活动开始前链接到售票页面，活动结束后链接到照片集。
- 橱窗上的二维码在营业时间显示“我们正在营业，欢迎进店”，晚上则显示网店。

## 添加规则

1. 在二维码卡片上点击 <kbd>Add time-based rules</kbd>。你也可以在创建二维码时开启 **Time-based rules**。
2. 开启 **Time-based rules**。
3. 输入 **Time-based destination URL**：规则生效期间跳转的页面。
4. 开启你需要的条件：
   - **Time of day：** **Open** 和 **Close** 时间，例如 09:00 到 17:00。
   - **Days of week**：点击要包含的日子。默认已选中周一到周五。
   - **Date range**：开始日期和结束日期。
5. 点击 <kbd>Save rules</kbd>。

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="Edit time-based rules 窗口，时间段为 09:00 到 17:00，已选择周一到周五" width="1008" height="1197" loading="lazy"><figcaption>这条规则在工作日 9:00 到 17:00 生效。其他时间二维码会打开默认页面。</figcaption></figure>

## 条件如何组合

**所有已开启的条件必须同时满足**。如果设置了 *Time of day 09:00–17:00* 和 *Mon–Fri*，规则会在工作日的办公时间内生效，周六中午则不会。

如果开启了规则但没有开启任何条件，规则会一直生效。

## 修改或删除规则

点击卡片上的 <kbd>View time-based rules</kbd> 查看时间安排，然后进行编辑。要删除规则，请关闭 **Time-based rules** 并点击 <kbd>Save rules</kbd>。

每个二维码只有一条规则。如果一个二维码需要多个时间段，比如早餐、午餐和晚餐，请使用[多地点二维码](/documentation/multi-location/)，它允许每个地点有自己的时间安排和优先级。

## 小贴士

- 规则需要动态码。创建二维码时开启规则，会自动把它设为动态码。
- 印刷之前，在规则时间段内外分别扫码，测试新规则。
- 在[数据分析](/documentation/analytics/)页面的 **Rule type distribution** 和 **Time-based rule performance** 中，对比规则流量和默认流量。
