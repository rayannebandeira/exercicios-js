// ========================================
// Aula 05 — Fundamentos de JavaScript
// ========================================
// Implemente cada função abaixo.
// Rode os testes com: npx vitest run exercicios/aula05
// Não mexa no arquivo index.test.js.

// Exercício 1 — classificarIdade
export function classificarIdade(idade) {
  if (idade > 12 ){
    return "criança";
  }else if (idade >= 12 && idade <= 17){
    return "adolescente";
  }else{
  return "adulto"}
}

// Exercício 2 — calcularDesconto
export function calcularDesconto(preco, percentual) {
  return preco - (preco * percentual / 100);
}


// Exercício 3 — verificarAprovacao
export function verificarAprovacao(nota) {
  if (nota >=60){
    return "aprovado";
  }else if (nota >=40 && nota <60){
    return "recuperação";
  }else{
    return "reprovado"; 
  }
}

// Exercício 4 — somarPares
export function somarPares(numeros) {
  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) {
      soma += numeros[i];
    }
  }
  return soma;
  
}

// Exercício 5 — contarLetra
export function contarLetra(texto, letra) {
  let contador = 0;
  for (let i = 0; i < texto.length; i++) {
    if (texto[i] === letra) {
      contador++;
    }
  }
  return contador;

}
