import React, {useState} from "react"

const Counter = (props) => { 
    const [value, setValue] = useState(props.value);

    const formatCount = () => {
        return value === 0 ? 'empty' : value;
    }

    const handleIncrement = () => {
        setValue((prevState) => prevState + 1)
    }
    
    const handleDicrement = () => {
        setValue((prevState) => prevState - 1)
    }

    const handleChange = () => {
        return setValue(['tag4', 'tag5'])
    }


    return (
            <div>
                {props.children}
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