// Mencari Bilangan Genap atau Ganjil (loop + if)

//file: cekAngka.js
let batasAtas = 20; //batas angka yang ingin dicek

console.log("Mencari angka GENAP dari 1 sampai " + batasAtas); // menampilkan informasi batas angka yang ingin dicek

for  (let i = 1; i< batasAtas; i ++) { // jika sisa bagi 2 adalah 0 maka angka tersebut adalah genap
    if (i % 2 === 0) {
        console.log("angka " + i + " adalah GENAP");
}

