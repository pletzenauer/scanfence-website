---
title: Analitik
description: Peta, grafik, dan ekspor pemindaian Anda, untuk seluruh workspace atau untuk satu kode.
---

## Halaman Analytics

Buka **Analytics** di menu. Secara default, halaman ini menampilkan 7 hari terakhir.

<figure><img src="/images/docs/analytics-dark.webp" alt="Halaman Analytics dengan kotak angka, rentang tanggal, filter, dan peta pemindaian" width="1600" height="1250" loading="lazy"><figcaption>Analitik untuk rentang tanggal yang dipilih.</figcaption></figure>

### Kotak angka

- **Today's scans:** pemindaian sejak tengah malam, diperbarui secara langsung.
- **Active users:** orang yang memindai dalam 5 menit terakhir.
- **Avg accuracy:** rata-rata ketepatan GPS ponsel, dalam meter. Makin kecil makin baik.
- **High precision:** pemindaian dengan akurasi lebih baik dari 20 m.

### Rentang tanggal dan filter

Pilih tanggal **mulai** dan **akhir** di bagian **Date range**. Di bagian **Filters**, klik tag untuk hanya menampilkan kode yang memiliki tag tersebut. **Clear** mengatur ulang filter.

### Grafik

| Panel | Informasi yang ditampilkan |
|---|---|
| **Scan locations · map** | Lokasi pemindaian. Titik hijau berada di dalam zona, merah di luar, biru campuran atau tidak diketahui. Pemindaian yang berdekatan dikelompokkan; perbesar peta untuk memisahkannya. |
| **Scans over time** | Pemindaian per hari. Berguna untuk melihat dampak kampanye atau acara. |
| **Compliance rate** | Di dalam dibandingkan di luar geofence, dalam bentuk grafik cincin. |
| **Location accuracy** | Jumlah pemindaian dengan GPS sangat baik (di bawah 10 m), baik (10–20 m), cukup (20–50 m) atau buruk (di atas 50 m). Banyak pemindaian *poor* menandakan lokasi di dalam ruangan. Pertimbangkan radius yang lebih besar. |
| **Live scan feed** | Sepuluh pemindaian terakhir secara langsung. |
| **Scans by geofence · top 10** | Kode Anda yang paling sering dipindai. |
| **Rule type distribution** | Jumlah pemindaian yang diarahkan oleh aturan waktu, oleh lokasi, atau ke halaman default. |
| **Time-based rule performance** | Seberapa sering setiap aturan waktu berlaku. |

### Ekspor

<kbd>Export CSV →</kbd> mengunduh semua pemindaian dalam rentang tanggal yang dipilih sebagai spreadsheet: tanggal, waktu, pengguna, geofence, di dalam atau di luar, jarak, koordinat, akurasi, ketinggian, kecepatan, baterai, dan jenis jaringan. Buka di Excel, Numbers, atau Google Sheets.

## Analitik untuk satu kode

Pada kartu kode mana pun, klik <kbd>View analytics</kbd>. Jendela ini menampilkan total pemindaian kode, pemindaian yang memiliki lokasi, dan waktu pemindaian terakhir, diikuti peta dan pemindaian terbaru beserta detailnya.

<figure><img src="/images/docs/qr-analytics-dark.webp" alt="Jendela analitik satu kode dengan total, tombol ekspor, dan peta lokasi pemindaian" width="1600" height="1250" loading="lazy"><figcaption>Analitik per kode. Warna pada peta menunjukkan berapa banyak pemindaian terjadi di titik yang sama.</figcaption></figure>

Dari sini Anda dapat mengekspor pemindaian kode sebagai **CSV** atau sebagai laporan **PDF**, praktis untuk dikirim ke klien atau atasan. Jendela ini menampilkan 100 pemindaian terakhir; halaman Analytics dan ekspornya mencakup lebih banyak.

## Apa yang dihitung

- Kode standar statis tidak dihitung: ponsel langsung membuka tautan Anda tanpa melalui ScanFence. Jadikan kode dinamis agar dapat dilacak. Lihat [Statis atau dinamis](/documentation/create-qr-codes/#static-or-dynamic).
- Agar angka tetap jujur, pemindaian berulang dari jaringan yang sama hanya dihitung hingga 30 per jam per kode.
