---
title: 仪表板
description: 今日数据和最新扫描的实时动态，这是登录后看到的第一个页面。
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="仪表板，包含四个数字卡片和最近扫描活动表" width="1600" height="1250" loading="lazy"><figcaption>仪表板实时更新，无需刷新。</figcaption></figure>

## 四个卡片

| 卡片 | 显示内容 |
|---|---|
| **Scans · today** | 从午夜起你工作区所有二维码的扫描次数。 |
| **Compliance** | 今天经过位置检查的扫描中，发生在地理围栏内的比例。90% 及以上显示为 *healthy*，低于则显示为 *watch*。 |
| **Geofences** | 你有多少个区域处于启用状态。 |
| **Active users** | 你的工作区中有多少人。 |

合规率下降通常有两种原因：有人在场地以外尝试扫码，或者某个区域相对于现场的 GPS 精度设得太小。[数据分析](/documentation/analytics/)可以告诉你是哪一种。

## 最近扫描活动

表格实时列出最近十次扫描：

- **When**：扫描的日期和时间。
- **User · QR**：谁扫描了哪个二维码。普通公众显示为 *Anonymous*。
- **Verdict**：在区域内为 *Verified*，在区域外为 *Blocked*。
- **Where**：扫描所对照的区域。
- **Delta**：与区域中心的距离。

## 你可能看到的提示横幅

- **团队邀请**：有人邀请你加入他们的工作区。点击 <kbd>Review</kbd> 接受或拒绝。请参阅[团队与角色](/documentation/team/#joining-a-team)。
- **没有有效订阅**：你的账户可以使用，但创建和扫描二维码需要套餐。点击 <kbd>View plans →</kbd>。
