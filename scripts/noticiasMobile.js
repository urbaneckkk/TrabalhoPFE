let todasNoticiasMobile = [];
let noticiasFiltradasMobile = [];
let indexMobile = 0;

import {articles} from './noticias.js';
fetch('file:///C:/Users/dededev/Downloads/TrabalhoPFE-main/scripts/noticias.js');

async function getNoticiasMobile(query) {
    try {
        //esconder api key depois
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
        console.log(noticias);
        console.log(data);
        if (query === "todas") {
            todasNoticiasMobile = noticias;
            noticiasFiltradasMobile = [...todasNoticiasMobile];  // carrega todas as noticias
        } else {
            noticiasFiltradasMobile = noticias;  // carrega noticia do filtro selecionado
        }

        // const noticias = articles.map(article => ({
        //     title: article.title,
        //     link: article.link,
        //     image: article.image,
        //     category: query
        // }));


        if (query === "todas") {
            todasNoticiasMobile = noticias;
            noticiasFiltradasMobile = [...todasNoticiasMobile];  // carrega todas as noticias
        } else {
            noticiasFiltradasMobile = noticias;  // carrega noticia do filtro selecionado
        }

        embaralhaNoticiaMobile();  // carrega noticia aleatoria ao trocar de categoria
        indexMobile = 0;
        renderizaNoticiasMobile();  // renderiza as noticias filtradas
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
    }
}


function renderizaNoticiasMobile() {
    const noticiasContainer = document.getElementById("noticiasMobile");
    noticiasContainer.innerHTML = '';

    // verifica se tem noticia filtrada
    if (noticiasFiltradasMobile.length === 0) {
        noticiasContainer.innerHTML = '<p>Não há notícias disponíveis para esta categoria.</p>';
        return;
    }

    // verifica se o indice esta dentro das noticias filtradas
    const noticia = noticiasFiltradasMobile[indexMobile];
    if (!noticia) {
        noticiasContainer.innerHTML = '<p>Não há notícias disponíveis para esta categoria.</p>';
        return;
    }

    const noticiaElement = document.createElement("div");
    noticiaElement.classList.add("noticiaMobile");

    noticiaElement.innerHTML = `
        <a href="${noticia.link}" target="_blank">
            <img src="${noticia.image}" alt="Imagem da notícia">
            <h2>${noticia.title}</h2>
        </a>
    `;
    noticiasContainer.appendChild(noticiaElement);
}

function embaralhaNoticiaMobile() {
    for (let i = noticiasFiltradasMobile.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [noticiasFiltradasMobile[i], noticiasFiltradasMobile[j]] = [noticiasFiltradasMobile[j], noticiasFiltradasMobile[i]];
    }
}

// Adiciona os event listeners para navegação entre notícias
document.getElementById("prevNewsMobile").addEventListener("click", () => {
    indexMobile = (indexMobile - 1 + noticiasFiltradasMobile.length) % noticiasFiltradasMobile.length;  // noticia anterior
    renderizaNoticiasMobile();
});

document.getElementById("nextNewsMobile").addEventListener("click", () => {
    indexMobile = (indexMobile + 1) % noticiasFiltradasMobile.length;  // proxima noticia
    renderizaNoticiasMobile();
});

getNoticiasMobile('todas');