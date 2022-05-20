import { Routes, Route, BrowserRouter} from "react-router-dom";
import Carrinho from "../Pages/carrinh/Carrinho";
import Home from "../Pages/home/Home";
import Login from "../Pages/login/Login";
import EditaCadastro from "../Pages/perfil/EditaCadastro";
import EditaEndereco from "../Pages/perfil/EditaEndereco";
import Perfil from "../Pages/perfil/Perfil";
import RestaurantPage from "../Pages/restaurantPage/RestaurantPage";
import SignUp from "../Pages/signup/SignUp";
import SignUpAddress from "../Pages/signup/SignUpAddress";




const Router = ()=>{
    return(

        <BrowserRouter>            
            <Routes>
                <Route index element={<Login/>}/>
                <Route path="/Cadastro" element={<SignUp/>}/>
                <Route path="/Cadastro/Endereco" element={<SignUpAddress/>}/>
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