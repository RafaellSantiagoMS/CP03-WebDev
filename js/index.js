const produtos = [

    { nome: "Smartphone", preco: 1500, categoria: "Eletrônicos", disponibilidade: true },

    { nome: "Notebook", preco: 3500, categoria: "Eletrônicos", disponibilidade: false },

    { nome: "Camiseta", preco: 80, categoria: "Roupas", disponibilidade: true },

    { nome: "Calça Jeans", preco: 120, categoria: "Roupas", disponibilidade: true },

    { nome: "Livro de JavaScript", preco: 45, categoria: "Livros", disponibilidade: false },

    { nome: "Livro de CSS", preco: 50, categoria: "Livros", disponibilidade: true },

    { nome: "Fone de Ouvido", preco: 200, categoria: "Eletrônicos", disponibilidade: true },

    { nome: "Jaqueta", preco: 220, categoria: "Roupas", disponibilidade: false },

    { nome: "Tablet", preco: 1200, categoria: "Eletrônicos", disponibilidade: true },

    { nome: "Livro de React", preco: 60, categoria: "Livros", disponibilidade: true },

];
 
const lista = document.querySelector(".lista-produtos");

const selectCategoria = document.getElementById("categoria");

const checkboxDisponivel = document.getElementById("disponivel");

const botaoFiltrar = document.getElementById("botao-filtrar");

const botaoListarTodos = document.getElementById("botao-listar-todos");
 
function limparLista() {

    lista.innerHTML = "";

}
 
function mostrarProdutos(produtosParaMostrar) {

    limparLista();
 
    produtosParaMostrar.forEach((produto, i) => {

        const item = document.createElement("li");

        item.classList.add("cartao-produto");
 
        const informacoes = document.createElement("div");

        informacoes.classList.add("informacoes");
 
        const nomeSpan = document.createElement("span");

        nomeSpan.textContent = produto.nome;
 
        const codigoSpan = document.createElement("span");

        codigoSpan.textContent = `#${String(i + 1).padStart(3, "0")}`;
 
        informacoes.append(nomeSpan, codigoSpan);
 
        const imagem = document.createElement("img");

        imagem.src = "";

        imagem.alt = produto.nome;

        imagem.classList.add("gif");
 
        const tiposLista = document.createElement("ul");

        tiposLista.classList.add("tipos");
 
        const tipoItem = document.createElement("li");

        tipoItem.classList.add("tipo", produto.categoria);

        tipoItem.textContent = produto.categoria;
 
        tiposLista.appendChild(tipoItem);
 
        const descricao = document.createElement("p");

        descricao.classList.add("descricao");

        const statusDisponibilidade = produto.disponibilidade ? "Disponível" : "Indisponível";

        descricao.innerHTML = `Preço: R$ ${produto.preco.toFixed(2)}<br>${statusDisponibilidade}`;
 
        item.append(informacoes, imagem, tiposLista, descricao);

        lista.appendChild(item);

    });

}
 
botaoListarTodos.addEventListener("click", () => {

    mostrarProdutos(produtos);

});
 
botaoFiltrar.addEventListener("click", () => {

    const categoriaSelecionada = selectCategoria.value;

    const somenteDisponiveis = checkboxDisponivel.checked;
 
    const produtosFiltrados = produtos.filter(produto => {

        const categoriaOK = categoriaSelecionada === "Todos" || produto.categoria === categoriaSelecionada;

        const disponibilidadeOK = !somenteDisponiveis || produto.disponibilidade;

        return categoriaOK && disponibilidadeOK;

    });
 
    mostrarProdutos(produtosFiltrados);

});
 
mostrarProdutos(produtos);
 