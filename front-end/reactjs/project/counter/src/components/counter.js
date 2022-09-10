import React, { useState } from "react";

function Counter() {
    // Kiri -> Getter
    // Kanan -> Setter
    // useState(1) merupakan nilai default myNumber
    let [myNumber, setMyNumber] = useState(0);

    if (myNumber < 0) {
        setMyNumber((prev) => prev + 1);
    }

    return(
        <div>
            <p>{myNumber}</p>
            <button onClick={() => setMyNumber((prev) => prev + 1)}>+</button>
            <button onClick={() => setMyNumber((prev) => prev - 1)}>-</button>
        </div>
    )
}

export default Counter;