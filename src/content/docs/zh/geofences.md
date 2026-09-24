---
title: 地理围栏
description: 在地图上划定一个区域，让二维码只对真正在现场的人有效。
---

地理围栏是地图上的一个圆：一个中心点加一个 **50 米到 5,000 米**之间的半径。当有人扫描关联了地理围栏的二维码时，手机会报告自己的位置，ScanFence 会检查这个位置是否在圆内。

**常见用途**：只在现场才算数的签到、只能在餐厅内使用的扫码点餐、只给到场观众看的活动内容、工地的员工考勤。

## Geofences 页面

<figure><img src="/images/docs/geofences-dark.webp" alt="Geofences 页面，列出四个区域及其中心坐标、半径、状态以及编辑和删除操作" width="1600" height="1250" loading="lazy"><figcaption>工作区的所有区域都在一张表中。</figcaption></figure>

表格为每个区域显示**名称**和描述、**中心**坐标、**半径**和**状态**。

- 点击 **Active / Inactive** 启用或停用区域。
- <kbd>Edit</kbd> 打开区域，可以移动它或更改大小。
- <kbd>Delete</kbd> 会永久删除区域。

## 创建或编辑区域

1. 点击 <kbd>+ New geofence</kbd>，或在已有区域上点击 <kbd>Edit</kbd>。
2. 输入 **Name**，也可以填写 **Description**，例如 *Loading bay 1–4*。
3. 在 **Address search** 中输入地址并点击 <kbd>Search</kbd>。地图会跳到该位置。
4. **点击地图**微调中心点。点击时，地图上方的坐标会随之更新。
5. 拖动 **Radius** 滑块。下方的提示会把米数换算成街区数。
6. 点击 <kbd>Create geofence →</kbd> 或 <kbd>Update geofence →</kbd>。

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="Edit geofence 窗口，包含名称、描述、设为 75 米的半径滑块、地址搜索和显示区域的地图" width="1600" height="1250" loading="lazy"><figcaption>编辑区域。点击地图任意位置即可移动中心点。</figcaption></figure>

## 选择合适的半径

手机并不能准确知道自己的位置。在室外，GPS 精度通常为 5–20 米；在室内、密集的市中心或地下，可能是 50 米甚至更差。选择的半径应覆盖场地本身**再加上**这部分误差。

| 地点 | 建议半径 |
|---|---|
| 单个店铺、咖啡馆或摊位 | 50–100 m |
| 场馆、酒店、办公楼 | 100–250 m |
| 音乐节场地、校园、度假村 | 250–1,000 m |
| 城区或小镇 | 1,000–5,000 m |

> **在现场测试**。印刷之前，在场地边缘扫描二维码，最好也在室内试一下。如果在里面的人被拒绝，就把半径调大。

## 把二维码关联到区域

区域是和二维码一起创建的：在 **Generate a code** 窗口中选择 **Geofence** 类型，并填写位置字段。请参阅[创建二维码](/documentation/create-qr-codes/#geofence-codes)。新区域随后也会出现在 Geofences 页面上，之后你可以在那里调整它，无需重新印刷。

想让一个二维码在多个地点有效，并且每个地点有自己的页面？请使用[多地点二维码](/documentation/multi-location/)。

## 隐私

只有在扫码的那一刻才会请求位置，并且只针对需要位置的二维码。扫码者会看到手机常规的权限提示，可以拒绝。他们的位置用于检查，也可能随扫描记录一起保存，用于你的数据分析；ScanFence 不会在扫码前后追踪任何人。
