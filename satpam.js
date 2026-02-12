//file: satpam.js
let umurPenggunjung = 15; //ubah angka ini nanti
let bawaKTP = false; //ubah nilai ini nanti (true/false) akan berpengaruh terhadap output

console.log("=== Pengecekan Masuk Bioskop ===");

//logika: harus berumur minimal 17 tahun dan membawa KTP
if (umurPenggunjung >= 17 && bawaKTP === true) /* tanda >= berarti lebih dari atau sama dengan dan && berarti dan. sedangkan tanda === berfungsi untuk membandingkan nilai dan tipe data dan true berarti benar */ { console.log("Silahkan Masuk, selamat dmenonton!"); } else if (umurPengunjung >= 17 && bawaKTP === false) 