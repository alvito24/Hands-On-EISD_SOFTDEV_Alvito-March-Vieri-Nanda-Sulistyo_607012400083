
const dataStudyGroup = [
    { nama: "Web Development Dasar", peserta: 18 },
    { nama: "Logic & Algorithm", peserta: 15 },
    { nama: "Frontend Fundamental", peserta: 10 },
    { nama: "Backend Introduction", peserta: 10 }
];

function hitungStatistik(data) {
    let totalPeserta = 0;

    // dijumlahkan satu per satu sesuai instruksi soal
    for (let i = 0; i < data.length; i++) {
        totalPeserta += data[i].peserta;
    }

    const rataRata = totalPeserta / data.length;

    return { totalPeserta, rataRata };
}

// utk menampilan data tiap study group
console.log("Data Peserta Study Group EISD Lab:");
console.log("==================================");

for (let i = 0; i < dataStudyGroup.length; i++) {
    const sg = dataStudyGroup[i];
    console.log(`${sg.nama}: ${sg.peserta} peserta`);
}

// utk hitung dan menampilkan hasil
const hasil = hitungStatistik(dataStudyGroup);

console.log("\n--- Hasil Perhitungan ---");
console.log(`Total seluruh peserta: ${hasil.totalPeserta}`);
console.log(`Rata-rata per Study Group: ${hasil.rataRata}`);
