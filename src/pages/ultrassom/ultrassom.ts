import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UltrassomPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ultrassom',
  templateUrl: 'ultrassom.html',
})
export class UltrassomPage {
public objeto_ultrassom={
  definicao:"A função do ultrassom é gerar ondas sonoras que nada mais são do que vibrações mecânicas a serem transformadas em energia atuante no tecido de forma contínua ou pulsada. Quando utilizado em seu modo contínuo a energia produzida pelo transdutor pode gerar um leve calor, o que em casos de patologias agudas, pode ser desconfortável, mesmo este tipo de tratamento sendo muito eficaz nestes casos. No modo pulsado são gerados pulsos de onda com intervalos rápidos que são suficientes para o resfriamento da circulação sanguínea da área tratada, onde os resultados são causados pelos efeitos não térmicos do equipamento. - O ultrassom de 1.0 MHz é usado em estruturas mais profundas (músculos, tendões, bursas), pois ele é pouco absorvido em estruturas superficiais e em tecido adiposo. Ao contrário, o de 3.0 MHz deverá ser usado em estruturas superficiais, pois a energia é absorvida nos tecidos que estiverem entre 1 e 2 cm abaixo da superfície da pele.",
  observacao:"Fonoforese ou sonoforese é um termo que descreve a habilidade do ultra-som em incrementar a penetração de agentes farmacológicos ativos através da pele. Trata-se de uma eficiente alternativa de transporte de substâncias além da utilização medicamentosa via oral, ou injeções intradérmicas.",
  quimicas:"Vibrações que estimulam o tecido a aumentar as reações e processos químicos locais. ",
  biologicas:"Promove o aumento da permeabilidade da membrana, o que acentua a transferência dos fluidos e nutrientes aos tecidos e as células. Essa propriedade é importante para que aconteça a Fonoforese.",
  mecanicos:"São os efeitos de micro massagens que aumentam o metabolismo celular, fluxo sanguíneo e o suprimento de oxigênio.",
  cavitacao:"Formação de bolhas que aumentam e diminuem de tamanho (cavitação estável) ou podem implodir a célula adiposa (cavitação instável).",
  termicos:"Juntamente com a micro massagem ocorre um aumento de temperatura local resultante da conversão de cinética em calor pelos tecidos. Este efeito produz um aumento da extensibilidade do colágeno, sendo recomendado para a terapêutica de patologias causadas pela contração de tendões, ligamentos e juntas capsulares, limitando determinados movimentos.",
  indicacao1:"Contraturas musculares;",
  indicacao2:"Espasmo muscular;",
  indicacao3:"Pontos gatilhos;",
  indicacao4:"Condições inflamatórias agudas;",
  indicacao5:"Condições inflamatórias crônicas;",
  indicacao6:"Pós-operatório imediato e tardio;",
  indicacao7:"Reabsorção de edema e equimoses após trauma;",
  indicacao8:"Dermatofuncional.",
  contraindicacao1:"Áreas com hipoestesia;",
  contraindicacao2:"Áreas com insuficiência vascular;",
  contraindicacao3:"Nível dos olhos;",
  contraindicacao4:"Útero gravídico;",
  contraindicacao5:"Área cardíaca;",
  contraindicacao6:"Tumores malignos;",
  contraindicacao7:"Tromboflebites;",
  contraindicacao8:"Inflamação séptica;",
  contraindicacao9:"Implante metálico; ",
  contraindicacao10:"Epífises abertas;",
  contraindicacao11:"Endopróteses;",
  contraindicacao12:"Feridas abertas;",
  contraindicacao13:"Testículos/gônadas.",
  pulsado:"Apresenta efeito mecânico dominante, pode ser necessário quando ambos os efeitos, térmicos e não térmicos (mecânicos), forem necessários, principalmente nas lesões crônicas e nas afecções.",
  continuo:"Apresenta efeito térmico dominante, como há uma intermitência na saída das ondas sonoras no transdutor, sendo considerado por isso como atérmico, o mesmo está indicado quando o calor produz algum tipo de desconforto, onde a afecção é aguda, ou nos processos de regeneração tecidual.",
  frequencia:"A frequência está diretamente relacionada com a absorção e atenuação do feixe. A profundidade de penetração está em relação inversa com a freqüência e podem oscilar de 1MHz a 3MHz. ",
  intensidade:"É a quantidade de energia que passa por unidade de área na unidade de tempo. O ultrassom opera a 0,75; 1,0; 1,5 ou 3 MHz.",
  termico:"0,5 a 3 w/cm² (*1,5w/cm²)",
  ntermico:"entre 0,1 a 0,5 w/cm²",
  aplicacao:"Deslizamento, bolsa d’água, subaquático. ",
  obs:"O tamanho apropriado da área a ser tratada deve estar relacionado ao tamanho da ERA, pois o ideal é que esta área seja de 2 a 3 vezes maior que o tamanho da área de radiação efetiva.",
  cuidados1:"É necessário o uso de gel para a aplicação do ultrassom;",
  cuidados2:"A higienização do cabeçote deve ser feita com água e sabão neutro;",
  cuidados3:"A aplicação deve ser feita em movimentos circulatórios;",
  cuidados4:"Não retirar o cabeçote do contato com a pele enquanto estiver ligado, pois pode danificar o equipamento.",
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UltrassomPage');
  }

}
