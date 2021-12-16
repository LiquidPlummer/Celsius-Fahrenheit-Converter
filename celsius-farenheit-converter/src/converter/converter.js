import Celsius from "./celsius";
import Farenheit from "./farenheit";
import { useState, useEffect } from "react";
import store from "../store/store";


export default function Converter() {
    const [temp, setTemp] = useState({farenheit: 0.0, celsius: 0.0});

    const unsubscribe = store.subscribe(() => {
        setTemp({
            celsius: store.getState().cTemp,
            farenheit: store.getState().fTemp
        });
    })

    return (
        <>
            <Celsius temp={temp} />
            <hr />
            <Farenheit temp={temp}/>
        </>
    )
}