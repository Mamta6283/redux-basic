import axios from 'axios';
import React, { useEffect, useState } from 'react';

function AxiosPutRquest(props) {
    const[data,setData]=useState({
        title:"",
        body:""
    })

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then((respone)=>{
            console.log(respone.data)
        })

    },[])

    const handleInput=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submit=(e)=>{
             e.preventDefault();
                   axios.put('https://jsonplaceholder.typicode.com/posts/1',{data})
                   .then((respone)=>{
                 console.log(respone.data)
                   })
    }
    return (
        <div>
            <h2>AxiosPutRquest</h2>
            <form onSubmit={submit}>
                <input type='text' name='title' placeholder='enter-title' onChange={handleInput}></input><br></br>
                <input type='text' name='body' placeholder='enter description' onChange={handleInput}></input><br></br>
                <button onCanPlay={submit} >Submit</button>
            </form>
        </div>
    );
}

export default AxiosPutRquest;