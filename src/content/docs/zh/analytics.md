---
title: 数据分析
description: 扫描数据的地图、图表和导出，可查看整个工作区，也可查看单个二维码。
---

## Analytics 页面

在菜单中打开 **Analytics**。默认显示最近 7 天的数据。

<figure><img src="/images/docs/analytics-dark.webp" alt="Analytics 页面，包含数字卡片、日期范围、筛选条件和扫描地图" width="1600" height="1250" loading="lazy"><figcaption>所选日期范围内的数据分析。</figcaption></figure>

### 数字卡片

- **Today's scans**：从午夜起的扫描次数，实时更新。
- **Active users**：最近 5 分钟内扫描过的人数。
- **Avg accuracy**：手机 GPS 的平均精度，单位为米。数值越小越好。
- **High precision**：精度优于 20 米的扫描。

### 日期范围与筛选

在 **Date range** 下选择**开始**和**结束**日期。在 **Filters** 下点击标签，只显示带有这些标签的二维码**；Clear** 会重置筛选。

### 图表

| 面板 | 说明 |
|---|---|
| **Scan locations · map** | 扫描发生的位置。绿点表示在区域内，红点表示在区域外，蓝点表示混合或未知。相近的扫描会合并显示，放大地图即可分开。 |
| **Scans over time** | 每天的扫描次数。可用来观察某次活动或推广的效果。 |
| **Compliance rate** | 以环形图显示地理围栏内与围栏外的扫描比例。 |
| **Location accuracy** | GPS 精度为优秀（10 米以内）、良好（10–20 米）、一般（20–50 米）或较差（超过 50 米）的扫描各有多少。如果*较差*的扫描很多，说明场地可能在室内，可以考虑加大半径。 |
| **Live scan feed** | 实时显示最近十次扫描。 |
| **Scans by geofence · top 10** | 扫描最多的二维码。 |
| **Rule type distribution** | 有多少扫描是按时间规则、按位置或跳转到默认页面的。 |
| **Time-based rule performance** | 每条时间规则被触发的次数。 |

### 导出

<kbd>Export CSV →</kbd> 会把所选日期范围内的全部扫描下载为表格：日期、时间、用户、地理围栏、在内或在外、距离、坐标、精度、海拔、速度、电量和网络类型。可以用 Excel、Numbers 或 Google Sheets 打开。

## 单个二维码的数据分析

在任意二维码卡片上点击 <kbd>View analytics</kbd>。窗口会显示该二维码的总扫描次数、带位置信息的扫描次数和最近一次扫描时间，下方是地图和最近的扫描详情。

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="单个二维码的数据分析窗口，包含总数、导出按钮和扫描位置地图" width="1600" height="1250" loading="lazy"><figcaption>单个二维码的数据分析。地图按同一地点的扫描次数为扫描着色。</figcaption></figure>

你可以在这里把该二维码的扫描导出为 **CSV** 或 **PDF** 报告，方便发给客户或上级。窗口只显示最近 100 次扫描；Analytics 页面及其导出涵盖的范围更大。

## 哪些扫描会被统计

- 静态标准码不会被统计：手机会直接打开你的链接，中间不经过 ScanFence。要统计扫描，请使用动态码。请参阅[静态还是动态](/documentation/create-qr-codes/#static-or-dynamic)。
- 为了让数据真实可靠，来自同一网络的连续重复扫描，每个二维码每小时最多统计 30 次。
