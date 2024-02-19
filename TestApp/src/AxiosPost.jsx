import React, { useState } from 'react'
import axios from 'axios'
import { MyContext } from './App';
const AxiosPost = () => {
    const [data, setdata] = useState({ fname: " ", lname: " " })
    const handleInput = (e) => {
        console.log({ ...data, [e.target.name]: e.target.value })
        setdata({ ...data, [e.target.name]: e.target.value });

    }
    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", data).then((res) => {
            console.log(res)
        })

    }
    const dataDelete = (e) => {
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/11").then((res) => {
            console.log(res)
        })

    }
    const Update = (e) => {
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", data).then((res) => {
            console.log(res)
        })

    }
    // const contextValue = useContext(MyContext);
    return (
        <>
            <MyContext.Consumer>
                {e => (
                    <div>{e}</div> 
                )}
            </MyContext.Consumer>

            {/* <h1>
            Hello Zeeshan
         </h1> */}
            {/* <form action="">
                <label htmlFor="fname">First Name</label>
                <input type="text" onChange={handleInput} name="fname" value={data.fname} id="fname" />
                <label htmlFor="lname">Last Name</label>
                <input type="text" onChange={handleInput} name="lname" value={data.lname} id="lname" />
                <button onClick={formSubmit}>Submit</button>
                <button onClick={Update}>Update</button>
                <button onClick={dataDelete}>Delate</button>
            </form> */}
        </>
    )
}

export default AxiosPost