---
title: बल्क अपलोड
description: एक CSV स्प्रेडशीट से एक साथ दर्जनों या सैकड़ों QR कोड बनाएँ।
---

जब आपको कई मिलते-जुलते कोड चाहिए, तब बल्क अपलोड काम आता है: हर टेबल, हर प्रोडक्ट या हर ब्रांच के लिए एक। आप एक स्प्रेडशीट भरते हैं, उसे CSV के रूप में सेव करते हैं और अपलोड करते हैं। ScanFence हर पंक्ति के लिए एक कोड बनाता है।

> बल्क अपलोड ScanFence टीम चालू करती है। अगर QR Codes पेज पर आपको <kbd>Upload</kbd> नहीं दिखता, तो इसे चालू करने के लिए [हमसे कहें](mailto:hello@scanfence.com)।

## स्टेप बाय स्टेप

1. **QR Codes** पेज पर <kbd>Upload</kbd> पर क्लिक करें।
2. **Download sample CSV →** पर क्लिक करके उदाहरण पंक्तियों वाली `qr-codes-bulk-template.csv` फ़ाइल लें।
3. इसे Excel, Numbers या Google Sheets में खोलें और हर कोड के लिए एक पंक्ति भरें। पहली पंक्ति (कॉलम के नाम) जैसी है वैसी ही रहने दें।
4. **CSV** के रूप में सेव या एक्सपोर्ट करें।
5. अपलोड विंडो में वापस आकर **Upload your CSV file** में अपनी फ़ाइल चुनें। फ़ाइल चुनते ही अपलोड शुरू हो जाता है।
6. फिर **Upload results** दिखाता है कि कितने कोड बने, और अगर कोई पंक्ति फ़ेल हुई तो कौन सी और क्यों।

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="Bulk upload QR codes विंडो, जिसमें ज़रूरी, वैकल्पिक, स्कैन लिमिट और जियोफ़ेंस कॉलम की लिस्ट है" width="1344" height="1350" loading="lazy"><figcaption>अपलोड विंडो में वे सभी कॉलम लिखे हैं जो फ़ाइल में हो सकते हैं।</figcaption></figure>

## कॉलम

| कॉलम | ज़रूरी | क्या डालें |
|---|---|---|
| `type` | हाँ | `standard` या `geofence` |
| `content` | हाँ | लिंक या टेक्स्ट। डायनामिक कोड के लिए, डेस्टिनेशन। |
| `name` | नहीं | दिखने वाला नाम, जैसे *Table 12* |
| `category` | नहीं | पहले से मौजूद किसी कैटेगरी का नाम |
| `tags` | नहीं | मौजूदा टैग के नाम, `;` से अलग करके |
| `is_dynamic` | नहीं | कोड को डायनामिक बनाने के लिए `true`, वरना खाली छोड़ें या `false` |
| `global_scan_limit` | नहीं | एक संख्या, जैसे `100`। देखें [स्कैन लिमिट](/documentation/scan-limits/) |
| `limit_reached_url` | नहीं | लिमिट पूरी होने के बाद लोग कहाँ जाएँ |
| `geofence_lat` | जियोफ़ेंस के लिए | अक्षांश (latitude), जैसे `48.2082` |
| `geofence_lng` | जियोफ़ेंस के लिए | देशांतर (longitude), जैसे `16.3738` |
| `geofence_radius` | नहीं | मीटर में रेडियस, 50 से 5,000। डिफ़ॉल्ट 50 |

### उदाहरण

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## सुझाव

- **पहले कैटेगरी और टैग बनाएँ।** जो नाम अभी मौजूद नहीं हैं वे छोड़ दिए जाते हैं, और कोड उनके बिना बनता है।
- **कोऑर्डिनेट ढूँढने के लिए** Google Maps में किसी जगह पर राइट-क्लिक करें: मेनू की पहली एंट्री *latitude, longitude* होती है।
- **मल्टी-लोकेशन कोड** स्प्रेडशीट से नहीं बनाए जा सकते। उन्हें ऐप में बनाएँ। देखें [मल्टी-लोकेशन कोड](/documentation/multi-location/)।
- **पंक्ति की गलतियों** में पंक्ति का नंबर बताया जाता है, जैसे *Row 4: Missing required fields (type or content)* या *Row 7: Geofence type requires valid geofence_lat and geofence_lng*। उन पंक्तियों को ठीक करें और सिर्फ़ उन्हें दोबारा अपलोड करें; जो पंक्तियाँ सफल रहीं, उनके कोड पहले ही बन चुके हैं।
- बल्क अपलोड से बने कोड भी बाकी कोड की तरह आपके प्लान की लिमिट में गिने जाते हैं।
