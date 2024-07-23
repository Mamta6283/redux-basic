import axios from 'axios';
import React, { useState } from 'react';

function AxiosPostRquest(props) {
    const[data,setData]=useState({
        title:"",
        body:""
    })

    const handleInput=(e)=>{
                setData({...data,[e.target]:e.target.value})
    }

    const submit=(e)=>{
               e.preventDefault()
               axios.post(`https://jsonplaceholder.typicode.com/posts`,{data})
               .then((respone)=>{
                console.log(respone)
                setData(respone)
               })
    }
    return (
        <div>
            <h2>AxiosPostRquest</h2>
            <form onSubmit={submit}>
                <input type='text' name='title' placeholder='enter-title' onChange={handleInput}></input><br></br>
                <input type='text' name='body' placeholder='enter-body' onChange={handleInput}></input><br></br>
                <button onClick={submit}>Submit</button>

                {/* <h2>{data}</h2> */}
            </form>
        </div>
    );
}

export default AxiosPostRquest;

//https://jsonplaceholder.typicode.com/posts