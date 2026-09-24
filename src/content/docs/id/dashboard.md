---
title: Dasbor
description: Angka hari ini dan daftar langsung pemindaian terbaru, layar pertama setelah Anda masuk.
---

<figure><img src="/images/docs/dashboard-dark.webp" alt="Dasbor dengan empat kotak angka dan tabel aktivitas pemindaian terbaru" width="1600" height="1250" loading="lazy"><figcaption>Dasbor diperbarui secara langsung, tanpa perlu memuat ulang.</figcaption></figure>

## Empat kotak angka

| Kotak | Menampilkan |
|---|---|
| **Scans · today** | Semua pemindaian kode workspace Anda sejak tengah malam. |
| **Compliance** | Porsi pemindaian hari ini dengan pemeriksaan lokasi yang terjadi di dalam geofence. 90 % atau lebih berarti *healthy*, di bawahnya *watch*. |
| **Geofences** | Jumlah zona Anda yang aktif. |
| **Active users** | Jumlah orang di workspace Anda. |

Tingkat kepatuhan yang menurun biasanya berarti salah satu dari dua hal: orang mencoba kode jauh dari lokasi, atau zona terlalu kecil untuk ketepatan GPS di tempat itu. [Analitik](/documentation/analytics/) menunjukkan penyebabnya.

## Aktivitas pemindaian terbaru

Tabel ini mencantumkan sepuluh pemindaian terakhir secara langsung:

- **When:** tanggal dan waktu pemindaian.
- **User · QR:** siapa yang memindai dan kode mana. Masyarakat umum ditampilkan sebagai *Anonymous*.
- **Verdict:** *Verified* di dalam zona, *Blocked* di luar.
- **Where:** zona yang menjadi acuan pemeriksaan.
- **Delta:** jarak dari titik tengah zona.

## Spanduk yang mungkin muncul

- **Undangan tim:** seseorang mengundang Anda ke workspace mereka. Klik <kbd>Review</kbd> untuk menerima atau menolak. Lihat [Tim dan peran](/documentation/team/#joining-a-team).
- **Tidak ada langganan aktif:** akun Anda berfungsi, tetapi membuat dan memindai kode memerlukan paket. Klik <kbd>View plans →</kbd>.
