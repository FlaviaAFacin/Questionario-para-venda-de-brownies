// Algoritmo de aleatoriedade para gerar um desconto ou brinde surpresa
export function gerarBrindeAleatorio() {
    const brindes = [
        "Cupom de 10% de desconto para a feira!",
        "Um mini coração de chocolate grátis!",
        "Geleia extra na sua próxima compra!",
        "Obrigado por responder! Seu brownie será feito com muito amor. ❤️"
    ];
    
    // Sorteia um índice aleatório baseado no tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * brindes.length);
    return brindes[indiceAleatorio];
}


// Aplicação do método replace para limpar ou formatar strings
export function formatarNomeFormato(formato) {
    // Exemplo de replace substituindo termos para simplificar a exibição final
    return formato.replace("marmitinha", "Pote de Marmita Tradicional 🥣")
                  .replace("sanduiche", "Sanduíche Recheado 🥪")
                  .replace("caixa", "Caixa de Compartilhamento 🎁");
}
