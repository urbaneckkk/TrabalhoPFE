// Função para simular o banco de dados (usando localStorage)

const bancoDeDados = {
    cadastrar: (usuario, senha) => {
        let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioExistente = usuarios.find(u => u.usuario === usuario);

        if (usuarioExistente) {
            mostrarMensagem("Usuário já cadastrado!", "erro");
            return false;
        }

        usuarios.push({ usuario, senha });
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
        mostrarMensagem("Cadastro realizado com sucesso!", "sucesso");
        return true;
    },

    logar: (usuario, senha) => {
        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
        const usuarioEncontrado = usuarios.find(u => u.usuario === usuario && u.senha === senha);

        if (usuarioEncontrado) {
            mostrarMensagem("Login bem-sucedido!", "sucesso");
            return usuarioEncontrado;
        } else {
            mostrarMensagem("Usuário ou senha incorretos!", "erro");
            return null;
        }
    },

    logoff: () => {
        localStorage.removeItem('usuario_logado');
        localStorage.removeItem('imagem_perfil');
    }
};