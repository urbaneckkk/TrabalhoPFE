let todasNoticias = [];
let noticiasFiltradas = [];
let index = 0;

import {articles} from './api.js';


document.querySelectorAll('header nav button').forEach(button => {
    button.addEventListener('click', () => {
        const categoria = button.textContent.toLowerCase();
        getNoticias(categoria);
    });
});

async function getNoticias(query) {
    try {
        

        //esconder api key depois
        // const apiKey = '85b93d6b74ff446ea6f1e9b43b091cd7';
        // const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&language=pt&apiKey=${apiKey}`;

        // const response = await fetch(url);
        // const data = await response.json();

        // if (data.status !== "ok") {
        //     console.error('Erro na resposta da API:', data);
        //     return;
        // }

        // if (!data.articles) {
        //     console.error('Nenhuma notícia encontrada na resposta:', data);
        //     return;
        // }

        // // dados que vamos consumir da api
        // const noticias = data.articles.map(article => ({
        //     title: article.title,
        //     link: article.url,
        //     image: article.urlToImage,
        //     category: query
        // }));

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
        // dados que vamos consumir da api
        
        

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