import { Component } from '@angular/core';
import { Cliente } from '../modelo/Cliente';
import { ClienteService } from '../servico/cliente.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

  //Objeto do tipo cliente
  cliente = new Cliente();

  //variavel para visibilidade dos botões
  btnCadastro:boolean = true;

  //variavel para visibilidade da tabela
  tabela:boolean = true;

  //JSON de Clientes
  clientes:Cliente[] = [];

  // Construtor
  constructor(private servico:ClienteService){}

  // Método para selecionar os clientes
  selecionar():void{
    this.servico.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

  //Método de cadastro
  cadastrar():void{
    this.servico.cadastrar(this.cliente)
    .subscribe(retorno => { 
    
    // Cadastrar o cliente no vetor
    this.clientes.push(retorno);});

    // Limpar formulario
    this.cliente = new Cliente();

    // Mensagem
    alert('Cliente cadastrado com sucesso!')
   
  }

  // Método para selecionar um cliente específico
  selecionarCliente(posicao:number):void{

    //Selecionar cliente no vetor
    this.cliente = this.clientes[posicao];

    //Visibilidade dos botões
    this.btnCadastro = false;

    //Visibilidade da tabela
    this.tabela = false;

  }

  // Método para editar clientes
  editar():void{

    this.servico.editar(this.cliente)
    .subscribe(retorno => {

      //Obter posicao do vetor onde está o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == retorno.codigo;
      });

      //Alterar os dados do cliente
      this.clientes[posicao] = retorno;

      // Visibilidade dos botoes
      this.btnCadastro = true;

      // Visibilidade da tabela
      this.tabela = true;

      //Mensagem
      alert('Cliente alterado com sucesso!');

      // Limpar formulario
      this.cliente = new Cliente();


    })
  }
  

  // Método para remover clientes
  remover():void{

    this.servico.remover(this.cliente.codigo)
    .subscribe(retorno => {

      //Obter posicao do vetor onde está o cliente
      let posicao = this.clientes.findIndex(obj => {
        return obj.codigo == this.cliente.codigo;
      });

      //Remover cliente do vetor
      this.clientes.splice(posicao, 1);

      // Visibilidade dos botoes
      this.btnCadastro = true;

      // Visibilidade da tabela
      this.tabela = true;

      //Mensagem
      alert('Cliente removido com sucesso!');

      // Limpar formulario
      this.cliente = new Cliente();


    })
  }


  // Método para cancelar
  cancelar():void{

    // Limpar formulario
    this.cliente = new Cliente();

    // Visibilidade dos botoes
    this.btnCadastro = true;

    // Visibilidade da tabela
    this.tabela = true;

  }

  // Metodo de inicialização
  ngOnInit(){
    this.selecionar();
  }  
  
}
