import { Navigate, useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import { vaiHome } from "../routes/Coordinator";

export const useUnprotectedPage =()=>{
    const navigate = useNavigate()

    useLayoutEffect(()=>{
        const token = localStorage.getItem("token")
        if(token){
            vaiHome(navigate)
        }
    },[navigate])
}