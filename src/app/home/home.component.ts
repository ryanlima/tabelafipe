import { Dados } from './../dados';
import { Ano } from './../ano';
import { Modelo } from './../modelo';
import { Marca } from './../marca';
import { FipeApiService } from './../fipe-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  marcas : Marca[] = Array();
  modelos : Modelo[] = Array();
  anos : Ano[] = Array() ;
  dados : Dados;
  marcaSelecionada : string;
  id : string

  constructor(private  FipeApi :FipeApiService) {
      this.FipeApi.getMarcas()
      .subscribe(
          resposta => this.marcas = resposta
      );

      
   }
    ngOnInit() {
    }
    selectMarca(marca) {
      this.id= marca.id;
      this.obterModelo(this.id);
      //console.log(marca);
    }
    
    selectModelo(marca) {
        this.id= marca.id;
       this.obterModelo(this.id);
        console.log(marca);
    }

    selectAno(marca) {
        // this.id= marca.id;
         //this.obterModelo(this.id);
         console.log(marca);
     }

    
    obterModelo(marcaSelecionada){
      this.FipeApi.getModelo(marcaSelecionada)
      .subscribe(
          resposta => this.modelos = resposta
        );
      
    }

    obterAno(marcaSelecionada,modeloSelecionado){
      this.FipeApi.getAno(marcaSelecionada, modeloSelecionado)
      .subscribe(
          resposta => this.anos = resposta
        );
    }
/*
    obterDados(marcaSelecionada : string,modeloSelecionado : string, anoSelecionado){
          this.FipeApi.getMarcas()
          .subscribe(
              resposta => this.dados = resposta
        );
    }

*/
}
