import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FornodebierPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fornodebier',
  templateUrl: 'fornodebier.html',
})
export class FornodebierPage {
  curse={

  };
public objeto_fornodebier={
   modo_de_uso: "Botões de ligue e desligue ficam nas laterais, precisa ser ligado a tomada. O paciente precisa se encontrar deitado na maca, despido ou com trajes de banho.",
   parametros: "Temperatura: de 40 a 45 graus ou a temperatura ideal sem provocar sudorese.",
   tempoDeAplicacao:"De 20 a 30 minutos",
   frequencia:"De 2 a 3 vezes na semana",
   obs:"sempre se utilizar uma toalha ou espécie de coberta tampando todas as saídas de calor.",
   indicacao1:"Processos de contratura muscular, dores musculares e/ou articulares nas costas e nos membros inferiores;",
   indicacao2:"Pré cinesioterapia;",
   indicacao3:"Aquecimento e relaxamento;",
   indicacao4:"Dores crônicas.",
   contraindicacao1:"Infecções;",
   contraindicacao2:"Inflamações ou eczemas localizados nas áreas de pele a serem tratadas;",
   contraindicacao3:"Queimaduras;",
   contraindicacao4:"Instabilidades circulatória ou respiratória graves;",
   contraindicacao5:"Hemorragias;",
   contraindicacao6:"Neoplasias;",
   contraindicacao7:"Gestante (lombar);",
   contraindicacao8:"Estados febris.",
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FornodebierPage');
  }

}
