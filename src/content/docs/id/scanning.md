---
title: Yang dilihat pemindai
description: Apa yang terjadi di ponsel seseorang saat memindai kode Anda, dan cara menjelaskannya kepada pengunjung.
---

Orang yang memindai kode Anda tidak memerlukan aplikasi atau akun. Mereka cukup menggunakan kamera ponsel seperti pada kode QR lainnya.

## Kode standar

Ponsel langsung membuka halaman Anda. Kode dinamis melewati ScanFence sejenak; di situlah pemindaian dihitung serta aturan dan batas diterapkan. Pemindai tidak menyadarinya.

## Kode yang memeriksa lokasi

Kode geofence dan multi-lokasi terlebih dahulu membuka halaman singkat ScanFence yang meminta lokasi ponsel.

1. Ponsel menampilkan permintaan izin seperti biasa, *"app.scanfence.com would like to use your location"* atau yang serupa. Pemindai mengetuk **Allow**.
2. ScanFence membandingkan posisi dengan zona Anda. Ini memerlukan satu atau dua detik, lebih lama jika ponsel harus mencari sinyal GPS terlebih dahulu.
3. Hasilnya tergantung posisi pemindai:

| Situasi | Kode geofence | Kode multi-lokasi |
|---|---|---|
| Di dalam zona | Dikonfirmasi: *"You're at …"* | Diarahkan ke halaman lokasi tersebut |
| Di luar | *"You're outside …"*, dengan petunjuk untuk mendekat. Mereka dapat mencoba lagi. | Diarahkan ke halaman cadangan |
| Lokasi ditolak atau tidak tersedia | Diminta mengaktifkan layanan lokasi dan mencoba lagi | Diarahkan ke halaman cadangan |

> **Tambahkan satu kalimat di samping kode** pada papan Anda, misalnya *"Izinkan akses lokasi saat diminta: kode ini hanya berfungsi di tempat."* Cara ini cukup efektif mengurangi penolakan izin.

## Jika pemindai ditolak

- **Mereka berada di lokasi tetapi tetap ditolak.** Posisi di ponsel mereka mungkin kurang akurat, terutama di dalam ruangan. Minta mereka mendekat ke jendela atau keluar ruangan lalu mencoba lagi. Jika sering terjadi, perbesar [radius](/documentation/geofences/#choosing-the-right-radius) zona.
- **Lokasi dimatikan.** Di iPhone: *Settings → Privacy & Security → Location Services*, lalu izinkan untuk browser. Di Android: tarik ke bawah pengaturan cepat dan aktifkan *Location*.
- **Sebelumnya mereka mengetuk "Don't allow".** Browser mengingatnya. Mereka perlu mengizinkan lokasi untuk situs ini di pengaturan browser, lalu memindai lagi.
- **Banyak pemindaian berturut-turut dari satu jaringan.** Untuk mencegah penyalahgunaan, pemeriksaan lokasi dibatasi per jaringan. Setelah banyak percobaan dalam satu jam, pemindai melihat *"Too many location checks from your network"* dan perlu menunggu.

## Kode yang dinonaktifkan, habis kuota, dan dihapus

- Kode yang Anda jadikan **nonaktif** menampilkan *"This QR code is inactive"*.
- Kode yang melewati [batas pemindaian](/documentation/scan-limits/) diarahkan ke halaman batas tercapai Anda, atau menampilkan pesan singkat jika Anda tidak mengaturnya.
- Kode di **tempat sampah** tidak lagi berfungsi.
