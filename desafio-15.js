// Crie uma função que recebe um array como argumento e retorna o elemento que mais aparece no array.

const encontraElementoFrequente = (array =>{
    if(!array || array.length === 0){
        return null;
    }

    const contagens = {};
    let elementoMaisFrequente;
    let maxContagem = 0;

    for (const elemento of array){
        contagens[elemento] = (contagens[elemento] || 0) + 1;
        if(contagens[elemento] > maxContagem){
            maxContagem = contagens[elemento]
            elementoMaisFrequente = elemento;
        }
    }
    let mensagem = `O elemento que mais aparece é o ${elementoMaisFrequente} com o total de ${maxContagem} contagens`

    if (maxContagem === 1){
        mensagem = `O elemento que mais aparece é o ${elementoMaisFrequente} com o total de ${maxContagem} contagem`
    }
    return mensagem;
})

console.log(encontraElementoFrequente([1,1]));

