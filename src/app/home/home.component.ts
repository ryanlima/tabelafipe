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
  dado : Dados = "";
  marcaSelect : string;
  modeloSelect : string;
  anoSelect : string;
  id : string;

  marca: string;
  modelo: string;
  ano: string;


  constructor(private FipeApi :FipeApiService) {
      this.FipeApi.getMarcas()
      .subscribe(
          resposta => this.marcas = resposta
      );

      
   }
    ngOnInit() {
    }
    selectMarca(marca) {
      this.marcaSelect = marca.id; 
      this.marca = marca.name; 
      this.obterModelo(this.marcaSelect);
      //console.log(marca);
    }
    
    selectModelo(modelo) {
        this.modeloSelect = modelo.id;
        this.modelo = modelo.name;
        this.obterAno(this.marcaSelect,this.modeloSelect)
       // console.log(modelo);
    }

    selectAno(ano) {
        this.anoSelect= ano.id;
        this.ano = ano.name;
        this.obterDados(this.marcaSelect,this.modeloSelect, this.anoSelect);
         //console.log(marca);
     }

    //Consultas
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

    obterDados(marcaSelecionada,modeloSelecionado, anoSelecionado){
          this.FipeApi.getDados(marcaSelecionada,modeloSelecionado,anoSelecionado)
          .subscribe(
              resposta => this.dado = resposta     
        );
    }


}
