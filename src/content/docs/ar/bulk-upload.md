---
title: "الرفع الجماعي"
description: "أنشئ عشرات أو مئات من رموز QR دفعة واحدة من جدول بيانات CSV."
---

الرفع الجماعي مفيد عندما تحتاج إلى رموز كثيرة متشابهة: رمز لكل طاولة أو لكل منتج أو لكل فرع. تملأ جدول بيانات، وتحفظه بصيغة CSV، ثم ترفعه. ينشئ ScanFence رمزًا واحدًا لكل صف.

> يفعّل فريق ScanFence الرفع الجماعي. إذا لم ترَ <kbd>Upload</kbd> في صفحة QR Codes، [اطلب منا](mailto:hello@scanfence.com) تفعيله.

## خطوة بخطوة

1. في صفحة **QR Codes**، انقر <kbd>Upload</kbd>.
2. انقر **Download sample CSV →** للحصول على `qr-codes-bulk-template.csv` مع صفوف أمثلة.
3. افتحه في Excel أو Numbers أو Google Sheets واملأ صفًا واحدًا لكل رمز. اترك الصف الأول (أسماء الأعمدة) كما هو.
4. احفظه أو صدّره بصيغة **CSV**.
5. في نافذة الرفع، اختر ملفك ضمن **Upload your CSV file**. يبدأ الرفع فور اختياره.
6. يعرض **Upload results** بعدها عدد الرموز التي أُنشئت، وإن فشلت أي صفوف، يعرض أيها ولماذا.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="نافذة Bulk upload QR codes تسرد الأعمدة المطلوبة والاختيارية وأعمدة حد المسح والنطاق الجغرافي" width="1344" height="1350" loading="lazy"><figcaption>تسرد نافذة الرفع كل الأعمدة التي يمكن أن يحتويها الملف.</figcaption></figure>

## الأعمدة

| العمود | مطلوب | ماذا تكتب فيه |
|---|---|---|
| `type` | نعم | `standard` أو `geofence` |
| `content` | نعم | الرابط أو النص. في الرموز الديناميكية، الوجهة. |
| `name` | لا | اسم للعرض، مثل *Table 12* |
| `category` | لا | اسم فئة موجودة |
| `tags` | لا | أسماء وسوم موجودة، مفصولة بـ `;` |
| `is_dynamic` | لا | `true` لجعل الرمز ديناميكيًا، وإلا اتركه فارغًا أو `false` |
| `global_scan_limit` | لا | رقم، مثل `100`. راجع [حدود المسح](/documentation/scan-limits/) |
| `limit_reached_url` | لا | الصفحة التي يذهب إليها الناس بعد بلوغ الحد |
| `geofence_lat` | لرموز النطاق الجغرافي | خط العرض، مثل `48.2082` |
| `geofence_lng` | لرموز النطاق الجغرافي | خط الطول، مثل `16.3738` |
| `geofence_radius` | لا | نصف القطر بالأمتار، من 50 إلى 5,000. الافتراضي 50 |

### مثال

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## نصائح

- **أنشئ الفئات والوسوم أولًا.** تُتجاهل الأسماء غير الموجودة بعد، ويُنشأ الرمز بدونها.
- **اعثر على الإحداثيات** بالنقر بزر الفأرة الأيمن على نقطة في Google Maps: أول بند في القائمة هو *latitude, longitude*.
- **الرموز متعددة المواقع** لا يمكن إعدادها بجدول بيانات. أنشئها في التطبيق. راجع [الرموز متعددة المواقع](/documentation/multi-location/).
- **أخطاء الصفوف** تذكر رقم الصف، مثل *Row 4: Missing required fields (type or content)* أو *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. صحّح هذه الصفوف وارفعها وحدها مرة أخرى، فالصفوف الناجحة أُنشئت بالفعل.
- تُحتسب الرموز المرفوعة جماعيًا ضمن حد خطتك مثل أي رمز آخر.
