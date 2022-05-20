import { Routes, Route, BrowserRouter} from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";
import SignUpAddress from "../pages/signup/SignUpAddress";
import RestaurantPage from "../pages/restaurantPage/RestaurantPage";
import Carrinho from "../pages/carrinh/Carrinho";
import Perfil from "../pages/perfil/Perfil";
import EditaCadastro from "../pages/perfil/EditaCadastro";
import EditaEndereco from "../pages/perfil/EditaEndereco";




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