import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LaserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-laser',
  templateUrl: 'laser.html',
})
export class LaserPage {
public objeto_laser={
  definicao:"O termo laser é um acrônimo para Light Amplification by Stimulated Emission of Radiation (amplificação da luz através da emissão estimulada de radiação). Ele trata-se de uma emissão de luz coerente, monocromática, com grande concentração de energia, capaz de provocar alterações físicas e biológicas.",
  Monocromaticidade:"A luz produzida por um laser é de cor única, sendo a maior parte da radiação emitida pelo dispositivo de tratamento agrupado em torno de um único comprimento de onda com uma largura de banda muito estreita.",
  Colimacao:"Na luz laser, os raio de luz ou fótons produzidos pelo aparelhos laser são para todos os propósitos práticos paralelos, quase sem divergência da radiação emitida com a distância. Essa propriedade mantém a potência óptica do aparelho agrupada em uma área relativamente pequena durante distâncias consideráveis e, em certo grau, mesmo quando passando através dos tecidos.",
  Coerencia:"A luz emitida pelos aparelhos laser também apresenta a mesma fase, de modo que junto com as duas propriedades únicas já descritas, as depressões e picos das ondas de luz emitidas se combinam perfeitamente no tempo (coerência temporal) e no espaço (coerência espacial).",
  interacao:"A luz proveniente de um aparelho de laserterapia ou de luz monocromática pode interagir com o tecido irradiado de duas maneiras: ",
  dispersao:" É essencialmente uma mudança na direção de propagação da luz à medida que ela passa através dos tecidos, e é devida à variabilidade no índice de refração dos componentes do tecido com respeito à água. Tal dispersão causará um alargamento do feixe à medida que esse passar através do tecido irradiado e resulta na perda rápida de coerência.",
  absorcao:"Um cromóforo é uma biomolécula que é capaz, através de sua configuração eletrônica ou atômica, de ser excitada pelo(s) fóton(s) incidente (s). A luz nos comprimentos de onda tipicamente empregados em LILT é prontamente absorvida por uma variedade de biomoléculas, incluindo melanina e hemoglobina; em consequência, a profundidade de penetração associada com os aparelhos terapêuticos se limita a não mais do que alguns milímetros. Deve-se observar que, como a absorção depende do comprimento de onda da luz incidente, a profundidade de penetração é similarmente dependente do comprimento de onda.",
  modos:"Desses dois modos de interação, a absorção pode ser considerada como a mais importante no que diz respeito à base fotobiológica da laserterapia, já que sem a absorção não seriam possíveis efeitos fotobiológicos nem clínicos.",
  efeitos:"Fotoquímico, fotoelétrico e bioenergético.",
  efeitosindireto:"Estimulação da microcirculação, aumento do trofismo local e reparação.",
  tipo1:"I e II: Baixa potência e não apresenta efeito terapêutico.",
  tipo2:"III A e III B: Baixa a média potência e apresenta efeito terapêutico porém não tem efeito térmico.",
  tipo3:"IV: Alta potência e apresenta efeitos térmicos ablativos ( temperatura acima de 43° no tecido).",
  indicacao:" A laserterapia encontra uma variedade de aplicações na prática clínica que podem ser resumidas em termos práticos nos seguintes itens:",
  indicacao1:"estimulação da regeneração da ferida em vários tipos de feridas abertas",
  indicacao2:"tratamento de várias condições artríticas",
  indicacao3:"tratamento de lesões de tecidos moles ",
  indicacao4:"alívio da dor.",
  contraindicacao1:"Região dos olhos;",
  contraindicacao2:"Útero Gravídico;",
  contraindicacao3:"Glândula Tireóide;",
  contraindicacao4:"Irritações Cutâneas, etc.",
  terapeuticos1:"Analgésico;",
  terapeuticos2:"Anti-inflamatório;",
  terapeuticos3:"Circulatório;",
  terapeuticos4:"Regenerativo.",
  dosagem:"Além do comprimento de onda, que é determinado pelo meio ativo usado no aparelho, os outros parâmetros de irradiação que parecem ser importantes nos tratamentos com laser, são os seguintes: Potência de Saída, Irradiância, Energia, Densidade de energia, Frequência de repetição de pulso.",
  obs:"Efeito inibitório a dosagem é acima de 8J/cm²; Efeito Estimula tório a dosagem é abaixo de 8J/cm².",
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LaserPage');
  }

}
