---
title: Unggah massal
description: Buat puluhan atau ratusan kode QR sekaligus dari spreadsheet CSV.
---

Unggah massal berguna saat Anda membutuhkan banyak kode serupa: satu per meja, per produk, atau per cabang. Anda mengisi spreadsheet, menyimpannya sebagai CSV, lalu mengunggahnya. ScanFence membuat satu kode untuk setiap baris.

> Unggah massal diaktifkan oleh tim ScanFence. Jika Anda tidak melihat <kbd>Upload</kbd> di halaman QR Codes, [minta kami](mailto:hello@scanfence.com) untuk mengaktifkannya.

## Langkah demi langkah

1. Di halaman **QR Codes**, klik <kbd>Upload</kbd>.
2. Klik **Download sample CSV →** untuk mendapatkan `qr-codes-bulk-template.csv` berisi contoh baris.
3. Buka di Excel, Numbers, atau Google Sheets, lalu isi satu baris per kode. Biarkan baris pertama (nama kolom) apa adanya.
4. Simpan atau ekspor sebagai **CSV**.
5. Kembali ke jendela unggah, pilih file Anda di bagian **Upload your CSV file**. Pengunggahan langsung dimulai setelah file dipilih.
6. **Upload results** lalu menampilkan berapa kode yang berhasil dibuat dan, jika ada baris yang gagal, baris mana dan alasannya.

<figure class="medium"><img src="/images/docs/qr-bulk-upload-dark.webp" alt="Jendela Bulk upload QR codes yang mencantumkan kolom wajib, opsional, batas pemindaian, dan geofence" width="1344" height="1350" loading="lazy"><figcaption>Jendela unggah mencantumkan setiap kolom yang dapat dimiliki file.</figcaption></figure>

## Kolom

| Kolom | Wajib | Isi |
|---|---|---|
| `type` | Ya | `standard` atau `geofence` |
| `content` | Ya | Tautan atau teks. Untuk kode dinamis, alamat tujuan. |
| `name` | Tidak | Nama tampilan, misalnya *Table 12* |
| `category` | Tidak | Nama kategori yang sudah ada |
| `tags` | Tidak | Nama tag yang sudah ada, dipisahkan dengan `;` |
| `is_dynamic` | Tidak | `true` untuk menjadikan kode dinamis, selain itu biarkan kosong atau `false` |
| `global_scan_limit` | Tidak | Angka, misalnya `100`. Lihat [Batas pemindaian](/documentation/scan-limits/) |
| `limit_reached_url` | Tidak | Tujuan pengunjung setelah batas tercapai |
| `geofence_lat` | Untuk geofence | Lintang, misalnya `48.2082` |
| `geofence_lng` | Untuk geofence | Bujur, misalnya `16.3738` |
| `geofence_radius` | Tidak | Radius dalam meter, 50 sampai 5,000. Default 50 |

### Contoh

```
name,type,category,content,is_dynamic,global_scan_limit,limit_reached_url,geofence_lat,geofence_lng,geofence_radius,tags
Table 1,geofence,Menus,https://example.com/menu,true,,,48.2082,16.3738,60,tables;indoor
Launch offer,standard,Marketing,https://example.com/offer,true,100,https://example.com/sold-out,,,,promo
```

## Tips

- **Buat kategori dan tag terlebih dahulu.** Nama yang belum ada akan dilewati, dan kode dibuat tanpanya.
- **Temukan koordinat** dengan klik kanan pada suatu titik di Google Maps: entri pertama di menu adalah *latitude, longitude*.
- **Kode multi-lokasi** tidak dapat dibuat lewat spreadsheet. Buat kode tersebut di aplikasi. Lihat [Kode multi-lokasi](/documentation/multi-location/).
- **Kesalahan baris** menyebutkan barisnya, misalnya *Row 4: Missing required fields (type or content)* atau *Row 7: Geofence type requires valid geofence_lat and geofence_lng*. Perbaiki baris tersebut dan unggah ulang hanya baris itu; baris yang berhasil sudah dibuat.
- Kode dari unggah massal dihitung dalam batas paket Anda seperti kode lainnya.
