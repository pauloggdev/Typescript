class Produto{

    private nome:string;
    private preco: number;
    private descricao:string


    constructor(nome:string, preco:number, descricao:string){
        this.nome = nome;
        this.preco = preco;
        this.descricao = descricao;
    }
    mostrar(){
        console.log(`PRODUTO: ${this.nome} PRECO: ${this.preco} DESCRIÇÃO: ${this.descricao}`);
        console.log(`Console adicionado para testar outra branch`);
        console.log(`alterado diff`)
    }
}






const produto = new Produto('Produto 01', 200,'Descrição do produto');
produto.mostrar();