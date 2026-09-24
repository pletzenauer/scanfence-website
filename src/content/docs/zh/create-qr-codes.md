---
title: 创建二维码
description: 三种二维码类型、静态与动态的区别，以及“Generate a code”窗口中的每个字段。
---

在菜单中打开 **QR Codes**，点击 <kbd>+ Generate QR</kbd>，会打开 **Generate a code** 窗口。在所选类型需要的内容全部填写之前，<kbd>Generate QR →</kbd> 会一直显示为灰色。

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="Generate a code 窗口，显示 Standard、Geofence 和 Multi-location 三种二维码类型" width="1344" height="1227" loading="lazy"><figcaption>先选择类型，表单的其余部分会随之变化。</figcaption></figure>

## 选择类型

| 类型 | 适用场景 | 扫码者看到 |
|---|---|---|
| **Standard** | 任何人在任何地方都得到相同的内容。 | 你的链接或文本。 |
| **Geofence** | 二维码只应在一个地点有效：签到点、餐桌、门店。 | 在区域内即可访问；否则显示“你不在范围内”页面。 |
| **Multi-location** | 同一份印刷设计用于多个地点，每个地点打开各自的页面。 | 所在最近区域的页面，或备用页面。 |

## 所有类型通用的字段

- **QR code name**（选填）。一个好记的名称，例如 *Summer campaign 2026*。它会显示在列表、数据分析和导出中，建议填写。
- **Category**（选填）。每个二维码一个带颜色的分类，例如 *Menus* 或 *Events*。你可以按分类筛选二维码列表。在 QR Codes 页面通过 **Filters → Manage categories** 管理分类。
- **Tags**（选填）。数量不限。用 **Add tag** 选择已有标签，或选择 **Create new tag** 当场新建。

## 标准码

在 **URL or text** 中输入网址或任意纯文本。文本也可以：手机会直接显示它。

## 地理围栏码

地理围栏码会请求扫码者手机的位置，只有在区域内才放行。

1. 输入 **Geofence name**，例如 *Main entrance*。
2. 在 **Search by address** 中输入地址并点击 **Search**，或自行填写 **Latitude** 和 **Longitude**。位置设置好后会出现地图预览。
3. 设置 **Radius (meters)**。至少使用 50 米：手机 GPS 很少比这更精确，室内尤其如此。
4. 在 **URL or text · inside fence** 中填写通过检查的人会得到的内容。

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="Generate a code 窗口的地理围栏部分，包含名称、地址搜索、纬度、经度和半径" width="1344" height="1350" loading="lazy"><figcaption>搜索地址，然后在地图预览上检查定位点。</figcaption></figure>

每个地理围栏码都会创建一个新的区域，它也会出现在 **Geofences** 页面上。之后你可以在那里移动区域或更改半径。请参阅[地理围栏](/documentation/geofences/)。

## 多地点二维码

为不在任何区域内的人设置一个 **Fallback URL**，然后为每个地点点击 **Add location**（最多 10 个）。每个地点有自己的地址、半径和跳转目标，还可以选择设置自己的时间安排和扫描限额。这种类型有单独的说明页面：[多地点二维码](/documentation/multi-location/)。

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="多地点部分，包含备用网址和一个最多可添加十个地点的空列表" width="1344" height="1350" loading="lazy"><figcaption>多地点：一个备用页面加最多十个区域。</figcaption></figure>

## 静态还是动态

勾选 **Make this a dynamic QR code** 即可把二维码设为动态码。上方的字段随后会变为 **Destination URL**。

| | 静态 | 动态 |
|---|---|---|
| 印刷的二维码里是什么 | 你的链接本身 | 一个 ScanFence 短链接，会把扫码者转发过去 |
| 之后能否更改跳转目标 | 不能，只能重新印刷 | 能，随时可改 |
| 扫描是否计数并显示在数据分析中 | 否（标准码） | 是 |
| 时间规则和扫描限额 | 否（标准码） | 是 |
| 能否停用二维码 | 否（标准码） | 是 |

> **经验法则**：只要二维码要印刷出来，就用动态码。静态码适合永远不会变的内容，比如 Wi-Fi 密码。

在这个窗口中开启时间规则会自动把二维码设为动态码。多地点二维码总是经过 ScanFence，所以不显示这个选项。

## 可选功能

窗口底部有两个部分，可以现在设置，也可以之后在二维码卡片上设置：

- **Global scarcity limit**：达到一定扫描次数后，把之后的所有人引导到另一个页面。请参阅[扫描限额](/documentation/scan-limits/)。
- **Time-based rules**：在特定时间、星期或日期跳转到不同的目标。请参阅[时间规则](/documentation/time-based-rules/)。

## 如果缺少内容

窗口会提示它需要什么，例如 *Please enter URL or text*、*Please complete all geofence location fields* 或 *Please add at least one location*。如果提示 *QR code limit reached*，说明你已用完套餐中的全部二维码。把不再需要的二维码移到回收站，或[升级套餐](/documentation/plans-and-limits/)。
