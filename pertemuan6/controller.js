import users from "./data.js";

const index = () => {
  // tampilkan data users menggunakan map
  users.map((user) => {
    console.log(
      `ID: ${user.id}, Nama: ${user.nama}, Umur: ${user.umur}, Alamat: ${user.alamat}`,
    );
  });
  console.log("\n");
};

const store = (id, nama, umur, alamat) => {
  // tambahkan data user baru
  users.push({ id, nama, umur, alamat });
};

const destroy = (id) => {
  // hapus data user berdasarkan id
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
  }
};

export { index, store, destroy };
