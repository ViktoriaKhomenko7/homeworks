import React from 'react';
import './App.css';
// import {Header} from "./site/Header";
// import {Body} from "./site/Body";
// import {Footer} from "./site/Footer";
import {NewComponent} from "./site/NewComponent";

function App() {

    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]
    return (
        <NewComponent topCars={topCars}/>
    );
}

export default App;
