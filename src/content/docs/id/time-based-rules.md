---
title: Aturan berbasis waktu
description: Arahkan pemindai ke halaman lain pada jam tertentu, hari tertentu, atau dalam rentang tanggal tertentu, tanpa mencetak ulang kode.
---

Aturan berbasis waktu memberi kode tujuan kedua yang hanya berlaku selama syaratnya terpenuhi. Di luar waktu tersebut, kode berfungsi seperti biasa.

**Contoh**

- Kode di meja restoran membuka menu makan siang pukul 11.30 sampai 15.00 pada hari kerja, dan menu biasa di luar itu.
- Poster mengarah ke toko tiket sampai acara berlangsung, lalu ke galeri foto setelahnya.
- Kode di etalase toko menampilkan "kami buka, silakan masuk" selama jam buka dan toko online di malam hari.

## Menambahkan aturan

1. Pada kartu kode, klik <kbd>Add time-based rules</kbd>. Anda juga dapat mengaktifkan **Time-based rules** saat membuat kode.
2. Aktifkan **Time-based rules**.
3. Masukkan **Time-based destination URL**: tujuan orang selama aturan berlaku.
4. Aktifkan syarat yang Anda perlukan:
   - **Time of day:** jam **Open** dan **Close**, misalnya 09:00 sampai 17:00.
   - **Days of week:** klik hari yang ingin disertakan. Senin sampai Jumat sudah terpilih secara default.
   - **Date range:** tanggal mulai dan tanggal akhir.
5. Klik <kbd>Save rules</kbd>.

<figure class="medium"><img src="/images/docs/qr-time-rules-dark.webp" alt="Jendela Edit time-based rules dengan jam 09:00 sampai 17:00 dan Senin sampai Jumat terpilih" width="1008" height="1197" loading="lazy"><figcaption>Aturan ini berlaku pada hari kerja pukul 9.00 sampai 17.00. Di luar waktu itu, kode membuka halaman default-nya.</figcaption></figure>

## Cara syarat digabungkan

**Semua syarat yang aktif harus terpenuhi pada saat yang sama.** Dengan *Time of day 09:00–17:00* dan *Mon–Fri*, aturan berlaku pada hari kerja selama jam kantor, dan tidak berlaku pada hari Sabtu siang.

Jika Anda mengaktifkan aturan tanpa syarat apa pun, aturan berlaku setiap saat.

## Mengubah atau menghapus aturan

Klik <kbd>View time-based rules</kbd> pada kartu untuk melihat jadwal, lalu edit. Untuk menghapus aturan, nonaktifkan **Time-based rules** lalu klik <kbd>Save rules</kbd>.

Setiap kode memiliki satu aturan. Untuk kode dengan beberapa rentang waktu, misalnya sarapan, makan siang, dan makan malam, gunakan [kode multi-lokasi](/documentation/multi-location/), yang memungkinkan setiap lokasi memiliki jadwal dan prioritasnya sendiri.

## Tips

- Aturan memerlukan kode dinamis. Mengaktifkan aturan saat membuat kode otomatis menjadikannya dinamis.
- Uji aturan baru dengan memindai di dalam dan di luar rentang waktunya sebelum mencetak.
- Bandingkan lalu lintas aturan dan default di **Rule type distribution** dan **Time-based rule performance** pada halaman [Analitik](/documentation/analytics/).
