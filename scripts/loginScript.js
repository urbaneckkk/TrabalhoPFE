function atualizarTituloLogin(usuarioLogado) {
    const titulo = document.getElementById("login-titulo");
    if (titulo) {
        if (usuarioLogado) {
            titulo.textContent = `Bem-vindo, ${usuarioLogado.usuario}`;
        } else {
            titulo.textContent = "Entrar";
        }
    }
}


// Função para exibir a mensagem de sucesso ou erro
function mostrarMensagem(mensagem, tipo) {
    const mensagemElemento = document.getElementById('mensagem-erro-sucesso');
    mensagemElemento.textContent = mensagem;

    if (tipo === "erro") {
        mensagemElemento.style.color = "red";
    } else if (tipo === "sucesso") {
        mensagemElemento.style.color = "green";
    }
}

// Função para exibir o login ou o estado após o login
function exibirLoginOuLogout(usuarioLogado = null) {
    let loginform = document.querySelector('.loginform');

    if (!loginform) {
        loginform = document.createElement('div');
        loginform.classList.add('loginform');
        loginform.innerHTML = `
            <button class="close-btn">&times;</button>
            ${usuarioLogado ? `
                <h3>Bem-vindo, ${usuarioLogado.usuario}</h3>
                <div class="profile-container">
                    <img id="perfil-img" src="${usuarioLogado.imagemPerfil || 'imagens/person.jpg'}" alt="Imagem de Perfil" class="profile-img"><br/>
                    <button id="alterar-imagem">Alterar Imagem</button>
                </div>
                <button id="logout">Logout</button>
            ` : `
                <div id="mensagem-erro-sucesso" style="font-size: 14px; margin-bottom: 10px;"></div>
                <label>Login: <br/>
                <input id="login-usuario" placeholder="Digite seu usuário" type="text"><br/>
                <label>Senha: <br/>
                <input id="login-senha" placeholder="Digite sua senha" type="password"> <br/>
                <button id="entrar">Entrar</button>
                <button id="cadastrar">Cadastrar-se</button>
            `} 
        `;
        document.body.appendChild(loginform);

        // Adiciona evento ao botão de fechar
        document.querySelector('.close-btn').addEventListener('click', () => {
            loginform.remove();
        });

        // Se o usuário estiver logado, exibe o botão de logout e a imagem de perfil
        if (usuarioLogado) {
            document.getElementById('logout').addEventListener('click', () => {
                bancoDeDados.logoff();
                // Remove a imagem do localStorage ao deslogar
                localStorage.removeItem('imagem_perfil');
                loginform.remove();  // Remove a modal após o logout
                // Remove a imagem do login da div com id "login"
                const loginImgElement = document.querySelector('#login img');
                if (loginImgElement) {
                    loginImgElement.src = 'imagens/person.jpg';  // Imagem padrão
                }
                atualizarTituloLogin(null);
                exibirLoginOuLogout();  // Exibe novamente o formulário de login
            });

            // Evento para alterar a imagem de perfil
            document.getElementById('alterar-imagem').addEventListener('click', () => {
                const inputFile = document.createElement('input');
                inputFile.type = 'file';
                inputFile.accept = 'image/*';

                inputFile.addEventListener('change', (event) => {
                    const file = event.target.files[0];
                    if (file) {
                        const reader = new FileReader();

                        reader.onload = (e) => {
                            // Quando a imagem for carregada, redimensiona e exibe
                            const imgElement = document.getElementById('perfil-img');
                            imgElement.src = e.target.result;  // Exibe a imagem selecionada
                            imgElement.style.width = "60px";  // Redimensiona a imagem para 60px de largura
                            imgElement.style.height = "60px";  // Redimensiona a imagem para 60px de altura

                            // Armazena a imagem no localStorage para exibir nas próximas sessões
                            localStorage.setItem('imagem_perfil', e.target.result);

                            // Atualiza a imagem do login na div #login
                            const loginImgElement = document.querySelector('#login img');
                            if (loginImgElement) {
                                loginImgElement.src = e.target.result;  // Atualiza a imagem do login
                            }
                        };

                        reader.readAsDataURL(file);
                    }
                });

                inputFile.click();  // Abre a janela de seleção de arquivos
            });
        } else {
            // Evento para o botão de login
            document.getElementById('entrar').addEventListener('click', () => {
                const usuario = document.getElementById('login-usuario').value;
                const senha = document.getElementById('login-senha').value;
                const usuarioLogado = bancoDeDados.logar(usuario, senha);

                if (usuarioLogado) {
                    localStorage.setItem('usuario_logado', JSON.stringify(usuarioLogado));

                    // Salva a imagem do perfil ou imagem padrão no localStorage
                    const imagemPerfil = usuarioLogado.imagemPerfil || 'imagens/person.jpg';
                    localStorage.setItem('imagem_perfil', imagemPerfil);

                    loginform.remove();  // Remove a modal após o login bem-sucedido
                    atualizarTituloLogin(usuarioLogado);
                    exibirLoginOuLogout(usuarioLogado);  // Exibe a nova modal com o nome do usuário
                }
            });

            // Evento para o botão de cadastro
            document.getElementById('cadastrar').addEventListener('click', () => {
                const usuario = document.getElementById('login-usuario').value;
                const senha = document.getElementById('login-senha').value;
                bancoDeDados.cadastrar(usuario, senha);
            });
        }
    }
}

// Verifica se o usuário está logado e exibe a modal adequada
const log = document.getElementById("login").addEventListener("click", (event) => {
    event.stopPropagation();

    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));
    if (usuarioLogado) {
        // Se o usuário estiver logado, mostra a modal de boas-vindas 
        exibirLoginOuLogout(usuarioLogado);
    } else {
        // Se o usuário não estiver logado, mostra a modal de login
        exibirLoginOuLogout();
    }
});

// Fecha o login ao clicar fora
document.body.addEventListener("click", (event) => {
    const loginform = document.querySelector('.loginform');
    if (loginform && !loginform.contains(event.target) && event.target.id !== "login") {
        loginform.remove();
    }
});

// A função que será chamada ao carregar a página, garante que a imagem seja restaurada.
document.addEventListener('DOMContentLoaded', () => {
    const imagemPerfil = localStorage.getItem('imagem_perfil');
    const loginImgElement = document.querySelector('#login img');
    const usuarioLogado = JSON.parse(localStorage.getItem('usuario_logado'));

    if (imagemPerfil && loginImgElement) {
        loginImgElement.src = imagemPerfil;
    } else if (loginImgElement) {
        loginImgElement.src = 'imagens/person.jpg';
    }

    atualizarTituloLogin(usuarioLogado);
});

