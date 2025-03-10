import React, { useContext } from 'react'
import { Item } from './Item'
import { TextContext } from '../TextContext';

const TimeList = (props) => {
    const textContext = useContext(TextContext)

    function addRandomTime() {
        const randomTime = generateRandomTime();
        props.setTimeArr(prevArr => [...prevArr, randomTime]); // Update timeArr state
    }

    function removeTime(timeToRemove) {
        const updatedTimeArr = props.timeArr.filter(time => time !== timeToRemove);
        props.setTimeArr(updatedTimeArr);
    }

    function secondMethodRemoveTime(event) {
        textContext.funcs.setTimeArr(textContext.funcs.timeArr.filter(x => x != event.target.innerHTML))

    }

    function generateRandomTime() {
        const hours = String(Math.floor(Math.random() * 24)).padStart(2, '0');
        const minutes = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        const seconds = String(Math.floor(Math.random() * 60)).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    return (
        <>
            <div>TimeList</div>
            <button onClick={addRandomTime}>Add Random Time To Show and the color is {textContext.color}</button>
            <Item>
                {props.timeArr.map((time, index) => (
                    <div key={index} onClick={() => removeTime(time)}>
                        {time}
                    </div>
                ))}
            </Item>

        </>
    )
}

export default TimeList