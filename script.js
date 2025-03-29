let todasNoticias = [];
let noticiasFiltradas = [];
let index = 0;

const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const searchResults = document.getElementById("searchResults");
const searchContainer = document.getElementById("searchContainer");

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

    // Normaliza o texto digitado
    const normalizedSearchText = searchText.trim().toLowerCase();

    // Se não tiver texto, esconde o drop
    if (normalizedSearchText === '') {
        searchResults.style.display = 'none';
        return;
    }

    // Filtra as notícias conforme o usuário digita
    const filtered = [...todasNoticias].filter(noticia => {
        return noticia.title.trim().toLowerCase().includes(normalizedSearchText);
    });

    // Exibe as notícias filtradas no dropdown
    filtered.forEach(noticia => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('resultItem');
        resultItem.innerHTML = `
            <a href="${noticia.link}" target="_blank">
                <img src="${noticia.image}" alt="Imagem da notícia">
                <span>${noticia.title}</span>
            </a>
        `;
        searchResults.appendChild(resultItem);
    });

    // Exibe ou esconde os resultados
    searchResults.style.display = filtered.length > 0 ? 'block' : 'none';
}



// Quando clica no ícone, a barra expande e foca nela
searchIcon.addEventListener("click", () => {
    searchContainer.classList.add("active");
    searchBar.focus();
});

// Fecha a barra ao clicar fora
document.body.addEventListener("click", (event) => {
    if (!searchContainer.contains(event.target)) {
        searchContainer.classList.remove("active");
        searchBar.value = ""; // Limpa o texto
    }
});

// Quando o usuário clica fora, a barra de pesquisa some **apenas se não for nos resultados**
document.body.addEventListener("click", (event) => {
    if (!searchContainer.contains(event.target) && !searchResults.contains(event.target)) {
        searchBar.classList.remove("active");
        searchBar.value = ""; // Limpa o texto
        searchResults.style.display = "none"; // Esconde o dropdown
        setTimeout(() => {
            searchIcon.style.display = "block"; // Mostra o ícone de volta
        }, 300);
    }
});

// Mantém a barra aberta ao clicar em um resultado
searchResults.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede o clique de fechar a barra
});



// fecha a barra de pesquisa quando clica fora
document.body.addEventListener('click', (event) => {
    if (!searchResults.contains(event.target) && event.target.id !== "searchBar") {
        searchResults.style.display = 'none';
    }
});


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



getNoticias('todas');