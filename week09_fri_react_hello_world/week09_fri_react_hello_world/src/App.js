import logo from './logo.svg';
import './App.css';
import React from 'react';
import Counter from './Counter';
import CounterClass from './CounterClass';

import Welcome from './components/Welcome';
import Greet from './components/Greet';
import Student from './components/Student';
import Arithmetic from './components/Arithmetic';

function App() {
    return (
        <div>
            <h1>Welcome to ReactJS</h1>
            <Counter />
            <CounterClass />
        </div>
    );
}

export default App;
