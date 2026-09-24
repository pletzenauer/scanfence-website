---
title: Mengelola kode Anda
description: Temukan, unduh, edit, nonaktifkan, dan hapus kode QR Anda, serta tetap rapi dengan kategori dan tag.
---

<figure><img src="/images/docs/qr-codes-dark.webp" alt="Halaman QR Codes dalam tampilan kisi dengan pencarian, filter, dan kartu kode" width="1600" height="1250" loading="lazy"><figcaption>Halaman QR Codes. Penghitung di bagian atas menunjukkan berapa kode yang diizinkan paket Anda.</figcaption></figure>

## Bilah alat

- **Active / Trash** beralih antara kode aktif dan kode yang sudah Anda hapus.
- **Grid / List** mengubah tata letak. Browser Anda mengingat pilihan ini.
- **My QR codes / All users** (khusus admin) menampilkan kode Anda sendiri, kode semua orang, atau kode satu rekan kerja.
- <kbd>Bulk</kbd> memungkinkan Anda mencentang beberapa kode dan memindahkannya ke tempat sampah sekaligus.
- <kbd>Upload</kbd> mengimpor banyak kode dari spreadsheet, jika unggah massal diaktifkan untuk akun Anda. Lihat [Unggah massal](/documentation/bulk-upload/).
- <kbd>+ Generate QR</kbd> membuat kode baru. Lihat [Membuat kode QR](/documentation/create-qr-codes/).

## Mencari dan memfilter

Kotak pencarian menemukan kode berdasarkan nama, tautan, tautan cadangan, nama geofence, atau tautan batas. Klik **Filters** untuk mempersempit daftar berdasarkan **kategori** atau **tag**. Jika beberapa tag dipilih, kode yang memiliki salah satunya akan ditampilkan. **Clear all filters** mengatur ulang semuanya.

## Kartu kode

<figure class="narrow"><img src="/images/docs/qr-card-dark.webp" alt="Satu kartu kode QR yang menampilkan jenis, nama, sakelar aktif, gambar QR, tag, dan tombol tindakan" width="471" height="1356" loading="lazy"><figcaption>Setiap kartu memuat kode dan semua tindakannya.</figcaption></figure>

Dari atas ke bawah:

- **Jenis dan nama**, misalnya *Geofence* atau *Standard · Dynamic*.
- **Sakelar Active / Inactive.** Klik untuk menonaktifkan kode dinamis, misalnya di akhir kampanye. Kode nonaktif berhenti berfungsi sampai Anda mengaktifkannya kembali.
- **Gambar QR**, diikuti kategori, tag, dan tujuan.
- <kbd>PNG</kbd> dan <kbd>SVG</kbd> mengunduh gambar. Gunakan SVG untuk cetak: tetap tajam di ukuran berapa pun. PNG cocok untuk slide dan dokumen.
- <kbd>Copy</kbd> menyalin tautan di dalam kode, praktis untuk menguji di komputer.
- <kbd>Delete</kbd> memindahkan kode ke tempat sampah.
- <kbd>Edit category & tags</kbd> mengubah pengelompokan kode.
- <kbd>Edit redirect URL</kbd> (kode dinamis) mengubah tujuan kode. Perubahan berlaku mulai pemindaian berikutnya dan kode yang dicetak tetap sama.
- <kbd>View analytics</kbd> membuka pemindaian kode ini: total, peta, 100 pemindaian terakhir, serta ekspor CSV atau PDF.
- <kbd>View location</kbd> (kode geofence) menampilkan zona di peta.
- <kbd>Edit locations & stats</kbd> (kode multi-lokasi) membuka editor lokasi.
- <kbd>Add time-based rules</kbd> / <kbd>View time-based rules</kbd>. Lihat [Aturan berbasis waktu](/documentation/time-based-rules/).
- **Scans & limits** menampilkan jumlah pemindaian dan batas yang berlaku. Lihat [Batas pemindaian](/documentation/scan-limits/).

## Tampilan daftar

Tampilan daftar memuat lebih banyak kode di layar, dengan tindakan yang sama dalam baris yang ringkas. Cocok untuk daftar panjang dan pemilihan massal.

<figure><img src="/images/docs/qr-list-dark.webp" alt="Halaman QR Codes dalam tampilan daftar" width="1600" height="1250" loading="lazy"><figcaption>Tampilan daftar.</figcaption></figure>

## Kategori dan tag

Gunakan **kategori** untuk pengelompokan utama (satu per kode, dengan warna) dan **tag** untuk hal lainnya (sebanyak yang Anda mau).

- **Kategori:** **Filters → Manage categories**. Buat, ganti nama, ubah warna, atau hapus. Menghapus kategori akan melepasnya dari semua kode, tetapi kodenya tetap ada.
- **Tag:** **My Settings → Tags**, atau buat saat membuat kode.

## Tempat sampah dan pemulihan

<kbd>Delete</kbd> tidak menghapus kode secara permanen; kode dipindahkan ke **Trash**. Kode di tempat sampah **langsung berhenti berfungsi**, sehingga orang yang memindainya akan melihat pesan kesalahan, bukan halaman Anda.

<figure><img src="/images/docs/qr-trash-dark.webp" alt="Tampilan tempat sampah dengan tombol pulihkan dan hapus permanen" width="1600" height="1250" loading="lazy"><figcaption>Tempat sampah. Pulihkan kode dan kode itu kembali berfungsi persis seperti sebelumnya.</figcaption></figure>

Di tempat sampah Anda dapat:

- <kbd>Restore</kbd> kode. Kode kembali dengan semua pengaturannya dan mulai berfungsi lagi.
- <kbd>Delete forever</kbd> kode. Tindakan ini tidak dapat dibatalkan.
- Memilih beberapa kode lalu memulihkan atau menghapusnya bersamaan.

Kode di tempat sampah tidak dihitung dalam batas paket Anda.

<div class="warn"><strong>Hati-hati dengan kode yang sudah dicetak.</strong> Sebelum menghapus kode yang sudah dicetak, pertimbangkan untuk menonaktifkannya saja, atau mengarahkannya ke halaman "penawaran ini telah berakhir" dengan <em>Edit redirect URL</em>.</div>
