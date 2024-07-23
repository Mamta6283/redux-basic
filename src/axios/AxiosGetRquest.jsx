import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AxiosGetRquest(props) {
    // let url='https://jsonplaceholder.typicode.com/users';
    const[mydata,setMydata] =useState([])
  
    useEffect(()=>{
        let url='https://jsonplaceholder.typicode.com/users';
        axios.get(url).then((response)=>{
            // console.log(response)
            setMydata(response.data)
        })
    },[])
    return (
        <div>
            <h2>AxiosGetRquest</h2>
            {
                 mydata.map((item ,i)=>{
                    return(
                        <>
                        <h2 key={i}>{item.name}</h2>
                        {/* <h4>{mydata}</h4> */}
                        </>
                
                    )
}) 
            } 
        </div>
    );
}

export default AxiosGetRquest;