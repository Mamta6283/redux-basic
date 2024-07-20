import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementAction, incrementAction, incrementByValueAction, resetAction } from '../actions';

function Counter(props) {
    //fuction provide krenge and state provide krna hai
    const state =useSelector((state)=>(state)) //store se data get krta hai  reducers se lete jo banya humnne reduers

    //const [count,greetings]=useSelector((state)=>state.geetings) //you can write like this by distrucring 
    const dispatch =useDispatch();  //this is for action to get some action using this dispatch 
    return (
        <div>
            <h2>{state.greetings}</h2>
            <h2>{state.count}</h2>
            <button onClick={()=>{dispatch(incrementAction())}}>increment</button>
            <button onClick={()=>{dispatch(decrementAction())}} >decrement</button>
            <button onClick={()=>{dispatch(resetAction())}}>Reset</button>
            <button onClick={()=>{dispatch(incrementByValueAction(10))}}>Increment by Value</button>
        </div>
    );
}

export default Counter;