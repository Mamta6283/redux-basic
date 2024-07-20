import { combineReducers } from "redux";

const counterReducer =(state =0,action)=>{
           switch (action.type){
            case "INCREMENT":return state+1;
            case "DECREMENT":return state-1;
            case "RESET": return 0;
            case "INCREMENTBYVALUE":return state+ action.payload;
            default :return state
           }
}

const greetReducer =()=>{
    return 'hello everyone'
}

 const moviesListReducers =()=>{
    return [
        {id : 1, title : "iron man", lead: "robert downey jr." ,year:2008},
        {id : 2, title : "The Incredible Hulk", lead: "Edword Norton" ,year:2008},
        {id : 3, title : "Thor", lead: "Chris Hemsworth" ,year:2011},
        {id : 4, title : "Captain america", lead: "Chris Evans" ,year:2011},
        {id : 5, title : "Avengers", lead: "robert downey jr." ,year:2012}
    ]
}

const movieDetailsReducer = (state =null ,aciton) =>{
    switch (aciton.type){
        case "SHOWDETAILS" : return aciton.payload
        default :return state
    }
}


const reducers =combineReducers({ //this is used to combine all the reducers
    count:counterReducer,
    greetings:greetReducer,
    movies : moviesListReducers,
    details : movieDetailsReducer
})

export default reducers;



//store set up krna hai 
//aplication provider krna ahi
//reducer banega combine krna hai and action banega then dispatch useDispatch is used useSelector


