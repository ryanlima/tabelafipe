import { Dados } from './dados';
import { Ano } from './ano';
import { Modelo } from './modelo';
import { Marca } from './marca';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class FipeApiService {

  constructor(private http : HttpClient) { }

  getMarcas(){
    return this.http.get<Marca[]>('https://fipeapi.appspot.com/api/1/carros/marcas.json');
  }

  getModelo(id_marca : string){
     return this.http.get<Modelo[]>('https://fipeapi.appspot.com/api/1/carros/veiculos/' +id_marca+ '.json');
  }
  
  getAno(id_marca : string,id_modelo : string){
    //console.log('https://fipeapi.appspot.com/api/1/carros/veiculo/'+id_marca+'/'+id_modelo+'.json');
    return this.http.get<Ano[]>('https://fipeapi.appspot.com/api/1/carros/veiculo/'+id_marca+'/'+id_modelo+'.json');
  }
  
  getDados(id_marca, id_modelo, id_ano){
    return this.http.get<Dados>('https://fipeapi.appspot.com/api/1/carros/veiculo/' + id_marca + '/' + id_modelo + '/'+ id_ano+'.json');
  }
  

}
