// membuat daftar produk
const produkToko = [
  { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
  { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
  { id: 3, nama: "Keyboard", harga: 350000, stok: 7 },
];

// menampilkan daftar produk
console.log("Daftar Produk:");
produkToko.forEach((produk) => {
  console.log(
    `ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`,
  );
});

// menambahkan produk baru
const produkBaru = {
  id: 4,
  nama: "Monitor",
  harga: 1500000,
  stok: 3,
};

// menambahkan produk baru ke dalam daftar
produkToko.push(produkBaru);
console.log("\nProduk baru ditambahkan:");
console.log(produkBaru);

// menampilkan daftar produk setelah penambahan
console.log("\nDaftar Produk Setelah Penambahan:");
produkToko.forEach((produk) => {
  console.log(
    `ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`,
  );
});

// mengupdate stok produk
const produkIdToUpdate = 2;
const produkToUpdate = produkToko.find(
  (produk) => produk.id === produkIdToUpdate,
);
if (produkToUpdate) {
  produkToUpdate.stok += 5; // menambahkan stok
  console.log(
    `\nStok produk dengan ID ${produkIdToUpdate} telah diperbarui. Stok baru: ${produkToUpdate.stok}`,
  );
}

// menampilkan daftar produk setelah pembaruan
console.log("\nDaftar Produk Setelah Pembaruan:");
produkToko.forEach((produk) => {
  console.log(
    `ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`,
  );
});

// menghapus produk dari daftar
const produkIdToDelete = 3;
const indexToDelete = produkToko.findIndex(
  (produk) => produk.id === produkIdToDelete,
);
if (indexToDelete !== -1) {
  const deletedProduct = produkToko.splice(indexToDelete, 1);
  console.log(
    `\nProduk dengan ID ${produkIdToDelete} telah dihapus:`,
    deletedProduct[0],
  );
}

// menampilkan daftar produk setelah penghapusan
console.log("\nDaftar Produk Setelah Penghapusan:");
produkToko.forEach((produk) => {
  console.log(
    `ID: ${produk.id}, Nama: ${produk.nama}, Harga: ${produk.harga}, Stok: ${produk.stok}`,
  );
});
