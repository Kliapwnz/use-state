import React, {useState} from 'react';
import './App.css';

function App() {
    // let a = 1
    let [a, setA] = useState(1)

    const onClickHandler1 = () => {
        setA(a=0)

        console.log(a)
    }

    const onClickHandler = () => {
        setA(++a)

        console.log(a)
    }
    return (
        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHandler1}>0</button>
        </div>
    );
}

export default App;
