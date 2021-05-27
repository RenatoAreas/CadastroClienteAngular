import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';
import { ConsultaClientesComponent } from './consulta-clientes/consulta-clientes.component';

import { Routes, RouterModule } from '@angular/router';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes : Routes = [
  { path : 'cadastro-clientes', 
      component : CadastroClientesComponent },
  { path : 'consulta-clientes', 
      component : ConsultaClientesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CadastroClientesComponent,
    ConsultaClientesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   RouterModule.forRoot(routes) 
   //registrando as rotas criadas no projeto..
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
