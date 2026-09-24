---
title: 複数拠点コード
description: 1 つの印刷コードで最大 10 か所。場所ごとに移動先、スケジュール、スキャン上限を設定できます。
---

複数拠点コードは、スキャンした人の現在地を確認し、その人がいるゾーンのページに案内します。複数のゾーンに同時に入っている場合は、最も近いゾーンが優先されます。どのゾーンにも入っていない人は **fallback URL** に移動します。

**例:** チェーン店が、すべてのカフェ用に同じテーブルスタンドを印刷します。各カフェではそのカフェのメニューが開き、自宅ではチェーンのウェブサイトが開きます。

## 作成する

1. **QR Codes** で <kbd>+ Generate QR</kbd> を押し、**Multi-location** を選びます。
2. **Fallback URL (Default)** を入力します。どの場所にもいない人や、位置情報を共有しない人の移動先です。
3. **Add location** を押し、次の項目を入力します。
   - **Label/Name**。例:*Café Old Town*
   - **Search by address**、または **Latitude** と **Longitude**
   - **Radius (meters)**
   - この場所の **Destination URL**
4. 最大 **10 か所**まで繰り返します。入力が足りない場所には、すべて入力するまで *(incomplete)* と表示されます。
5. <kbd>Generate QR →</kbd> を押します。

## 場所ごとの追加設定

各場所に、次の設定を個別にできます。

- **Time-based schedule**:**Time of day**、**Days of week**、**Date range** と、1 から 10 の **Priority**。営業時間中だけ有効にしたい場所に使います。
- **Scarcity limit**:この場所での最初の N 回のスキャンにはこの場所のページを表示し、それ以降の人にはこの場所の **Fallback URL (when limit reached)** を表示します。

## 場所の編集と数値の確認

コードのカードで <kbd>Edit locations & stats</kbd> を押します。**Location rules & statistics** ウィンドウに、すべてのゾーンが場所ごとに色分けされて 1 つの地図に表示されます。地図の下では、一覧の検索、場所の追加、編集、削除ができ、各場所のスキャン統計、最大スキャン数、時間ルールを確認できます。

<figure><img src="/images/docs/multi-overview-dark.webp" alt="3 つのカフェの場所が色付きの円で市街地図に表示された Location rules and statistics ウィンドウ" width="1600" height="1250" loading="lazy"><figcaption>1 つのコードの 3 か所を、共通の地図に表示しています。現場ユーザーはこのウィンドウを見られますが、変更はできません。</figcaption></figure>

## ヒント

- できるだけゾーンが重ならないようにしてください。重なる場合は、中心が最も近いゾーンが優先されます。
- 複数拠点コードは、場所がいくつあってもプランでは 1 つのコードとして数えられます。
- 複数拠点コードは常に ScanFence を経由するため、印刷し直さずにすべての場所を後から編集できます。
