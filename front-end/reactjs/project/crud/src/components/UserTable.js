import ButtonModal from "./ButtonModal";
import React, { Component } from "react";
import Table from "react-bootstrap/Table";

const makanan = [
  {
    nama: "burger",
    harga: 15000,
  },
  {
    nama: "kentang",
    harga: 8000,
  },
  {
    nama: "ayam paha",
    harga: 20000,
  },
];

export default class UserTable extends Component {
  render() {
    return (
      <div>
        <ButtonModal />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nama Makanan</th>
              <th>Harga</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {makanan.map((makanan, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{makanan.nama}</td>
                <td>{makanan.harga}</td>
                <td>Edit Hapus</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
