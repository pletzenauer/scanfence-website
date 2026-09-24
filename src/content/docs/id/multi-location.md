---
title: Kode multi-lokasi
description: Satu kode cetak, hingga sepuluh tempat, masing-masing dengan tujuan, jadwal, dan batas pemindaian sendiri.
---

Kode multi-lokasi memeriksa posisi pemindai dan mengarahkannya ke halaman zona tempat ia berada. Jika ia berada di beberapa zona sekaligus, zona terdekat yang dipakai. Siapa pun di luar semua zona diarahkan ke **fallback URL**.

**Contoh:** sebuah jaringan kafe mencetak papan meja yang sama untuk semua cabangnya. Di setiap kafe, kode membuka menu kafe tersebut; di rumah, kode membuka situs web jaringan kafe.

## Membuat kode

1. Di **QR Codes**, klik <kbd>+ Generate QR</kbd> lalu pilih **Multi-location**.
2. Masukkan **Fallback URL (Default)**: tujuan orang yang tidak berada di lokasi Anda mana pun, atau yang tidak membagikan lokasinya.
3. Klik **Add location** dan isi:
   - **Label/Name**, misalnya *Café Old Town*
   - **Search by address**, atau **Latitude** dan **Longitude**
   - **Radius (meters)**
   - **Destination URL** untuk tempat ini
4. Ulangi hingga **10 lokasi**. Entri yang belum lengkap ditandai *(incomplete)* sampai semua kolom terisi.
5. Klik <kbd>Generate QR →</kbd>.

## Tambahan per lokasi

Setiap lokasi dapat memiliki:

- **Jadwal berbasis waktu** dengan **Time of day**, **Days of week** dan **Date range**, ditambah **Priority** dari 1 sampai 10. Gunakan jika suatu tempat hanya berlaku selama jam bukanya.
- **Batas kelangkaan:** N pemindaian pertama di lokasi ini mendapatkan halamannya; semua orang setelahnya mendapatkan **Fallback URL (when limit reached)** milik lokasi tersebut.

## Mengedit lokasi dan melihat angkanya

Pada kartu kode, klik <kbd>Edit locations & stats</kbd>. Jendela **Location rules & statistics** menampilkan semua zona di satu peta, dengan warna berbeda untuk setiap lokasi. Di bawah peta Anda dapat mencari di daftar, menambah, mengedit, atau menghapus lokasi, serta melihat statistik pemindaian, jumlah pemindaian maksimum, dan aturan waktu masing-masing.

<figure><img src="/images/docs/multi-overview-dark.webp" alt="Jendela Location rules and statistics dengan tiga lokasi kafe yang ditampilkan sebagai lingkaran berwarna di peta kota" width="1600" height="1250" loading="lazy"><figcaption>Tiga lokasi dari satu kode di satu peta bersama. Pengguna lapangan dapat melihat jendela ini tetapi tidak dapat mengubahnya.</figcaption></figure>

## Tips

- Sebisa mungkin hindari zona yang saling tumpang tindih. Jika tumpang tindih, titik tengah terdekat yang dipakai.
- Kode multi-lokasi dihitung sebagai satu kode dalam paket Anda, berapa pun jumlah lokasinya.
- Kode multi-lokasi selalu melewati ScanFence, sehingga Anda dapat mengedit setiap lokasi nanti tanpa mencetak ulang.
