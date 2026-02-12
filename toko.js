//File: toko.js
console.log("=== APLIKASI KASIR SEDERHANA ===");

// 1.Data Barang
let namaBarang = "Apel Fuji";
let hargaSatuan = 5000;
let jumlahBeli = 12;

// 2.Proses Hiung
let totalHarga = hargaSatuan * jumlahBeli;

// 3.Tampilan Struk
console.log("Barang: " + namaBarang);
console.log("Harga: Rp " + hargaSatuan);
console.log("Jumlah " + jumlahBeli + " buah")
console.log("______________________________");
console.log("TOTAL : Rp " + totalHarga);
console.log("Terima Kasih Telah Berbelanja!");
console.log("Jika ada pertanyaan, kritik & saran silahkan hubungi 081225519223");
// --- END OF FILE ---


//*==================================
//*Cara Konekkan ke repository github
//*==================================

// atur identitas pengguna menggunakan
//*git config --global user.name "nama kamu"
//*git config --global user.email "email kamu"

// buka terminal di vs code
// git init  
// git remote add origin "link repository github kamu"


// proses uploadnya
// 1. git add .
// 2. git commit -m "pesan yang ingin disampaikan"
// 3. git push origin mainu