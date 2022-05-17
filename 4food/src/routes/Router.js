import { Routes, Route, BrowserRouter} from "react-router-dom";

import Login from "../pages/login/Login";
import Cadastro from "../pages/cadastro/Cadastro";
import Feed from "../pages/feed/Feed";
import Post from "../pages/post/Post";

const Router = ()=>{
    return(

        <BrowserRouter>            
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/Cadastro" element={<SignUp/>}/>
                <Route path="/Cadastro-Endereço" element={<SignUpAddress/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Home/Restaurante" element={<RestaurantPage/>}/>
                <Route path="/Carrinho" element={<Carrinho/>}/>
                <Route path="/Perfil" element={<Perfil/>}/>
                <Route path="/Edita-Cadastro" element={<EditaCadastro/>}/>
                <Route path="/Edita-Endereco" element={<EditaEndereco/>}/>
                
            </Routes>
        </BrowserRouter>        
    )
}     
            


export default Router;