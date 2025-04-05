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
        return (noticia.title ?? '').toLowerCase().includes(normalizedSearchText);
    });

    // Exibe uma mensagem caso não haja resultados
    if (filtered.length === 0) {
        const noResultsMessage = document.createElement('div');
        noResultsMessage.classList.add('no-results');
        noResultsMessage.textContent = 'Nenhuma notícia encontrada';
        searchResults.appendChild(noResultsMessage);
    }

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

document.getElementById('searchBar').addEventListener('input', (event) => {
    const searchText = event.target.value.toLowerCase();
    filtroNoticias(searchText);
});

// Quando clica no ícone, a barra expande e foca nela
searchIcon.addEventListener("click", () => {
    searchContainer.classList.add("active");
    searchBar.focus();
});

// Quando o usuário digita, chama a função de filtro
searchBar.addEventListener("input", (event) => {
    filtroNoticias(event.target.value);
});

// Fecha a barra ao clicar fora
document.body.addEventListener("click", (event) => {
    if (!searchContainer.contains(event.target)) {
        searchContainer.classList.remove("active");
        searchBar.value = ""; // Limpa o texto
        searchResults.style.display = "none"; // Esconde o dropdown
    }
});

// Mantém a barra aberta ao clicar em um resultado
searchResults.addEventListener("click", (event) => {
    event.stopPropagation(); // Impede o clique de fechar a barra
});

// Evita o clique fora fechar o dropdown, mas fecha a barra se clicar fora dela
document.body.addEventListener('click', (event) => {
    if (!searchResults.contains(event.target) && event.target.id !== "searchBar") {
        searchResults.style.display = 'none';
    }
});
