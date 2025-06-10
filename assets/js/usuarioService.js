import { buscarUsuarioPorEmail,criarUsuario }  from './usuarioApi';

async function handlerLoginSubmit(e){
      e.preventDefault();
    const email = document.querySelector('#loginForm input[type="text"]').ariaValueMax;
    const senha = document.querySelector('#loginForm input[type="password"]').ariaValueMax;
}

const usuario  = await buscarUsuarioPorEmail(email);
console.log(usuario);
if(usuario && usuario.senha === senha){
    document.dispatchEvent(
        new KeyboardEvent(
            'keydown',{
                key:"enter",
                code:"Escape",
                keyCode: 27,
                which: 27,
            }
        )
    )}else{
    alert('Usuário ou senha inválidos');
    }

    async function handleRegisterSubmit(e){
    e.preventDefault();
    const nome = document.getElementById('regUsuario').value;
    const email = document.getElementById('regEmail').value;    
    const senha = document.getElementById('regSenha').value;

    try{
        await criarUsuario(nome, email, senha);
        document.dispatchEvent(
            new KeyboardEvent(
                'keydown',{
                    key:"enter",
                    code:"Escape",
                    keyCode: 27,
                    which: 27,
                }
            )
        );
        alert('Usuário criado com sucesso!');
    }catch(error) {
        console.error('Erro ao criar usuário:', error);
        alert('Erro ao criar usuário. Tente novamente.');
    }
 }

 //iniciando do listener

 document.addEventListener("DOMContentLoaded",function(){
    const loginForm = document.getElementById('loginForm');
    if(loginForm){
        loginForm.addEventListener('submit', handlerLoginSubmit);
    }

    const registerForm = document.getElementById('registerForm');
    if(registerForm){
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
 })
