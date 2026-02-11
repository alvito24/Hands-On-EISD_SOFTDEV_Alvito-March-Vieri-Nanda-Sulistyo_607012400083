// Soal 2 - Array Reading Dasar
// Membaca data array dan menentukan kondisi sederhana

const dataStudyGroup = [
    { nama: "Software Development", kuota: 20, terdaftar: 18 },
    { nama: "UI/UX Design", kuota: 15, terdaftar: 15 },
    { nama: "Technopreneur", kuota: 25, terdaftar: 10 },
    { nama: "Intelligence System", kuota: 10, terdaftar: 10 }
];

function cekKetersediaan(data) {
    const tersedia = [];
    const penuh = [];

    for (let i = 0; i < data.length; i++) {
        const sg = data[i];

        if (sg.terdaftar >= sg.kuota) {
            // logging anomali kalau terdaftar melebihi kuota
            if (sg.terdaftar > sg.kuota) {
                console.warn(`[Anomali] ${sg.nama}: terdaftar (${sg.terdaftar}) melebihi kuota (${sg.kuota})`);
            }
            penuh.push(sg.nama);
        } else {
            tersedia.push(sg.nama);
        }
    }

    return { tersedia, penuh };
}

// jalankan fungsi
const hasil = cekKetersediaan(dataStudyGroup);

console.log("Study Group yang masih tersedia:");
for (const nama of hasil.tersedia) {
    console.log(`- ${nama}`);
}

console.log("\nStudy Group yang sudah penuh:");
for (const nama of hasil.penuh) {
    console.log(`- ${nama}`);
}
