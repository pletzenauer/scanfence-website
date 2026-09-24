---
title: 常见问题
description: 最常见问题的快速解答，以及这些方法无效时如何联系我们。
---

## 登录

**“Too many failed attempts. Account locked for …”**
连续输错五次密码后，登录会暂停 15 分钟。请稍等，或通过 **Forgot password?** 重置密码。

**收不到重置邮件。**
请检查垃圾邮件文件夹，并确认输入的是注册时使用的邮箱。出于安全考虑，即使该邮箱未注册，我们也总是提示邮件已发送。

**“An account with this email already exists.”**
你之前已经注册过。请直接登录，或重置密码。

## 创建二维码

**<kbd>+ Generate QR</kbd> 显示为灰色。**
要么你没有有效的套餐，要么已达到套餐的二维码限额。请查看 QR Codes 页面顶部的计数器。请参阅[套餐与限额](/documentation/plans-and-limits/)。

**“Error creating geofence”。**
半径很可能小于 50 米。地理围栏的半径必须在 50 米到 5,000 米之间。

**地址搜索把定位点放错了位置。**
把地址写得更具体一些（街道、门牌号、城市、国家），或在 Google 地图上右键点击准确位置，复制坐标，粘贴到 Latitude 和 Longitude 中。

## 扫码

**人在现场却被告知在范围外。**
他们的 GPS 定位有偏差，通常发生在室内。请加大半径，参阅[选择合适的半径](/documentation/geofences/#choosing-the-right-radius)。[数据分析](/documentation/analytics/)中的 **Location accuracy** 会显示手机在你的场地定位有多精确。

**扫码者从未被询问位置。**
他们曾经拒绝过一次，浏览器记住了。请参阅[如果扫码者被拒绝](/documentation/scanning/#if-a-scanner-is-refused)。

**我改了跳转目标，但大家打开的还是旧页面。**
只有动态码可以更改。静态码的链接直接印在图案里；请创建一个动态码并重新印刷。如果二维码是动态的，请检查当前是否有时间规则正在生效，因为规则会覆盖默认页面。

**二维码显示“inactive”或“reached its scan limit”。**
在二维码卡片上重新启用它，或者提高或重置限额。请参阅[扫描限额](/documentation/scan-limits/)。

## 数据

**我的扫描没有被统计。**
静态标准码不会被追踪；请把二维码设为动态码。来自同一网络的快速重复扫描，每个二维码每小时最多统计 30 次。

**数据分析页面是空的。**
检查顶部的日期范围，并清除标签筛选。

## 团队

**我无法邀请任何人。**
席位已全部占用，或者你的角色是 *Field user*。请参阅[团队与角色](/documentation/team/)。

**同事的邀请链接打不开。**
邀请在 7 天后失效。请在 Team 页面取消原邀请，再发送一份新的。

## 联系我们

在应用菜单中打开 **Support**，或发邮件至 [hello@scanfence.com](mailto:hello@scanfence.com)。请附上你在 **My Settings** 中的用户 ID、二维码名称，如果可以的话再附一张截图。如需设置指导、活动复盘或从其他二维码工具迁移，可以在 Support 页面预约付费的一对一服务。

<figure><img src="/images/docs/support-dark.webp" alt="Support 页面，包含联系渠道和可预约的帮助服务" width="1600" height="1250" loading="lazy"><figcaption>应用中的 Support 页面。</figcaption></figure>
