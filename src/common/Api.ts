import React from "react";
import { Method } from "axios";

export interface Apiconfig{
    apiPath?: string;
    action?: Method | any;
    data?: any;
    params?: any;
    headers?: any ;
    method?:string;
    
}