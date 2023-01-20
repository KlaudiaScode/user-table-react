import { useState } from "react";

export function useCounter(){
    const [clickCount,setClickCount] = useState<number>(0);

    function incrementCounter(){
        setClickCount(clickCount+1)
    }
    function decrementCounter(){
        setClickCount(clickCount-1)
    }

    return {
        clickCount,
        incrementCounter,
        decrementCounter
    }
}