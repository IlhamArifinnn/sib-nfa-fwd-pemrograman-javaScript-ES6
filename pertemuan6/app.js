import { index, store, destroy } from "./controller.js";

const main = () => {
  console.log("data user sebelum ditambahkan");
  index();
  // tambah 2 data
  store("11", "New User 1", 24, "111 New St");
  store("12", "New User 2", 25, "222 New St");
  // tampilkan data users
  console.log("data user setelah ditambahkan 2 data");
  index();
  // hapus 1 data berdasarkan id
  destroy("12");
  // tampilkan data users
  console.log("data user setelah dihapus id 12");
  index();
};

main();
