// Importando as funções do módulo utilitário
import { gerarBrindeAleatorio, formatarNomeFormato } from './utils.js';


/* 
💡 FLUXOGRAMA MENTAL DO SISTEMA:
[Início] -> [Usuário submete o formulário] -> [Varre dados capturados] 
        -> [Valida Condicionais de Preço/Recheio] -> [Aplica Replace no Texto]
        -> [Gera Aleatoriedade do Brinde] -> [Renderiza Recibo na Tela] -> [Fim]
*/


document.getElementById('brownieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede a página de recarregar


    // Captura dos elementos usando seletores nativos
    const formData = new FormData(event.target);
    
    const loveLevel = formData.get('love_level');
    const wantsFillings = formData.get('wants_fillings');
    const additional = formData.get('additional');
    const rawFormat = formData.get('format');
    const priceRange = formData.get('price_range');


    // Utilizando o método replace importado
    const formatoFormatado = formatarNomeFormato(rawFormat);


    // Estrutura Condicional para verificar a preferência de preço
    let mensagemPreco = "";
    if (priceRange === "R\$ 12 a R\$ 15") {
        mensagemPreco = "Preço super acessível escolhido para a feira!";
    } else {
        mensagemPreco = "Excelente escolha gourmet! Vai valer cada centavo.";
    }


    // Criando uma lista para usar a estrutura de repetição "for of"
    const resumoPedido = [
        `Nível de amor por Brownies: ${loveLevel}/5`,
        `Deseja recheios artesanais: ${wantsFillings}`,
        `Adicional do topo: ${additional}`,
        `Formato selecionado: ${formatoFormatado}`
    ];


    // Construindo o texto do recibo utilizando o "for of"
    let textoFinal = "<strong>Resumo da sua montagem:</strong><br><br>";
    
    for (const item of resumoPedido) {
        // Condição de parada fictícia baseada em erro ou dado vazio
        if (!item) break; 
        
        textoFinal += `• ${item}<br>`;
    }


    textoFinal += `<br><em>${mensagemPreco}</em>`;


    // Pegando o brinde aleatório do algoritmo do módulo utils
    const brindeSorteado = gerarBrindeAleatorio();


    // Renderizando os resultados na tela
    const resultBox = document.getElementById('result');
    document.getElementById('receiptText').innerHTML = textoFinal;
    document.getElementById('luckyBonus').innerText = `🎁 Bônus da Feira: ${brindeSorteado}`;
    
    resultBox.classList.remove('hidden');
});
