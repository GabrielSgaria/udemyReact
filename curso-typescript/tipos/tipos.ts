// string
let nome: string = 'João'
console.log(nome)
// nome = 28

// Numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade)

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)


// tipos explicitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas

let endereco: [string, number, string] = ["Av Principal", 99, "bloco C"]
console.log(endereco)

endereco = ["Rua Importante", 1260, "Bloco A"]
console.log(endereco)

// enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul,
    Laranja,
    Amarelo,
    Vermelho = 100
}


let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = 'BMW'
console.log(carro)
carro = {marca: 'BMW', ano: 2019}
console.log(carro)
