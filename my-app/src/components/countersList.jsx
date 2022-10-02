import React from "react";
import Counter from "./counter";


const CounterList = () => { 

    const counters = [
        {id:0,value: 0, name: 'Unless thing'},
        {id:1, value: 1, name: 'Unless thing'},
        {id:2, value: 22, name: 'Unless thing'},
        {id:3, value: 24, name: 'Unless thing'},
        {id:4, value: 2, name: 'Unless thing'},
    ];


    return (
        <>
           {counters.map((count) => (
            <Counter key={count.id} value={count.value}>
                <span>{count.name}</span>
            </Counter>
           ))} 
        </>
        )
}


export default CounterList;