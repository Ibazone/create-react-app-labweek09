import { useState } from 'react';

function Counter() {
    const [a, setA] = useState(0);

    const addClick = () => {
        setA(a + 1);
        console.log(`A: ${a}`);
    };

    return (
        <div>
            <h1>Counter</h1>
            <p>A: {a}</p>
            <button onClick={addClick}>Add</button>
        </div>
    );
}

export default Counter;
