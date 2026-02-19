//==================================================================
// kelipatan.js
// Deskripsi: menampil kanangka kelipatan 5 (5, 10, 15, dst) sampai angka 50
//menggunakan for loop .
//==================================================================

let batasAtas = 50; //batas angka yang ingin dicek

console.log("Menampilkan angka kelipatan 5 dari 1 sampai " + batasAtas); // menampilkan informasi batas angka yang ingin dicek

for (let i = 1; i <= batasAtas; i++) { // jika sisa bagi 5 adalah 0 maka angka tersebut adalah kelipatan 5

    if (i % 5 === 0) {
        console.log("angka " + i + " adalah kelipatan 5");
    }
}