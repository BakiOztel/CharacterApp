import React,{ useEffect, useState } from "react";
import Form from "./form";
import Posts from "./post";
import Navbar from "./navbar";
import { useDispatch } from "react-redux";
import {getPosts} from "../actions/post";
import "../Component-Styles/bootstrap.css";
import "../Component-Styles/App.css"
const App = ()=>{

    const dispatch = useDispatch();
    const [CurrentId,SetCurrentId]=useState(null);
    useEffect(()=>{
        dispatch(getPosts());
    },[dispatch]);  
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <div className="row gx-5">
                    <div className="col-lg-4 col-md-6 col-sm-8 ">
                        <Form CurrentId={CurrentId} SetCurrentId={SetCurrentId} />
                    </div>
                    <Posts CurrentId={CurrentId} SetCurrentId={SetCurrentId} />
                </div>
            </div>

        </div>
    );
 }
export default App;