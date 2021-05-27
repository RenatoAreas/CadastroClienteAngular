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

}
