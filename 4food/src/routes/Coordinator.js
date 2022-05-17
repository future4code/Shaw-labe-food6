//PAGINA LOGIN - index
//Botão Entrar = vaiHome
//Botao Criar Cadastro
export const vaiSignup = (navigate)=>{
    navigate("/Cadastro")
}

//PAGINA CADASTRO
{/* <Header + botão voltar> */}
export const voltar =(navigate)=>{
    navigate(-1)
}
//Botao CRIAR
export const cadastroEndereço = (navigate)=>{
    navigate("/Cadastro-Endereço")
}

//PAGINA CADASTRO ENDEREÇO
{/* <Header + botão voltar> */}
//Botao vaiHome
export const vaiHome= (navigate) => {
    navigate("/Home")
}

//HOME
//CARD BUSCA
{/* <Header + botão voltar> */}

//HOME <Card Restaurante/>
//Botao NomeRest - on click ={vaiParaPgRest} - vai receber pathParams depois pra pegar o nome do rest
export const vaiPgRest=(navigate)=>{
    navigate("/Home/Restaurante")
}

//HOME <Footer/>
// button> vaiParaHome
// button> vaiParaCarrinho
export const vaiCarrinho=(navigate)=>{
    navigate("/Carrinho")
}
// button> vaiParaPerfil
export const vaiPerfil=(navigate)=>{
    navigate("/Perfil")
}

//PAGINA RESTAURANTE
{/* <Header + botão voltar> */}

//PAGINA PERFIL
// Card com dados cadastro
//botão EDIT> vaiParaEditarSignup
export const signupEdit=(navigate)=>{
    navigate("/Edita-Cadastro")
}

// Card com dados endereço
//botão EDIT> vaiPararEditarEndereço
export const addressEdit=(navigate)=>{
    navigate("/Edita-Endereco")
}

//PAGINAS EDIT USER e EDIT ADDRESS
{/* <Header + botão voltar> */}
//botao SALVAR = vaiHome

//CARRINHO
//botao Confirmar - alert Pedido em andamento