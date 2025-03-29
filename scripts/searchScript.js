const searchIcon = document.getElementById("searchIcon");
const searchBar = document.getElementById("searchBar");
const searchResults = document.getElementById("searchResults");
const searchContainer = document.getElementById("searchContainer");

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