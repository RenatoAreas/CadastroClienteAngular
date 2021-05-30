import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css']
})
export class ConsultaClientesComponent implements OnInit {

  listagemClientes: any = [];

  cliente = {
    idCliente : 0,
    nome: '',
    email: '',
    cpf: ''
  }

  mensagem_edicao:string;
  mensagem_exclusao:string;

  constructor(private httpClient:HttpClient) { }

  ngOnInit() : void{
    this.consultarClientes();
  }

  consultarClientes() : void{
    this.httpClient.get(environment.api_clientes)
    .subscribe(
      (data) => {
        this.listagemClientes = data;
      }, 

      e => {
        console.log(e);
      }
    );
  }

  obterCliente(id) : void {

    this.mensagem_edicao ="";
    this.mensagem_exclusao="";

    this.httpClient.get(environment.api_clientes + "/" + id)
      .subscribe(
        (data:any) => {
          this.cliente = data;
        },
        e => {
          console.log(e);
        }
      )
  }

  //atualizando os dados do cliente
  atualizarCliente(formEdicao) : void{
    this.httpClient.put(environment.api_clientes,
      formEdicao.form.value, {responseType :'text'})
      .subscribe(
         data => {
          this.mensagem_edicao = data;
          this.consultarClientes();
      },
      e =>{
        console.log(e);
      }
      );
  }
  //excluindo cliente
  excluirCliente (id) : void {
    this.httpClient.delete(environment.api_clientes + "/"  + id,
    {responseType : 'text'})
    .subscribe(
      data => {
        this.mensagem_exclusao = data;
        this.consultarClientes()
      },
      e => {
        console.log(e);
      }
    )
  }

}
