import {legacy_createStore} from "redux";
import reducers, { moviesListReducers } from "../reducers";

export const store=legacy_createStore(reducers );



//it will store the reducers we will create reducers