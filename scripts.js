// scripts.js

let produtos = [
    {
        id: 1,
        nome: "iPhone 15 Pro",
        categoria: "smartphones",
        preco: 7999,
        precoOriginal: 8999,
        desconto: 11,
        imagem: "https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400" ,
        descricao: "Smartphone Apple com câmera avançada"
    },
    {
        id: 2,
        nome: "MacBook Air M2",
        categoria: "laptops",
        preco: 8999,
        precoOriginal: 10999,
        desconto: 18,
        imagem: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400" ,
        descricao: "Notebook Apple ultrafino e potente"
    },
    {
        id: 3,
        nome: "AirPods Pro",
        categoria: "headphones",
        preco: 1899,
        precoOriginal: 2299,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400" ,
        descricao: "Fones sem fio com cancelamento de ruído"
    },
    {
        id: 4,
        nome: "Samsung Galaxy S24",
        categoria: "smartphones",
        preco: 5499,
        precoOriginal: 6299,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400" ,
        descricao: "Smartphone Samsung com tela AMOLED"
    },
    {
        id: 5,
        nome: "Apple Watch Series 9",
        categoria: "smartwatch",
        preco: 3299,
        precoOriginal: 3799,
        desconto: 13,
        imagem: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=400" ,
        descricao: "Relógio inteligente com monitoramento"
    },
    {
        id: 6,
        nome: "Teclado Mecânico",
        categoria: "accessories",
        preco: 499,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400" ,
        descricao: "Teclado mecânico RGB para gamers"
    },
    {
        id: 7,
        nome: "Sony WH-1000XM5",
        categoria: "headphones",
        preco: 2499,
        precoOriginal: 2999,
        desconto: 17,
        imagem: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=400" ,
        descricao: "Fone com cancelamento de ruído"
    },
    {
        id: 8,
        nome: "Dell XPS 13",
        categoria: "laptops",
        preco: 7999,
        precoOriginal: null,
        desconto: null,
        imagem: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=400" ,
        descricao: "Notebook Windows premium"
    }
];

// Seleciona o container onde os produtos serão exibidos
let containerProdutos = document.querySelector(".produtos-container");
// Seleciona todos os botões de categoria
const botoesCategorias = document.querySelectorAll('.botao-categorias');

// **MODIFICAÇÃO 1: A função agora aceita um array de produtos para exibir**
function mostrarProdutos(produtosParaExibir) {
    let htmlProdutos = "";
   
    produtosParaExibir.forEach(prd => {
        htmlProdutos += `
            <div class="cartao-produto">
                <img src="${prd.imagem}" alt="img celular" class="imagem-produto">
                <div class="info-produtos">
                    <h3 class="nome-produto">${prd.nome}</h3>
                    <p class="descricao-produto">${prd.descricao}</p>
                    <p class="preco-produto">R$ ${prd.preco}</p>
                    <button class="botao-produto">Ver Detalhes</button>
                </div>
            </div>
        `;
    });

    containerProdutos.innerHTML = htmlProdutos;
}

// **MODIFICAÇÃO 2: Lógica para os cliques nos botões de filtro**
botoesCategorias.forEach(botao => {
    botao.addEventListener('click', () => {
        // Remove a classe 'ativo' de qualquer botão que a tenha
        const botaoAtivo = document.querySelector('.botao-categorias.ativos');
        botaoAtivo.classList.remove('ativos');
        // Adiciona a classe 'ativo' ao botão que foi clicado
        botao.classList.add('ativos');

        const categoriaSelecionada = botao.dataset.categoria;

        if (categoriaSelecionada === 'todos') {
            // Se a categoria for 'todos', mostra a lista original completa
            mostrarProdutos(produtos);
        } else {
            // Caso contrário, filtra a lista de produtos
            const produtosFiltrados = produtos.filter(produto => produto.categoria === categoriaSelecionada);
            // Mostra apenas os produtos filtrados
            mostrarProdutos(produtosFiltrados);
        }
    });
});

// **MODIFICAÇÃO 3: Exibe todos os produtos ao carregar a página pela primeira vez**
mostrarProdutos(produtos);