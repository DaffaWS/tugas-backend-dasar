//file: satpam.js
let umurPenggunjung = 20; //ubah angka ini nanti
let bawaKTP = true; //ubah nilai ini nanti (true/false) akan berpengaruh terhadap output

console.log("=== Pengecekan Masuk Bioskop ===");

//logika: harus berumur minimal 17 tahun dan membawa KTP
if (umurPenggunjung >= 17 && bawaKTP === true) /* tanda >= berarti lebih dari atau sama dengan dan && berarti dan. sedangkan tanda === berfungsi untuk membandingkan nilai dan tipe data dan true berarti benar */ { console.log("Silahkan Masuk, selamat menonton!"); } else if (umurPenggunjung >= 17 && bawaKTP === false) { console.log("Maaf, umur anda sudah cukup tapi Anda lupa membawa ktp "); } else { console.log("Dilarang masuk, belum cukup umur"); }
// --- END OF FILE ---