
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function cekStatus(kuota, terdaftar) {
    // cek kondisi jika pnuh 
    if (terdaftar > kuota) return "Pendaftaran ditolak";
    if (terdaftar === kuota) return "Pendaftaran ditutup";

    // 3 slot terakhir sebelum penuh 
    if (terdaftar >= kuota - 3) return "Hampir penuh";

    return "Pendaftaran diterima";
}

rl.question("Masukkan kuota maksimal: ", (inputKuota) => {
    rl.question("Masukkan jumlah peserta terdaftar: ", (inputTerdaftar) => {
        const kuota = parseInt(inputKuota);
        const terdaftar = parseInt(inputTerdaftar);

        const status = cekStatus(kuota, terdaftar);
        console.log(`\nStatus pendaftaran: ${status}`);

        rl.close();
    });
});
