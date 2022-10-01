import React, {useState} from "react"

const Counter = () => { 
    const [count, setCount] = useState(0);

    const formatCount = () => {
        return count === 0 ? 'empty' : count;
    }

    const handleIncrement = () => {
        setCount((prevState) => prevState + 1)
    }
    
    const handleDicrement = () => {
        setCount((prevState) => prevState - 1)
    }

    const handleChange = () => {
        return setCount(['tag4', 'tag5'])
    }


    return (
            <div>
                <ul>
                    {}
                </ul>
                <button className="btn btn-primary btn-sm m-2" onClick={handleDicrement}>-</button>
                <span className="badge m-2 bg-primary">{formatCount()}</span>
                <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            </div> 
        )

} 

export default Counter;