import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
const ToDo = () => {
    const [list, setList] = useState([{"tast":"First",id:uuidv4()}])
    const [item,setItem]=useState("");
    const handleInput=(event)=>{
        setItem(event.target.value);
    }
    const addTodo=()=>{
        setList((e)=>{
            return [...e,{"tast":item}]
        })
       
    }
    return (
        <>
            <h1>ToDoList</h1>

            <input onChange={handleInput} type="text" />
            <br />
            <br />
            <button onClick={addTodo}>Add</button>
            <hr />
            <ul>
                {
                    list.map((lst)=>(
                        <li>
                            {lst.tast}
                        </li>
                    ))
                }
            </ul>
        </>


    )
}
export default ToDo;