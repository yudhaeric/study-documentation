import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

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
  {
    nama: "coca-cola",
    harga: 4000,
  },
];

const total_bayar = makanan.reduce((total_harga, makanan) => {
  return total_harga+makanan.harga;
}, 0);

export default class UserForm extends Component {
  render() {
    return (
      <div>
        <h3>Semua Menu</h3>
        <ul>
          {makanan.map((makanan, index) => (
            <li>
              {index + 1}. {makanan.nama} - harganya: {makanan.harga}
            </li>
          ))}
        </ul>

        <h3>Menu Kurang Dari 15000</h3>
        <ul>
          {makanan
            .filter((makanan) => makanan.harga <= 15000)
            .map((makanan, index) => (
              <li>
                {index + 1}. {makanan.nama} - harganya: {makanan.harga}
              </li>
            ))}
        </ul>
        <h3>Total Bayar: {total_bayar}</h3>
      </div>
    );
  }
}
