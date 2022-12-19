class Produto{

    private nome:string;
    private preco: number;


    constructor(nome:string, preco:number){
        this.nome = nome;
        this.preco = preco;
    }
    mostrar(){
        console.log(`PRODUTO: ${this.nome} PRECO: ${this.preco}`);
        console.log(`Console adicionado para testar outra branch`)
    }
}






const produto = new Produto('Produto 01', 200);
produto.mostrar();