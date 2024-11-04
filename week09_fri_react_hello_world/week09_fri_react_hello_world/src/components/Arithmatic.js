import React from 'react'

var calculate = (a, b, operator) => {
        switch(operator) {
            case '+':
                return a + b;
            case '-':
                return `${a} - ${b} = ${a - b}`;
            case '*':
                return a * b;
            case '/':
                return a / b;
            default:
                return 'Invalid Operator';
        }
    }
    
export default function Arithmatic({a, b, operator}) {
    
    return (
    <div>
        <h1>Arithmatic</h1>
        { operator === '+' && <h2>{a} + {b} = {a + b}</h2> }
        { calculate(a, b, operator) }
    </div>
  )
}

export { calculate }