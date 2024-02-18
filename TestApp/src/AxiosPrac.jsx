import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios';
const AxiosPrac = () => {
    const [nameList, setnameList] = useState([]);
    const printNames = () => {
        axios.request("https://jsonplaceholder.typicode.com/users").then((res) => {
            setnameList(res.data);
            console.log(res.data)
        })
    }

    return (
        <>
            <div>AxiosPrac</div>
            <button onClick={printNames}>Print</button>
            <hr />
            <ul>
                {
                    nameList.map((e)=>(
                        <li>{e.id}){e.name}</li>
                    ))
                }
            </ul>
            
        </>

    )
}

export default AxiosPrac;
