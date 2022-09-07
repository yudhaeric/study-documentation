
import React, { useState, useEffect } from 'react';

function Number () {
    // Kiri -> Getter
    // Kanan -> Setter
    // useState(1) merupakan nilai default myNumber
    const [myNumber, setMyNumber] = useState(1)
    
    return (
      <div>
        <h1>Angka kamu saat ini adalah {myNumber}</h1>
        <button onClick={() => setMyNumber((prev) => prev + 1)}>Tambah angka</button>
      </div>
    );
}

export default Number;

