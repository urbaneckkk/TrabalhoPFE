let todasNoticias = [];
let noticiasFiltradas = [];
let index = 0;



document.querySelectorAll('header nav button').forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.textContent.toLowerCase();
        getNoticias(categoria);
    });
});

async function getNoticias(query) {
    try {
        const articles = [{
            category: "todas",
            image: "https://olhardigital.com.br/wp-content/uploads/2024/12/shutterstock_2521120403.jpg",
            link: "https://olhardigital.com.br/2025/03/18/pro/samsung-vai-apostar-todas-as-suas-fichas-na-ia/",
            title: "Samsung vai apostar todas as suas fichas na IA"
        }]

        // esconder api key depois
        
        // dados que vamos consumir da api
        const noticias = articles.map(article => ({
            title: article.title,
            link: article.link,
            image: article.image,
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

document.addEventListener("DOMContentLoaded", function () {
    const menuIcone = document.querySelector(".menu-icone");
    const menuPc = document.querySelector(".menu-pc");

    // Alterna a visibilidade do menu
    menuIcone.addEventListener("click", function (event) {
        event.stopPropagation(); // Evita que o clique no botão feche o menu imediatamente
        menuPc.style.display = (menuPc.style.display === "flex") ? "none" : "flex";
    });

    // Fecha o menu ao clicar em qualquer botão dentro dele
    document.querySelectorAll(".menu-pc button").forEach(button => {
        button.addEventListener("click", function () {
            menuPc.style.display = "none";
        });
    });

    // Fecha o menu ao clicar fora dele, mas ignora o ícone de menu
    document.addEventListener("click", function (event) {
        if (!menuPc.contains(event.target) && event.target !== menuIcone && !menuIcone.contains(event.target)) {
            menuPc.style.display = "none";
        }
    });
});

getNoticias('todas');