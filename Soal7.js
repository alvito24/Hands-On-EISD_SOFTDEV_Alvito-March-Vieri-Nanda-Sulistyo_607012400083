
const dataPendaftar = [
    { nama: "Alya", status: "active", nilaiSeleksi: 85 },
    { nama: "Bima", status: "inactive", nilaiSeleksi: 90 },
    { nama: "Citra", status: "active", nilaiSeleksi: 70 },
    { nama: "Doni", status: "active", nilaiSeleksi: 95 },
    { nama: "Eka", status: "inactive", nilaiSeleksi: 60 }
];

function filterDanMapping(data) {
    const hasil = [];

    for (let i = 0; i < data.length; i++) {
        const peserta = data[i];

        // hanya ambil yang active dan nilai >= 80
        if (peserta.status === "active" && peserta.nilaiSeleksi >= 80) {
            // ubah struktur: buang status, rename nilaiSeleksi jadi nilai
            hasil.push({
                nama: peserta.nama,
                nilai: peserta.nilaiSeleksi
            });
        }
    }

    return hasil;
}

const hasilMapping = filterDanMapping(dataPendaftar);

console.log("Hasil filter & mapping:");
console.log(hasilMapping);
