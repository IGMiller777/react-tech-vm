import React, {useState} from "react";
import Counter from "./counter";


const CounterList = () => { 
    const initialState = [
        {id:0,value: 0, name: 'Unless thing'},
        {id:1, value: 1, name: 'Unless thing'},
        {id:2, value: 22, name: 'Unless thing'},
        {id:3, value: 24, name: 'Unless thing'},
        {id:4, value: 2, name: 'Unless thing'},
    ]

    const [counters, setCounters] = useState(initialState);

    const handleDelete = (id) => { 
        const newCounters = counters.filter((counter) => counter.id !== id);
        setCounters(newCounters);
    }

    const handelReset = () => { 
        setCounters(initialState);
    }

    return (
        <>
           {counters.map((count) => (
            <Counter 
            counter = {count}
            {...count}
            onDelete={handleDelete} />
           ))} 
           <button className="btn btn-primary btn-sm m-2" onClick={handelReset}>Reset</button>
        </>
        )
}


export default CounterList;