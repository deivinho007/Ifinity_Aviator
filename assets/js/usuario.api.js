const BASE_URL = 'http://localhost:4000';

// Função para criar usuário
async function criarUsuario(nome, email, senha) {
    const response = await fetch(`${BASE_URL}/usuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            nome: nome,
            email: email,
            senha: senha,
        }),
    });

    return await response.json();
}

// Função para listar usuários
async function listarUsuarios() {
    const response = await fetch(`${BASE_URL}/usuarios`,);
    return await response.json();
}

//função para buscar usuario por email
async function buscarUsuarioPorEmail(email){
     console.log(`Buscando usuario com email:${email}`);
     const response  = await fetch(`${BASE_URL}/usuario/${encodeURIComponent(email)}`)
     return response.json();
}


//funçao para atualizar usuário
async function atualizarUsuario(email, nome, senha) {
    const response  = await fetch(`${BASE_URL}/usuario/${encodeURIComponent(email)}`,{
        method:'PUT',
        headers:{
            'Content-Type': 'application/json',},
        body: JSON.stringify({nome,senha})
    })

    return response.json();
}

//função para deçletar usuario
async function deletarUsuario(email) {
    const response = await fetch(`${BASE_URL}/usuario/${id}`, {
        method: 'DELETE',
    });

    return response.json();
}

export{criarUsuario, listarUsuarios, buscarUsuarioPorEmail, atualizarUsuario, deletarUsuario};