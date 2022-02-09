import React from 'react';
import ReactDOM from 'react-dom';

const element = <h1>Hello World</h1>

ReactDOM.render(element, document.getElementById('root'));

function sayHello() {
    for(let i = 0; i < 5; i++){
        console.log(i)
    }
}

sayHello()