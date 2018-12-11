import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InfravermelhoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-infravermelho',
  templateUrl: 'infravermelho.html',
})
export class InfravermelhoPage {
public objeto_infravermelho={
definicao:"É uma radiação que age numa frequência, além da capacidade humana de visão, ou seja, é invisível aos nossos olhos. Ela é liberada de todos os corpos que soltam calor e tem esse nome por estar depois da cor vermelha no espectro de cores.",
manuseio:"Modalidade de energia eletromagnética gerando calor superficial. A radiação precisa ser absorvida para se conseguir efeitos terapêuticos. A penetração depende da intensidade da fonte, do comprimento de onda, do ângulo de incidência e coeficiente de absorção dos tecidos.",
indicacao1:"Alívio da dor;",
indicacao2:"Diminuição da rigidez articular;",
indicacao3:"Aceleração cicatrização;",
indicacao4:"Diminuição do edema crônico;",
indicacao5:"Lesões de pele;",
contraindicacao1:"Alteração de sensibilidade;",
contraindicacao2:"Doença cardiovascular avançada;",
contraindicacao3:"Circulação periférica comprometida;",
contraindicacao4:"Tumores malignos;",
contraindicacao5:"Redução do nível de consciência;",
contraindicacao6:"Febre;",
contraindicacao7:"Dermatite ou eczema;",
contraindicacao8:"Região dos Testículos.",
riscos1:"Queimaduras;",
riscos2:"Sistema respiratório de bebês;",
riscos3:"Idosos;",
riscos4:"Dano óptico.",
intensidade:"De acordo com a sensibilidade do paciente. A intensidade pode ser alterada afastando ou aproximando o gerador da pele do paciente.",
lei:"✓Lei do quadrado inverso",
TAplicacao:"entre 10 a 20 minutos. Dependerá do tamanho da área, vascularização, cronicidade e natureza da lesão;",
DLampada:"varia com a potência da lâmpada (entre 50 e 75cm).",
PMedia:" 0,8mm.",
efeitoBiologico1:"O IV não dá origem a efeitos fotoquímicos;",
efeitoBiologico2:"Aquece os tecidos através da vibração molecular e produção de calor. Portanto os efeitos biológicos seguem o princípio físico do aquecimento dos tecidos e seus efeitos terapêuticos.",

}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InfravermelhoPage');
  }

}
