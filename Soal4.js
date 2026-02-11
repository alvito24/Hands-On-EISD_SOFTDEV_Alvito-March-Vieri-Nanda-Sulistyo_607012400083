
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function tanya(pertanyaan) {
  return new Promise((resolve) => {
    rl.question(pertanyaan, resolve);
  });
}

function validasiPendaftaran(nama, email, studyGroup, jumlahPeserta) {
  const masalah = [];

  if (!nama.trim()) {
    masalah.push("Nama tidak boleh kosong");
  }

  // email harus ada issi dan mengandung @
  if (!email.trim() || !email.includes("@")) {
    masalah.push("Email tidak valid atau kosong");
  }

  if (!studyGroup.trim()) {
    masalah.push("Pilihan study group tidak boleh kosong");
  }

  // konversi ke angka, baru dicek
  const jumlah = Number(jumlahPeserta);
  if (isNaN(jumlah) || jumlah < 1) {
    masalah.push("Jumlah peserta harus berupa angka dan minimal 1");
  }

  return {
    valid: masalah.length === 0,
    masalah
  };
}

async function main() {
  const nama = await tanya("Nama peserta: ");
  const email = await tanya("Email: ");
  const studyGroup = await tanya("Pilihan study group: ");
  const jumlahPeserta = await tanya("Jumlah peserta terdaftar: ");

  const hasil = validasiPendaftaran(nama, email, studyGroup, jumlahPeserta);

  if (hasil.valid) {
    console.log("\nData valid");
  } else {
    console.log("\nData tidak valid");
    // utk tampilam semua masalah sekaligus, biar user ga harus submit ulang berkali-kali
    hasil.masalah.forEach((msg) => console.log(`- ${msg}`));
  }

  rl.close();
}

main();
