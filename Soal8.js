
const dataPeserta = [
    { nama: "Alya", status: "active", kategori: "Web", nilai: 85 },
    { nama: "Bima", status: "active", kategori: "Data", nilai: 75 },
    { nama: "Citra", status: "inactive", kategori: "Web", nilai: 901 },
    { nama: "Doni", status: "active", kategori: "Web", nilai: 95 },
    { nama: "Eka", status: "active", kategori: "Data", nilai: 80 }
];

function filterKelasLanjutan(data) {
    const lolos = [];

    for (let i = 0; i < data.length; i++) {
        const peserta = data[i];

        //  syarat harus terpenuhi semua
        const aktif = peserta.status === "active";
        const kategoriWeb = peserta.kategori === "Web";
        const nilaiCukup = peserta.nilai >= 80;

        if (aktif && kategoriWeb && nilaiCukup) {
            lolos.push({ nama: peserta.nama, nilai: peserta.nilai });
        }
    }

    return lolos;
}

const hasil = filterKelasLanjutan(dataPeserta);

console.log("Peserta yang lolos ke kelas lanjutan:");
for (let i = 0; i < hasil.length; i++) {
    console.log(`- ${hasil[i].nama} (Nilai: ${hasil[i].nilai})`);
}
