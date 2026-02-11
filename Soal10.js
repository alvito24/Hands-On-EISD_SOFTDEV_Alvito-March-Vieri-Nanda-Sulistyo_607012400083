
const antrianPeminjam = ["Alya", "Bima", "Citra", "Doni", "Eka", "Farah"];
let stokBuku = 4;

function simulasiPeminjaman(antrian, stok) {
    const berhasil = [];
    const gagal = [];

    for (let i = 0; i < antrian.length; i++) {
        const nama = antrian[i];

        if (stok > 0) {
            stok--;
            berhasil.push(nama);
            console.log(`${nama} -> Peminjaman berhasil (sisa buku: ${stok})`);
        } else {
            // buku habis, tolak lalu hentikan simulasi
            gagal.push(nama);
            console.log(`${nama} -> Gagal (buku habis)`);
            console.log("Simulasi dihentikan.\n");
            break;
        }
    }

    return { berhasil, gagal };
}

console.log("Simulasi Peminjaman Buku Perpustakaan");
console.log(`Stok awal: ${stokBuku} eksemplar\n`);

const hasil = simulasiPeminjaman(antrianPeminjam, stokBuku);

console.log("Daftar peminjam yang berhasil:");
for (let i = 0; i < hasil.berhasil.length; i++) {
    console.log(`- ${hasil.berhasil[i]}`);
}

console.log("\nDaftar peminjam yang ditolak:");
for (let i = 0; i < hasil.gagal.length; i++) {
    console.log(`- ${hasil.gagal[i]}`);
}
