
const daftarEmail = [
    "Andi@gmail.com",
    "Budi@gmail.com",
    "Sari@gmail.com",
    "Andi@gmail.com",
    "Rina@gmail.com",
    "Budi@gmail.com"
];

function cekDuplikat(emails) {
    const hitungEmail = {};

    // utkk menghitung berapa kali tiap email muncul
    for (let i = 0; i < emails.length; i++) {
        const email = emails[i];
        if (hitungEmail[email]) {
            hitungEmail[email]++;
        } else {
            hitungEmail[email] = 1;
        }
    }

    // mengambil yang muncul lebih dari 1 kali
    const duplikat = [];
    for (const email in hitungEmail) {
        if (hitungEmail[email] > 1) {
            duplikat.push(email);
        }
    }

    return duplikat;
}

const hasil = cekDuplikat(daftarEmail);

if (hasil.length > 0) {
    console.log("Email yang terdeteksi duplikat:");
    for (let i = 0; i < hasil.length; i++) {
        console.log(`- ${hasil[i]}`);
    }
} else {
    console.log("Tidak ada data duplikat.");
}
