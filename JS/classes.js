// FIXME: Ler sobre classes :)  

class Matematica {
  soma(a, b) {
    return a + b;
  }
  subtração(a,b) {
    return a - b;
  }
  divisão(a, b) {
    return a / b;
  }
  multiplicação (a, b) {
    return a * b;
  }
}

let testandoClasseCriada = new Matematica().soma(12312, 452454)
console.log(testandoClasseCriada)