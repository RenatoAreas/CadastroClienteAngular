import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

  mensagem:string;

  constructor(private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  //função para executar o submit do formulário
  cadastrarCliente(formCadastro) : void {

    this.httpClient.post(environment.api_clientes,
      formCadastro.form.value, { responseType : 'text' })
      .subscribe(
        data => {
          this.mensagem = data;
        },
        e => {
          this.mensagem = e;
        }
      );

  }
}