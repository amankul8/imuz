import React from "react";
import {Routes, Route} from "react-router-dom";
import {routes} from "./../routes/routes.js";

function AppRouter(){
    return(

        <Routes>
            {routes.map((item, index)=>{
                return(
                    <Route exact={item.exact} path={item.path} element={item.component} key={index}/>
                )
            })}
        </Routes>

    )
}

export default AppRouter;