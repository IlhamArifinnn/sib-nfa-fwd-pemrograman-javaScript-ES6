// Class Pelanggan
class Pelanggan {
  constructor(nama, nomorTelepon, kendaraanDisewa) {
    this.nama = nama;
    this.nomorTelepon = nomorTelepon;
    this.kendaraanDisewa = kendaraanDisewa;
    this.transaksi = [];
  }

  // Metode untuk mencatat transaksi penyewaan
  catatTransaksi(tanggalSewa, tanggalKembali) {
    this.transaksi.push({
      tanggalSewa,
      tanggalKembali,
      kendaraan: this.kendaraanDisewa,
    });
  }

  // Metode untuk menampilkan informasi pelanggan
  tampilkanInfo() {
    console.log(`Nama: ${this.nama}`);
    console.log(`Nomor Telepon: ${this.nomorTelepon}`);
    console.log(`Kendaraan: ${this.kendaraanDisewa}`);
    console.log(`Jumlah Transaksi: ${this.transaksi.length}`);
  }
}

// Class untuk mengelola sistem penyewaan
class ManajemenTransportasi {
  constructor() {
    this.daftarPelanggan = [];
  }

  // Metode untuk menambahkan pelanggan
  tambahPelanggan(pelanggan) {
    this.daftarPelanggan.push(pelanggan);
  }

  // Metode untuk menampilkan daftar pelanggan
  tampilkanDaftarPelanggan() {
    console.log("\n==== DAFTAR PELANGGAN YANG MENYEWA KENDARAAN ====\n");
    this.daftarPelanggan.forEach((pelanggan, index) => {
      console.log(`${index + 1}. ${pelanggan.nama}`);
      console.log(`   Nomor Telepon: ${pelanggan.nomorTelepon}`);
      console.log(`   Kendaraan: ${pelanggan.kendaraanDisewa}\n`);
    });
  }
}

// Contoh penggunaan
const manajemen = new ManajemenTransportasi();

// Membuat pelanggan
const pelanggan1 = new Pelanggan(
  "Budi Santoso",
  "081234567890",
  "Toyota Avanza",
);
const pelanggan2 = new Pelanggan(
  "Siti Nurhaliza",
  "082345678901",
  "Honda CB150",
);
const pelanggan3 = new Pelanggan("Ahmad Wijaya", "083456789012", "Hino Bus");

// Mencatat transaksi
pelanggan1.catatTransaksi("2026-03-01", "2026-03-04");
pelanggan2.catatTransaksi("2026-03-05", "2026-03-10");
pelanggan3.catatTransaksi("2026-03-02", "2026-03-04");

// Menambahkan pelanggan ke sistem
manajemen.tambahPelanggan(pelanggan1);
manajemen.tambahPelanggan(pelanggan2);
manajemen.tambahPelanggan(pelanggan3);

// Menampilkan daftar pelanggan
manajemen.tampilkanDaftarPelanggan();

// Menampilkan informasi pelanggan tertentu
console.log("==== INFO DETAIL PELANGGAN 1 ====\n");
pelanggan1.tampilkanInfo();
