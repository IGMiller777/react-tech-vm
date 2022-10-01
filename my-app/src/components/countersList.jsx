import React from "react";
import Counter from "./counter";


const CounterList = () => { 

    const counters = [
        {id:0,value: 0},
        {id:1, value: 1},
        {id:2, value: 2}]
    return (
        <>
        {counters.map((count) => (
            <Counter key={count.id}/>
            )
            )
             }

        </>
        )
}

export default CounterList;