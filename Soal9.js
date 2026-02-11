
const antrianPendaftar = ["Alya", "Bima", "Citra", "Doni", "Eka"];
const kuota = 3;

function prosesPendaftaran(antrian, kuotaMaks) {
    const diterima = [];
    const ditolak = [];

    for (let i = 0; i < antrian.length; i++) {
        // selama kuota belum penuh, terima peserta
        if (diterima.length < kuotaMaks) {
            diterima.push(antrian[i]);
        } else {
            ditolak.push(antrian[i]);
        }
    }

    return { diterima, ditolak };
}

const hasil = prosesPendaftaran(antrianPendaftar, kuota);

console.log("Peserta yang diterima:");
for (let i = 0; i < hasil.diterima.length; i++) {
    console.log(`- ${hasil.diterima[i]}`);
}

console.log("\nPeserta yang ditolak:");
for (let i = 0; i < hasil.ditolak.length; i++) {
    console.log(`- ${hasil.ditolak[i]}`);
}
