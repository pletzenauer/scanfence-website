---
title: Batas pemindaian
description: Izinkan hanya N pemindaian pertama, misalnya "100 orang pertama mendapat kopi gratis", dan arahkan semua orang setelahnya ke halaman pilihan Anda.
---

Batas pemindaian (disebut **global scarcity limit** di aplikasi) menghitung setiap pemindaian sebuah kode. Setelah hitungan mencapai batas, semua pemindai berikutnya diarahkan ke **halaman batas tercapai**, bukan ke tujuan biasa.

**Contoh:** 100 pengunjung pertama mendapat voucher; undian berakhir setelah 500 peserta; produk edisi terbatas habis terjual.

## Mengatur batas saat membuat kode

1. Di jendela **Generate a code**, centang **Global scarcity limit**. Batas awalnya 50.
2. Masukkan **Total scan limit**.
3. Masukkan **Limit-reached URL**, misalnya halaman "maaf, sudah habis".

## Mengatur atau mengubah batas nanti

Pada kartu kode, kotak **Scans & limits** menampilkan hitungan, misalnya *Total 37 / 100*, dengan bilah kemajuan.

- Klik <kbd>Edit</kbd> untuk mengubah **Global scan limit** (0 berarti tanpa batas) dan **Redirect URL when limit reached**, lalu <kbd>Save changes</kbd>.
- Klik <kbd>Reset</kbd> untuk mengembalikan penghitung ke 0 dan memulai putaran baru. Ini juga mengatur ulang penghitung aturan kode tersebut.

## Perlu diketahui

- Jika URL batas tercapai dikosongkan, orang akan melihat pesan singkat *This QR code has reached its scan limit*.
- Agar hitungan tetap adil, pemindaian berulang dari jaringan yang sama hanya dihitung hingga 30 kali per jam per kode. Pemindaian tambahan itu tetap membuka halaman; hanya saja tidak mengurangi batas Anda.
- [Kode multi-lokasi](/documentation/multi-location/) juga dapat memiliki batas tersendiri per lokasi.
