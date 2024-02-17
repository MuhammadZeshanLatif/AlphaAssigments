import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'
const ToDo = () => {
    const [list,setList]=useState([{vals:"First",id:uuidv4()}]);
    const [item,setItem]=useState("");
    const handleInput=(event)=>{
            setItem(event.target.value);
    }
    const add=()=>{
        setList((e)=>{
            return [...list,{vals:item,id:uuidv4()}]
        })
    }
    const deleteVal=(id)=>{
         let copy =list.filter((e)=>e.id!=id);
         setList(copy)
    }
    const uppercase=()=>{
        let upr=list.map((e)=>{
           return {
            ...list, vals:e.vals.toUpperCase()
           }
        })
        setList(upr)
    }

    return (
        <>
          <h1>ToDo List By Objectr</h1>
          <br />
          <input type="text" onChange={handleInput} />
          <br />
          <button onClick={add}>Add</button>
          <hr />
          <ul>
            {
                list.map((e)=>(
                    <li key={e.id}>{e.vals}
                    &nbsp;
                    <button onClick={()=> deleteVal(e.id)}>Delete</button>
                    </li>
                    
                ))
            }
          </ul>
          <br />
          <button onClick={uppercase}>Uppercase</button>
        </>


    )
}
export default ToDo;