---
title: Membuat kode QR
description: "Tiga jenis kode, statis dan dinamis, serta setiap kolom di jendela Generate a code."
---

Buka **QR Codes** di menu dan klik <kbd>+ Generate QR</kbd>. Jendela **Generate a code** akan terbuka. <kbd>Generate QR →</kbd> tetap nonaktif (abu-abu) sampai semua yang dibutuhkan jenis kode yang dipilih sudah diisi.

<figure><img src="/images/docs/qr-new-standard-dark.webp" alt="Jendela Generate a code dengan tiga jenis kode Standard, Geofence, dan Multi-location" width="1344" height="1227" loading="lazy"><figcaption>Pilih jenisnya terlebih dahulu; sisa formulir menyesuaikan.</figcaption></figure>

## Memilih jenis

| Jenis | Gunakan saat | Yang diterima pemindai |
|---|---|---|
| **Standard** | Semua orang, di mana pun, harus menerima hal yang sama. | Tautan atau teks Anda. |
| **Geofence** | Kode hanya boleh berfungsi di satu tempat: titik check-in, meja, atau toko. | Akses jika berada di dalam zona Anda; jika tidak, layar "Anda berada di luar". |
| **Multi-location** | Satu desain cetak dipakai di beberapa tempat, dan setiap tempat membuka halamannya sendiri. | Halaman zona terdekat tempat mereka berada, atau halaman cadangan. |

## Kolom untuk semua jenis

- **QR code name** (opsional). Nama yang mudah dikenali seperti *Summer campaign 2026*. Nama ini muncul di daftar, analitik, dan ekspor, jadi sebaiknya diisi.
- **Category** (opsional). Satu kategori berwarna per kode, misalnya *Menus* atau *Events*. Anda dapat memfilter daftar kode berdasarkan kategori. Kelola kategori melalui **Filters → Manage categories** di halaman QR Codes.
- **Tags** (opsional). Sebanyak yang Anda mau. Pilih tag yang ada dengan **Add tag**, atau pilih **Create new tag** untuk langsung menambahkan tag baru.

## Kode standar

Masukkan alamat web atau teks biasa di **URL or text**. Teks juga bisa: ponsel akan langsung menampilkannya.

## Kode geofence

Kode geofence meminta lokasi ponsel pemindai dan hanya mengizinkan akses di dalam zona.

1. Masukkan **Geofence name**, misalnya *Main entrance*.
2. Ketik alamat di **Search by address** lalu klik **Search**, atau masukkan **Latitude** dan **Longitude** sendiri. Pratinjau peta muncul setelah posisi ditentukan.
3. Atur **Radius (meters)**. Gunakan minimal 50 m: GPS ponsel jarang lebih tepat dari itu, terutama di dalam ruangan.
4. Masukkan apa yang diterima orang yang lolos pemeriksaan di **URL or text · inside fence**.

<figure><img src="/images/docs/qr-new-geofence-dark.webp" alt="Bagian geofence pada jendela Generate a code, dengan nama, pencarian alamat, lintang, bujur, dan radius" width="1344" height="1350" loading="lazy"><figcaption>Cari alamatnya, lalu periksa penanda di pratinjau peta.</figcaption></figure>

Setiap kode geofence membuat zona barunya sendiri, yang kemudian juga muncul di halaman **Geofences**. Di sana Anda dapat memindahkannya atau mengubah radiusnya nanti. Lihat [Geofence](/documentation/geofences/).

## Kode multi-lokasi

Tetapkan **Fallback URL** untuk semua orang di luar semua zona, lalu klik **Add location** untuk setiap tempat (hingga 10). Setiap lokasi memiliki alamat, radius, dan tujuan sendiri, serta jadwal dan batas pemindaian sendiri jika diperlukan. Jenis ini punya halaman tersendiri: [Kode multi-lokasi](/documentation/multi-location/).

<figure><img src="/images/docs/qr-new-multi-dark.webp" alt="Bagian multi-lokasi dengan fallback URL dan daftar kosong hingga sepuluh lokasi" width="1344" height="1350" loading="lazy"><figcaption>Multi-lokasi: satu halaman cadangan ditambah hingga sepuluh zona.</figcaption></figure>

## Statis atau dinamis

Centang **Make this a dynamic QR code** untuk menjadikan kode dinamis. Kolom di atasnya kemudian berubah menjadi **Destination URL**.

| | Statis | Dinamis |
|---|---|---|
| Isi kode yang dicetak | Tautan Anda sendiri | Tautan pendek ScanFence yang meneruskan pemindai |
| Mengubah tujuan nanti | Tidak, Anda harus mencetak ulang | Ya, kapan saja |
| Pemindaian dihitung dan tampil di analitik | Tidak (kode standar) | Ya |
| Aturan berbasis waktu dan batas pemindaian | Tidak (kode standar) | Ya |
| Menonaktifkan kode | Tidak (kode standar) | Ya |

> **Patokan sederhana:** jika kode akan dicetak, jadikan dinamis. Kode statis cocok untuk hal yang tidak pernah berubah, seperti kata sandi Wi-Fi Anda.

Mengaktifkan aturan berbasis waktu di jendela ini otomatis menjadikan kode dinamis. Kode multi-lokasi selalu melewati ScanFence, sehingga opsi ini tidak ditampilkan.

## Tambahan opsional

Dua bagian di bawah jendela dapat diatur sekarang atau nanti dari kartu kode:

- **Global scarcity limit:** berhenti setelah sejumlah pemindaian dan arahkan semua orang setelahnya ke halaman lain. Lihat [Batas pemindaian](/documentation/scan-limits/).
- **Time-based rules:** tujuan berbeda pada jam, hari, atau tanggal tertentu. Lihat [Aturan berbasis waktu](/documentation/time-based-rules/).

## Jika ada yang kurang

Jendela akan memberi tahu apa yang dibutuhkan, misalnya *Please enter URL or text*, *Please complete all geofence location fields* atau *Please add at least one location*. Jika muncul *QR code limit reached*, Anda telah memakai semua kode dalam paket. Pindahkan kode yang tidak lagi dibutuhkan ke tempat sampah, atau [tingkatkan paket](/documentation/plans-and-limits/).
