import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ParafinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-parafina',
  templateUrl: 'parafina.html',
})
export class ParafinaPage {
public objeto_parafina={
  definicao:"A parafina é uma substância branca, sólida, em forma de cera, obtida da destilação do petróleo. Para que possa ser considerada como um recurso terapêutico, ela deverá ser aquecida até alcançar seu ponto de fusão, entre 50 e 52°C. É uma modalidade de termoterapia superficial.",
  tecnicas:"Os aparelhos de uso profissional para o aquecimento da parafina são recipientes providos de termostato para controlar a temperatura, ajustando assim seu ponto de fusão. No interior do recipiente se coloca a parafina no estado sólido,na quantidade adequada ao tamanho e à capacidade do recipiente. Será agregada a parafina, uma parte de óleo mineral (vaselina e glicerina) para cada dez partes da parafina, com função de diminuir o ponto de fusão da parafina para 45°C, diminuindo, assim, o risco de uma queimadura no paciente. Esta união de óleo mineral permite também maior maleabilidade da parafina e acelera seu derretimento.",
  usada:"Usada para o aquecimento de estruturas superficiais, na qual o calor é transferido para os tecidos por condução. Como a condutividade e o calor específico da parafina são baixos, ela pode ser aplicada diretamente sobre a pele a temperaturas que normalmente não são toleráveis com a água.",
  indicacao1:"reduzir a dor,",
  indicacao2:"relaxamento muscular",
  indicacao3:"melhorar a circulação local.",
  contraindicacao1:"circulação agudas,",
  contraindicacao2:"infecções, ",
  contraindicacao3:"insuficiência vascular,",
  contraindicacao4:"áreas com alterações de sensibilidade",
  contraindicacao5:"áreas potencialmente hemorrágicas.",
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParafinaPage');
  }

}

