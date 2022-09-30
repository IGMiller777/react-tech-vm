import React, {useState} from "react"

const Counter = () => { 
    const [count, setCounter] = useState(0);

    const formatCount = () => { 
        return count === 0 ? 'empty' : count;
    }


    const handleIncrement = () => {
        setCounter(count + 1)
        console.log(count);
    }
    
    const handleDicrement = () => {
        setCounter(count - 1)
        console.log(count);
    }
 
    return (
            <> 
                <button className="btn btn-primary btn-sm m-2" onClick={handleDicrement}>-</button>
                <span className="badge m-2 bg-primary">{formatCount()}</span>
                <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            </> 
        )

} 

export default Counter;