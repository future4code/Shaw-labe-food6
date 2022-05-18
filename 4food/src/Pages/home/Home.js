import React from "react";
import { useNavigate } from "react-router-dom";

const Home=()=>{
    const navigate = useNavigate()

    return(
        <div>
            <div>Header</div>
            <div>lista com Cards dos restaurantes</div>
            <div>Footer</div>
        </div>
    )
}

export default Home;