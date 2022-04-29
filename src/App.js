import React from 'react';
import './App.css';
import RandomQuote from './RandomQuote.js';

var list = require('./quotes.json')
// Pour voir le contenu des citations
// console.log(list)

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <RandomQuote/>
                <RandomQuote/>
                <RandomQuote/>
            </header>
        </div>
    );
}

export default App;
