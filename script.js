let todasNoticias = [];
let noticiasFiltradas = [];
let index = 0;

document.querySelectorAll('header nav button').forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.textContent.toLowerCase();
        getNoticias(categoria);
    });
});

document.getElementById('searchBar').addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    filtroNoticias(searchText);
});

async function getNoticias(query) {
    try {
        // esconder api key depois
        const apiKey = '85b93d6b74ff446ea6f1e9b43b091cd7';
        const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=pt&apiKey=${apiKey}`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.status !== "ok") {
            console.error('Erro na resposta da API:', data);
            return;
        }

        if (!data.articles) {
            console.error('Nenhuma notícia encontrada na resposta:', data);
            return;
        }

        // dados que vamos consumir da api
        const noticias = data.articles.map(article => ({
            title: article.title,
            link: article.url,
            image: article.urlToImage,
            category: query
        }));

        if (query === "todas") {
            todasNoticias = noticias;
            noticiasFiltradas = [...todasNoticias];  // carrega todas as noticias
        } else {
            noticiasFiltradas = noticias;  // carrega noticia do filtro selecionado
        }

        embaralhaNoticia();  // carrega noticia aleatoria ao trocar de categoria
        index = 0;
        renderizaNoticias();  // renderiza as noticias filtradas
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}


// função pra renderizar noticia
function renderizaNoticias() {
    const noticiasContainer = document.getElementById("noticias");
    noticiasContainer.innerHTML = '';

    // verifica se tem noticia filtrada
    if (noticiasFiltradas.length === 0) {
        noticiasContainer.innerHTML = '<p>Não há notícias disponíveis para esta categoria.</p>';
        return;
    }

    // verifica se o indice esta dentro das noticias filtradas
    const noticia = noticiasFiltradas[index];
    if (!noticia) {
        noticiasContainer.innerHTML = '<p>Não há notícias disponíveis para esta categoria.</p>';
        return;
    }

    const noticiaElement = document.createElement("div");
    noticiaElement.classList.add("noticia");

    noticiaElement.innerHTML = `
        <a href="${noticia.link}" target="_blank">
            <img src="${noticia.image}" alt="Imagem da notícia">
            <h2>${noticia.title}</h2>
        </a>
    `;

    noticiasContainer.appendChild(noticiaElement);
}

// filtro de noticias
function filtroNoticias(searchText) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    // vai mostrando as noticia com base no texto
    const normalizedSearchText = searchText.trim().toLowerCase();

    // se nao tiver texto esconde o drop
    if (normalizedSearchText === '') {
        searchResults.style.display = 'none';
        return;
    }

    // filtra as noticias conforme digita
    const filtered = [...todasNoticias].filter(noticia => {
        const normalizedTitle = noticia.title.trim().toLowerCase();
        return normalizedTitle.includes(normalizedSearchText);
    });

    // mostra as noticias no drop
    filtered.forEach(noticia => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('resultItem');
        resultItem.innerHTML = `
            <img src="${noticia.image || 'https://via.placeholder.com/40'}" alt="Imagem da notícia">
            <span>${noticia.title}</span>
        `;
        resultItem.addEventListener('click', () => {
            index = noticiasFiltradas.indexOf(noticia);
            renderizaNoticias();
            searchResults.style.display = 'none'; // esconde drop depois de clicar na noticia
        });
        searchResults.appendChild(resultItem);
    });

    // esconde o drop se nao tiver noticia
    if (filtered.length > 0) {
        searchResults.style.display = 'block';
    } else {
        searchResults.style.display = 'none';
    }
}

// função pra carregar noticias aleatoriamente
function embaralhaNoticia() {
    for (let i = noticiasFiltradas.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [noticiasFiltradas[i], noticiasFiltradas[j]] = [noticiasFiltradas[j], noticiasFiltradas[i]];
    }
}


// Adiciona os event listeners para navegação entre notícias
document.getElementById("prevNews").addEventListener("click", () => {
    index = (index - 1 + noticiasFiltradas.length) % noticiasFiltradas.length;  // noticia anterior
    renderizaNoticias();
});

document.getElementById("nextNews").addEventListener("click", () => {
    index = (index + 1) % noticiasFiltradas.length;  // proxima noticia
    renderizaNoticias();
});



// pra baixo são funcões do botão de login

document.getElementById("login").addEventListener("click", (event) => {
    event.stopPropagation();
    const loginform = document.createElement('div');
    const login = document.getElementById("login")
    let loginformz = document.querySelector('.loginform');
    if (!loginformz) {
        loginform.classList.add('loginform');
        loginform.innerHTML = `
        <label>Login: <br/>
        <input placeholder="Digite seu usuário" type="text"><br/>
        <label>Senha: <br/>
        <input placeholder="Digite sua senha" type="password"> <br/>
        <button>Entrar</button>
        `;
        login.appendChild(loginform);
    }
    else {
        loginform.remove();
    }
});

// Impede que o clique dentro da div de login feche a div
    document.body.addEventListener("click", (event) => {
        const loginform = document.querySelector('.loginform');
        if (loginform && !loginform.contains(event.target) && event.target.id !== "login") {
            loginform.remove();
        }
    });




getNoticias('todas');