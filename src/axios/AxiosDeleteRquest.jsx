import axios from 'axios';
import React, { useEffect } from 'react';

function AxiosDeleteRquest(props) {
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`)
        .then((response)=>{
            console.log(response)
        })
    },[])
    const  deleteRecord=()=>{
        axios.delete("https://jsonplaceholder.typicode.com/posts/1")
        .then((response)=>{
            alert("post has been deleted successfully")
        })
    }
    return (
        <div>
            <h2>
                AxiosDeleteRquest
            </h2>
            <button onClick={deleteRecord}>delete</button>
        </div>
    );  
}    

export default AxiosDeleteRquest;