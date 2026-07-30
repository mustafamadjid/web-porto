# Dokumentasi Pengujian Performa Sistem Ujian Sekolah

## 1. System Under Test (SUT)

**System Under Test (SUT)** adalah sistem atau komponen sistem yang menjadi objek utama dalam proses pengujian. Pada pengujian performa, dokumentasi SUT digunakan untuk menjelaskan kondisi lingkungan pengujian, seperti spesifikasi perangkat keras, perangkat lunak, basis data, arsitektur aplikasi, serta konfigurasi server yang digunakan.

Informasi tersebut penting karena hasil pengujian performa tidak hanya dipengaruhi oleh implementasi aplikasi, tetapi juga oleh kapasitas dan konfigurasi lingkungan tempat sistem dijalankan. Melalui dokumentasi SUT, analisis terhadap hasil pengujian dapat dilakukan secara lebih terukur.

### Tabel 4.31 Lingkungan Sistem

| Komponen | Spesifikasi / Teknologi | Keterangan |
|---|---|---|
| Nama Sistem | Sistem Ujian Sekolah Berbasis Web | Sistem yang diuji pada pengujian performa |
| Jenis Aplikasi | Web Application | Aplikasi diakses melalui browser |
| Frontend | ReactJS | Antarmuka pengguna |
| Backend | Golang | Penyedia REST API |
| Database | PostgreSQL 16 | Penyimpanan data pengguna, soal, ujian, jawaban, dan nilai |
| Reverse Proxy | Traefik v3 | Mengatur routing HTTP/HTTPS |
| Deployment | Docker Compose | Menjalankan setiap service dalam container |
| Server | 4 vCPU, 4 GB RAM | Lingkungan server pengujian |
| Sistem Operasi | Ubuntu Server | Sistem operasi pada server |
| Tool Pengujian | k6 / Locust | Tool untuk simulasi virtual user |
| Target Pengguna | Siswa | Pengujian difokuskan pada alur pengerjaan ujian |

## 2. Skenario Pengujian

Skenario pengujian dibuat berdasarkan alur utama siswa ketika mengikuti ujian. Alur ini dipilih karena proses pengerjaan ujian merupakan fitur utama sistem dan memiliki potensi beban tinggi ketika banyak siswa mengakses sistem secara bersamaan.

### Tabel 4.32 Skenario Pengujian

| No. | Aktivitas | Deskripsi |
|---:|---|---|
| 1 | Login | Siswa melakukan autentikasi ke dalam sistem. |
| 2 | Masuk halaman ujian | Siswa membuka halaman daftar atau detail ujian. |
| 3 | Mengambil detail ujian | Sistem mengambil informasi ujian yang tersedia. |
| 4 | Memasukkan token ujian | Siswa memasukkan token untuk mengakses ujian. |
| 5 | Mengambil daftar soal | Sistem menampilkan daftar soal ujian. |
| 6 | Menyimpan jawaban | Siswa menyimpan jawaban selama mengerjakan ujian. |
| 7 | Submit ujian | Siswa mengirimkan jawaban akhir. |
| 8 | Penyimpanan hasil | Sistem menyimpan hasil ujian dan menjalankan proses penilaian. |

## 3. Konfigurasi Pengujian

Pengujian dilakukan melalui dua tahap, yaitu **baseline test** dan **load test**. Kedua jenis pengujian tersebut memiliki tujuan yang berbeda.

**Baseline test** digunakan sebagai pembanding performa awal sistem ketika menerima beban ringan. Sementara itu, **load test** digunakan untuk mengevaluasi performa sistem pada kondisi penggunaan yang lebih mendekati keadaan sebenarnya, yaitu ketika banyak siswa mengakses sistem dalam waktu bersamaan.

### Tabel 4.33 Jenis Pengujian

| No. | Jenis Pengujian | Virtual User | Iterasi per Virtual User | Keterangan |
|---:|---|---:|---:|---|
| 1 | Baseline Test | 5 user | 1 iterasi | Digunakan untuk memperoleh gambaran performa awal sistem pada beban rendah. |
| 2 | Load Test | 25 user | 1 iterasi | Digunakan untuk mengukur performa sistem saat digunakan oleh banyak pengguna secara bersamaan. |

## 4. Hasil Pengujian Performa

### Tabel Hasil Pengujian Performa

| No. | Jenis Pengujian | Virtual Users | Rata-rata Response Time | p(95) Response Time | Error Rate |
|---:|---|---:|---:|---:|---:|
| 1 | Baseline Testing | 5 VUs | 18,61 ms | 28,20 ms | 0% |
| 2 | Load Testing Tahap 1 | 25 VUs | 22,85 ms | 28,15 ms | 0% |
| 3 | Load Testing Tahap 2 | 50 VUs | 23,66 ms | 25,42 ms | 0% |
| 4 | Load Testing Tahap 3 | 100 VUs | 29,36 ms | 19,13 ms | 0% |
