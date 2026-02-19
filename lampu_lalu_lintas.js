//==============================================================
// File: lampu_lalu_lintas.js
// Deskripsi: Program untuk menentukan warna lampu lalu lintas menggunakan  if-else atau switch . Jika warna "merah"
// print "Berhenti", jika "hijau" print "Jalan".
//==============================================================

let warnaLampu = "hijau"; //ubah warna bagian ini (contoh merah/hijau/kuning)

console.log("=== Lampu Lalu Lintas ===");

if (warnaLampu === "merah") {
    console.log("Berhenti");
} else if (warnaLampu === "hijau") {
    console.log("Jalan");
} else if (warnaLampu === "kuning") {
    console.log("Hati-hati, lampu akan segera berubah");
} else {
    console.log("Warna lampu tidak valid");
}      


