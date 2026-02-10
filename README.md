## Jawaban Soal 1 (Non-Coding)

### Berdasarkan kejadian di hari pertama pendaftaran, terdapat empat masalah :
1. Double submit saat klik daftar karna loading lama
2. Data yang tidak valid masuk sistem Pengisian nama dan email yang tidak sesuai format (contoh: "." atau "aaa")
3. Pelanggaran Kuota karena sistem tetap menerima pendaftar meskipun kapasitas 25 orang sudah terpenuhi.
4. Tidak ada data jelas yang resmi

Jika saya hanya boleh memperbaiki satu hal, saya akan memprioritaskan Implementasi Validasi Input yang Ketat.
*  Alasan 1 : Data adalah aset. Jika dari gerbang awal (input) data sudah korup (seperti email "aaa"), maka seluruh proses selanjutnya seperti pengiriman email konfirmasi, pembuatan sertifikat, hingga absensi akan gagal total.
*  Alasan 2 : Mencegah data sampah masuk jauh lebih efisien daripada melakukan data cleaning di akhir. Validasi memastikan hanya data "berkualitas" yang menyentuh database.
*  Alasan 3 : Validasi mencegah human error dan meningkatkan reliabilitas sistem untuk tahap selanjutnya . Ini meminimalisir beban kerja manual panitia dalam memisahkan data valid dari data corrupt saat rekapitulasi.

Saya sadar bahwa double click dan over quota tetap akan terjadi di sistem. Validasi input hanya bertugas memastikan kualitas isi dari tiap data "apa" yang masuk itu valid, sebelum sistem mengurus "berapa banyak" data yang boleh masuk. Meskipun begitu, saya memprioritaskan perbaikan ini karena integritas data pendaftar adalah fondasi paling krusial.
Data yang berkualitas adalah syarat mendasar sebelum perbaikan tahap kuantitas.
