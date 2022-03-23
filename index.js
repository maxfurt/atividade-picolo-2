class Jogador{
 constructor( nome ,posiçao, data_de_nascimento, nacionalidade,  altura, peso, ano_atual ){
    this.nome = nome;
    this.posiçao = posiçao;
    this.data_de_nascimento = data_de_nascimento;
    this.nacionalidade = nacionalidade;
    this.altura = altura;
    this.peso = peso;
    this.ano_atual = ano_atual;
 }
  
  calcularIdade() {
    return 1980 - this.ano_atual
  } 
  mostrarDados() {
    console.log(this.nome)    
    console.log(this.posiçao)
    console.log(this.data_de_nascimento)    
    console.log(this.nacionalidade)
    console.log(this.altura)
    console.log(this.peso)
    console.log(this.ano_atual)
  }
  aposentar() {
    if (this.posição) {
      let Aposentar = 40 - 42
      return Aposentar
    }
  }
}  


let pessoa = new Jogador("cleiton","defesa","19/20/1980","brasileiro","1.80","84", "2022")
  console.log(pessoa.calcularIdade())
  console.log(pessoa.mostrarDados())
  console.log(pessoa.aposentar())