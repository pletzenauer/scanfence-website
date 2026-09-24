---
title: Geofence
description: Gambar zona di peta agar kode QR Anda hanya berfungsi bagi orang yang benar-benar berada di sana.
---

Geofence adalah lingkaran di peta: satu titik tengah dan radius antara **50 m dan 5.000 m**. Saat seseorang memindai kode yang terhubung ke geofence, ponselnya melaporkan posisinya, dan ScanFence memeriksa apakah titik tersebut berada di dalam lingkaran.

**Penggunaan umum:** check-in yang hanya berlaku di lokasi, pemesanan dari meja yang hanya berfungsi di restoran, konten acara khusus untuk pengunjung di tempat, dan absensi karyawan di lokasi kerja.

## Halaman Geofences

<figure><img src="/images/docs/geofences-dark.webp" alt="Halaman Geofences yang mencantumkan empat zona dengan koordinat titik tengah, radius, status, serta tindakan edit dan hapus" width="1600" height="1250" loading="lazy"><figcaption>Semua zona workspace Anda dalam satu tabel.</figcaption></figure>

Untuk setiap zona, tabel menampilkan **nama** dan deskripsi, koordinat **titik tengah**, **radius**, dan **status**.

- Klik **Active / Inactive** untuk mengaktifkan atau menonaktifkan zona.
- <kbd>Edit</kbd> membuka zona untuk memindahkan atau mengubah ukurannya.
- <kbd>Delete</kbd> menghapus zona secara permanen.

## Membuat atau mengedit zona

1. Klik <kbd>+ New geofence</kbd>, atau <kbd>Edit</kbd> pada zona yang sudah ada.
2. Masukkan **Name** dan, jika mau, **Description**, misalnya *Loading bay 1–4*.
3. Ketik alamat di **Address search** lalu klik <kbd>Search</kbd>. Peta akan berpindah ke sana.
4. Sesuaikan titik tengah dengan **mengklik peta**. Koordinat di atas peta diperbarui setiap kali Anda mengklik.
5. Geser penggeser **Radius**. Petunjuk di bawahnya menerjemahkan meter ke ukuran blok kota.
6. Klik <kbd>Create geofence →</kbd> atau <kbd>Update geofence →</kbd>.

<figure><img src="/images/docs/geofence-edit-dark.webp" alt="Jendela Edit geofence dengan nama, deskripsi, penggeser radius pada 75 meter, pencarian alamat, dan peta berisi zona" width="1600" height="1250" loading="lazy"><figcaption>Mengedit zona. Klik di mana saja pada peta untuk memindahkan titik tengahnya.</figcaption></figure>

## Memilih radius yang tepat

Ponsel tidak mengetahui posisinya dengan persis. Di luar ruangan, GPS biasanya akurat hingga 5–20 m; di dalam ruangan, di pusat kota yang padat, atau di bawah tanah bisa 50 m atau lebih buruk. Pilih radius yang mencakup tempat tersebut **ditambah** ketidakpastian itu.

| Tempat | Radius yang disarankan |
|---|---|
| Satu toko, kafe, atau stan | 50–100 m |
| Tempat acara, hotel, gedung kantor | 100–250 m |
| Area festival, kampus, resor | 250–1,000 m |
| Satu distrik atau kota kecil | 1,000–5,000 m |

> **Uji di lokasi.** Sebelum mencetak, pindai kode di tepi-tepi tempat tersebut, sebaiknya juga di dalam ruangan. Jika orang yang berada di dalam ditolak, perbesar radiusnya.

## Menghubungkan kode ke zona

Zona dibuat bersamaan dengan kode: pilih jenis **Geofence** di jendela **Generate a code** dan isi kolom lokasinya. Lihat [Membuat kode QR](/documentation/create-qr-codes/#geofence-codes). Zona baru kemudian juga muncul di halaman Geofences, tempat Anda dapat menyesuaikannya nanti tanpa mencetak ulang.

Ingin satu kode yang berfungsi di beberapa tempat, masing-masing dengan halamannya sendiri? Gunakan [kode multi-lokasi](/documentation/multi-location/).

## Privasi

Lokasi hanya diminta saat pemindaian, dan hanya untuk kode yang membutuhkannya. Pemindai melihat permintaan izin biasa dari ponsel mereka dan dapat menolaknya. Posisi mereka digunakan untuk pemeriksaan dan dapat disimpan bersama pemindaian untuk analitik Anda; ScanFence tidak melacak siapa pun sebelum atau sesudah pemindaian.
