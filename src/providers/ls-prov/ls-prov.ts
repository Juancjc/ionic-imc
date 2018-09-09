import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';


@Injectable()
export class LsProvProvider {

  constructor(public storage: Storage) {
    console.log('Hello LsProvider Provider');
  }
  public salvar(imc, nome, peso, altura){
    let key = new Date().getTime();
    let pessoa = new Pessoa(imc, nome, peso, altura);
    return this.storage.set(key.toString(), pessoa);
  }
}

export class Pessoa{
  nome: string;
  altura: number;
  peso: number;
  imc: number;
  constructor(imc, nome, peso, altura){
     this.nome= nome;
     this.altura= altura;
     this.peso= peso;
     this.imc= imc;
  }
}

export class ListaPessoa{
  key: string;
  valor: Pessoa;
}