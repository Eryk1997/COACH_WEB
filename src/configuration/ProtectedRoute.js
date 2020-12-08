  
import React from 'react'
import {Route,Redirect} from 'react-router-dom'
import Cookies from "js-cookie";

import Login from '../views/login/Login'

export const ProtectedRoute = ({component: Component, ...rest}) => {
    return(    
        <Route {...rest} render={
            (props) =>{
                if(localStorage.getItem('trainer') == true){
                    return <Component {...props}/>
                }
                else{
                    return <Login />    
                }
            }
        }/>
    )
    }