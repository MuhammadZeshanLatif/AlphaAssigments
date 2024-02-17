import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const ToDo = () => {
    const [list, setList] = useState([{ val: "Test", id: uuidv4(), done: false}])
    const [item, setItem] = useState("")
    const handleInput = (event) => {
        console.log()
        setItem(event.target.value)
    }
    const addTask = () => {
        setList((e) => {
            return [...list, { val: item, id: uuidv4(), done: false}]
        })

    }
    const editTask = (id) => {
        console.log("editTask")
    }
    const deleteTask = (id) => {
        let dlt = list.filter((e) => e.id != id);
        setList(dlt);
    }
    const doneTask = (id) => {
        setList((es) => 
           es.map((e)=>{
            if (e.id == id) {
                return {
                      ...e,
                      done:true  
                }
            }
            else{
                return e;
            }
           })

        )
        console.log()

    }
    const deleteAll = () => {
        console.log("deleteAll")
    }
    const doneAll = () => {
        console.log("doneAll")
    }
    return (
        <>
            <h1>ToDo List</h1>
            <input type="text" onChange={handleInput} />
            <br /><br />
            <button onClick={addTask}>Add</button>
            <hr />
            <ul>
                {
                    list.map((todo) => (
                        <li key={todo.id} style={todo.done==true?{textDecoration:"line-through"}:{}}>
                            {todo.val}
                            &nbsp;&nbsp;
                            <button onClick={() => editTask(todo.id)}>Edit</button>
                            &nbsp;&nbsp;
                            <button onClick={() => deleteTask(todo.id)}>Delete</button>
                            &nbsp;&nbsp;
                            <button onClick={() => doneTask(todo.id)}>Done</button>
                            <br /><br />
                        </li>

                    ))
                }
            </ul>
            <br />
            <button onClick={deleteAll}>Delete All</button>
            &nbsp;&nbsp;
            <button onClick={doneAll}>Done All</button>

        </>
    )
}
export default ToDo;