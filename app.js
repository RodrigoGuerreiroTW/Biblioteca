function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById
        ("campo-pesquisa").value

    if (campoPesquisa == "") {
        section.innerHTML = "Sem resultados."
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";


    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
            <div class="item-resultado">

                <div class="titulo-imagem">
                    <img src="${dado.imagem}" alt="${dado.titulo}" class="imagem-resultado" />
                    <h2>${dado.titulo}</h2>
                </div>
                
                    <p class="descricao-meta">${dado.descricao}</p>
                        <a href="${dado.link}" target="_blank">Mais informações</a>
             </div>
`;
        }
    }

    if (!resultados) {
        resultados = "Sem resultados."
    }

    section.innerHTML = resultados
}

document.getElementById("campo-pesquisa").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        pesquisar();  // Chama a função de pesquisa
    }
});



