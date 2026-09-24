---
title: 扫描限额
description: 只让前 N 次扫描通过，比如“前 100 位送免费咖啡”，之后的所有人跳转到你指定的页面。
---

扫描限额（应用中称为 **global scarcity limit**）会统计二维码的每一次扫描。计数达到限额后，之后所有扫码的人都会跳转到**限额已满页面**，而不是原来的目标页面。

**示例**：前 100 位访客获得优惠券；抽奖活动在 500 人参与后结束；限量商品售罄。

## 创建二维码时设置限额

1. 在 **Generate a code** 窗口中勾选 **Global scarcity limit**。限额默认从 50 开始。
2. 输入 **Total scan limit**。
3. 输入 **Limit-reached URL**，例如一个“抱歉，已经领完了”的页面。

## 之后设置或更改限额

在二维码卡片上，**Scans & limits** 框会显示计数，例如 *Total 37 / 100*，并带有进度条。

- 点击 <kbd>Edit</kbd> 更改 **Global scan limit**（0 表示不限）和 **Redirect URL when limit reached**，然后点击 <kbd>Save changes</kbd>。
- 点击 <kbd>Reset</kbd> 把计数器归零，开始新一轮。这也会重置该二维码各条规则的计数器。

## 须知

- 如果限额已满网址留空，扫码的人会看到一条简短提示 *This QR code has reached its scan limit*。
- 为了计数公平，来自同一网络的重复扫描，每个二维码每小时最多统计 30 次。超出的扫描仍然会打开页面，只是不占用你的限额。
- [多地点二维码](/documentation/multi-location/)还可以为每个地点单独设置限额。
