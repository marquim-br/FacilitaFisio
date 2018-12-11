import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule } from 'angularfire2/database';


/**
 * Generated class for the OndascurtasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ondascurtas',
  templateUrl: 'ondascurtas.html',
})
export class OndascurtasPage {
public objeto_ondascurtas={
  definicao:"Modalidade terapêutica que utiliza radiações do espectro eletromagnético na ordem de MHz, alta frequência; são radiações não ionizantes (27,12 MHz). É uma corrente senoidal de elevada frequência, conserva os efeitos de conversão de calor.",
  termico1:"Antiespasmódico;",
  termico2:"Analgésico;",
  termico3:"Diminui rigidez articular;",
  termico4:"Aumento extensibilidade tecido conectivo;",
  termico5:"Elevação do umbral de dor.",
  indicacao1:"Osteoartrite;",
  indicacao2:"Poliartrite crônica articulações quadril e ombro;",
  indicacao3:"Torções, luxações, contusões;",
  indicacao4:"Fraturas;",
  indicacao5:"Contraturas;",
  indicacao6:"Lombalgia;",
  indicacao7:"Mialgia;",
  indicacao8:"Fibromialgia;",
  indicacao9:"Neuralgia/neurite.",
  contraindicaco1:"Tumores malignos;",
  contraindicaco2:"Marca-passos;",
  contraindicaco3:"Gravidez;",
  contraindicaco4:"Região precordial;",
  contraindicaco5:"Hemorragia;",
  contraindicaco6:"Febre;",
  contraindicaco7:"Área isquêmica;",
  contraindicaco8:"Osteossíntese metálica;",
  contraindicaco9:"Hiposensibilidade;",
  contraindicaco10:"Olhos;",
  contraindicaco11:"Testículos;",
  contraindicaco12:"Áreas com órgãos de grande circulação.",
  obs1:"Proibido uso de objetos metálicos;",
  obs2:"Uso de toalhas e roupas úmidas ou sintéticas;",
  obs3:"Posição confortável paciente;",
  obs4:"Cabos dos eletrodos;",
  obs5:"Dominar o aparelho e sua técnica;",
  obs6:"Não abandone seu paciente durante o tratamento.",
  perigo1:"Queimadura;",
  perigo2:"Excesso de corrente;",
  perigo3:"Contato entre cabos, deles com a pele ou sobre roupa sintética;",
  perigo4:"Hipersensibilidade da pele;",
  perigo5:"Alteração fluxo sanguíneo;",
  perigo6:"Choque elétrico;",
  perigo7:"Interferência em outros aparelhos eletrônicos e do próprio paciente.",
  longitudinal:"Eletrodo aplicado a cada extremidade do membro",
  transversal:"Eletrodos aplicados a cada lado do membro",
  coplanar:"Eletrodos no mesmo plano do membro a ser tratado.",
  parametros:"Sensação térmica agradável",
  dosimetria1:"Tipo, tamanho e posição dos eletrodos;",
  dosimetria2:"Distância eletrodo-pele;",
  dosimetria3:"Vascularização da região;",
  dosimetria4:"Existência de relevos anatômicos;",
  dosimetria5:"Termossensibilidade do paciente.",
  processo1:"Frequência: 20-50 Hz",
  processo2:"Potência média baixa = menor que 20 W",
  processo3:"Dose submitis",
  subaguda1:"Frequência: acima de 80 Hz",
  subaguda2:"Potência média acima de 20 W",
  subaguda3:"Dose mitis",
  continuo:" Nesse modo as moléculas dipolares do tecido entram em movimentação oscilatória contínua, gerando energia que é transformada em calor.",
  pulsado:"Consiste em aplicar uma séria de trens de pulsos de determinada freqüência e duração.",
  aguda:"Deve-se 5 a 10 minutos e 15 minutos, respectivamente.",
  cronica:"De 15 a 20 minutos.",
}

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OndascurtasPage');
  }

}
