import React, { useState } from "react";
import { useCounter } from "./hooks";



export default function ButtonValue(){
    const {
        clickCount,
        incrementCounter,
        decrementCounter
    } = useCounter();
    console.log(clickCount);
        return <>
            <span>{clickCount}</span>
            <button onClick={()=>{
                incrementCounter();
            }}>+</button>
            <button onClick={()=>{
                decrementCounter();
            }}>-</button>
        </>
}
