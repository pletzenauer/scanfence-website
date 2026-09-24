---
title: Log audit
description: Siapa mengubah apa dan kapan. Catatan setiap perubahan di workspace Anda.
---

Log audit mencatat setiap kali seseorang di workspace Anda membuat, mengubah, atau menghapus sesuatu: kode QR, geofence, anggota tim dan undangan, langganan, kategori, dan tag. Gunakan log ini untuk menjawab pertanyaan seperti "siapa yang mengubah tautan menu hari Jumat?" atau untuk menunjukkan kepada auditor bagaimana kode Anda dikelola.

<figure><img src="/images/docs/audit-log-dark.webp" alt="Halaman Audit Log dengan filter dan daftar perubahan terbaru" width="1600" height="1250" loading="lazy"><figcaption>Log audit, yang terbaru di atas.</figcaption></figure>

## Membaca daftar

Setiap baris menampilkan **kapan** hal itu terjadi, **siapa** yang melakukannya, **tindakan** (*Insert* untuk baru, *Update* untuk diubah, *Delete* untuk dihapus), **tabel** yang terpengaruh, dan ringkasan singkat seperti *3 fields changed*.

**Klik sebuah baris** untuk membukanya. Anda akan melihat setiap kolom yang berubah beserta nilai lama dan barunya secara berdampingan.

## Mencari entri

- **Search** berdasarkan pengguna, tabel, atau tindakan.
- **Action:** hanya insert, update, atau delete.
- **Table:** hanya kode QR, geofence, profil pengguna, undangan tim, langganan, kategori, atau tag.
- **From / To:** rentang tanggal.
- **Clear filters** mengatur ulang semuanya.

Halaman ini menampilkan 500 kejadian terbaru yang cocok. Persempit filter untuk melihat yang lebih lama.

## Ekspor

<kbd>Export CSV →</kbd> mengunduh entri yang difilter dengan stempel waktu, email pengguna, tindakan, tabel, ID catatan, serta data lama dan baru.
