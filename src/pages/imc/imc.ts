import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LsProvProvider } from '../../providers/ls-prov/ls-prov';

/**
 * Generated class for the ImcPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  peso: number;
  altura: number;
  valorImc: number;
  msg: string;
  nome: string;
  sexo: string;
  dataNascimento: Date;
  idade: number;
  data: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private providerLS: LsProvProvider) {
  }

calcular(){
   var valorImc = this.peso / (this.altura * this.altura);
   valorImc= parseFloat(valorImc.toFixed(2));
   this.geraMsg(valorImc);
   this.salvarDados(valorImc);
}

salvarDados(imc){
  this.providerLS.salvar(
    imc, this.nome, this.peso, this.altura);
}
calculadarIdade(dataNascimento: Date){
    
    return this.idade = Math.floor(Math.ceil(Math.abs(new Date(dataNascimento).getTime()- Date.now()) / (1000 * 3600 * 24)) / 365.25);
}
geraMsg(valorImc:number){
  var idade = this.calculadarIdade(this.dataNascimento);

  if(this.sexo=='f')
    this.msg = "A "+this.nome+", tem "+idade +" anos é seu imc é "+valorImc+" e está";
  else if(this.sexo=='m')
    this.msg = "O "+this.nome+", tem "+idade +" anos é seu imc é "+valorImc+" e está";
  
  switch (this.sexo){
    case "m":
    if(idade<=6){
      if (valorImc < 14.5)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 16.6)
         this.msg +=" com peso normal";
      else if(valorImc < 18)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==7){
      if (valorImc < 15)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 17.3)
         this.msg +=" com peso normal";
      else if(valorImc < 18)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==8){
      if (valorImc < 15.6)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 16.7)
         this.msg +=" com peso normal";
      else if(valorImc < 20.3)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==9){
      if (valorImc < 16.1)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 18.8)
         this.msg +=" com peso normal";
      else if(valorImc < 21.4)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==10){
      if (valorImc < 16.7)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 19.6)
         this.msg +=" com peso normal";
      else if(valorImc < 22.5)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==11){
      if (valorImc < 17.2)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 20.3)
         this.msg +=" com peso normal";
      else if(valorImc < 23.7)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    } 
    if(idade==12){
      if (valorImc < 17.8)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 21.1)
         this.msg +=" com peso normal";
      else if(valorImc < 24.8)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    }
    if(idade==13){
      if (valorImc < 18.5)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 21.9)
         this.msg +=" com peso normal";
      else if(valorImc < 25.9)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    }  
    if(idade==14){
      if (valorImc < 19.2)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 22.7)
         this.msg +=" com peso normal";
      else if(valorImc < 26.9)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    } 
    if(idade==15){
      if (valorImc < 19.9)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 23.6)
         this.msg +=" com peso normal";
      else if(valorImc < 27.7)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    } 
    if(idade >= 16){
      if (valorImc < 20.7)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 26.4)
         this.msg +=" com peso normal";
      else if(valorImc < 27.8)
         this.msg +=" com Sobrepeso";
      else if(valorImc < 31.1)
         this.msg +=" com Obesidade";
      else 
         this.msg +=" com Obesidade morbida";
  
    } 

    break;
    case "f":
    if(idade<=6){

      if (valorImc < 14.3)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 16.1)
         this.msg +=" com peso normal";
      else if(valorImc < 17.4)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==7){
      if (valorImc < 14.9)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 17.1)
         this.msg +=" com peso normal";
      else if(valorImc < 18.9)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==8){
      if (valorImc < 15.6)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 18.1)
         this.msg +=" com peso normal";
      else if(valorImc < 20.3)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==9){
      if (valorImc < 16.3)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 19.1)
         this.msg +=" com peso normal";
      else if(valorImc < 21.7)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==10){
      if (valorImc < 17)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 20.1)
         this.msg +=" com peso normal";
      else if(valorImc < 23.2)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
    } 
    if(idade==11){
      if (valorImc < 17.6)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 21.1)
         this.msg +=" com peso normal";
      else if(valorImc < 24.5)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    } 
    if(idade==12){
      if (valorImc < 18.3)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 22.1)
         this.msg +=" com peso normal";
      else if(valorImc < 25.9)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    }
    if(idade==13){
      if (valorImc < 18.9)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 23)
         this.msg +=" com peso normal";
      else if(valorImc < 27.7)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    }  
    if(idade==14){
      if (valorImc < 19.3)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 23.8)
         this.msg +=" com peso normal";
      else if(valorImc < 27.9)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    } 
    if(idade==15){
      if (valorImc < 19.6)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 24.2)
         this.msg +=" com peso normal";
      else if(valorImc < 28.8)
         this.msg +=" com Sobrepeso";
      else 
         this.msg +=" com Obesidade";
  
    } 
    if(idade >= 16){
      if (valorImc < 19.1)
         this.msg +=" com peso abaixo do normal";
      else if(valorImc < 25.8)
         this.msg +=" com peso normal";
      else if(valorImc < 27.3)
         this.msg +=" com Sobrepeso";
      else if(valorImc < 32.3)
         this.msg +=" com Obesidade";
      else 
         this.msg +=" com Obesidade morbida";
  
    } 
    break;   
  }

  /*if(valorImc < 17)
      this.msg +=" muito abaixo do peso";
  else if(valorImc < 18.49)
      this.msg +=" baixo do peso";
  else if(valorImc < 24.5)
      this.msg +=" no peso normal";
  else 
      this.msg +=" acima do peso";
 */
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }

}
