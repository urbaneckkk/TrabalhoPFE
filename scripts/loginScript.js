// codigo para formulario

document.getElementById("login").addEventListener("click", (event) => {
    event.stopPropagation();

    let loginform = document.querySelector('.loginform');

    if (!loginform) {
        loginform = document.createElement('div');
        loginform.classList.add('loginform');
        loginform.innerHTML = `
            <button class="close-btn">&times;</button>
            <label>Login: <br/>
            <input placeholder="Digite seu usuário" type="text"><br/>
            <label>Senha: <br/>
            <input placeholder="Digite sua senha" type="password"> <br/>
            <button id="entrar">Entrar</button>
        `;

        document.body.appendChild(loginform);

        // Adiciona evento ao botão de fechar
        document.querySelector('.close-btn').addEventListener('click', () => {
            loginform.remove();
        });
    }
});

// Fecha o login ao clicar fora
document.body.addEventListener("click", (event) => {
    const loginform = document.querySelector('.loginform');
    if (loginform && !loginform.contains(event.target) && event.target.id !== "login") {
        loginform.remove();
    }
});
