// import axios from "axios";
// import React from "react";


// const Helper = (url:any,type:any) => {
//     return console.log(url,type)
// }

// export default Helper


import React from "react";
import axios from "axios";
import { config } from "process";
import { Apiconfig } from "../common/Api";


export const apiCall = async (apiConfig:Apiconfig) => {
    const response = await axios({ 
        method:apiConfig.method,
        url:apiConfig.apiPath,
        headers:apiConfig.headers
        }).then((res)=>{
            return res;
        }).catch((error)=>{
            return error;
        }
    )    
    return response;

}   