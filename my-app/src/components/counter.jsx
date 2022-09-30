import React, {useState} from "react"

const Counter = () => { 
    const [count, setCount] = useState(0);
    const [tags, setTags] = useState(['tag1', 'tag2',' tag3'])
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
        return setTags(['tag4', 'tag5'])
    }


    const renderTags = () => {
        if(tags.length == 0) {
            return 'No tags';
        }
        return tags.map((tag) => {
            return <li
                key={tag}
                className="btn btn-primary btn-sm"
                onClick={handleChange}>
                {tag}</li>
        })
    }
    return (
            <>
                <ul>
                    {}
                </ul>
                <button className="btn btn-primary btn-sm m-2" onClick={handleDicrement}>-</button>
                <span className="badge m-2 bg-primary">{formatCount()}</span>
                <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>+</button>
            </> 
        )

} 

export default Counter;