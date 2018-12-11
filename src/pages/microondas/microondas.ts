import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MicroondasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-microondas',
  templateUrl: 'microondas.html',
})
export class MicroondasPage {
public objeto_microondas={
aplicacao:"Examinar a pele e limpar a área de tratamento previamente a aplicação; Limpar os acessórios antes e depois de cada sessão de terapia; Dependendo do objetivo terapêutico, realizar aplicação estática pontual com o aplicador nas direções sobre local de tratamento. Paciente despir-se, retirar partes metálicas. Aparelhos eletrônicos sofrem interferências, Campo de alta freqüência se aquece mais em umidade (secar áreas úmidas), Partes do corpo com endoprótese não são recomendadas a tratamento com micro-ondas, Proibido uso de macas ou cadeiras metálicas, Paciente em posição tranquila e relaxada, Proteção região ocular e testículos.",
indicacao:"Analgesia, relaxamento muscular, ação trófica e anti inflamatória, reabsorção de hematomas, aumento de propriedades viscoelásticas de músculos, tendões e ligamentos. Para terapias biomecânicas, pontos-gatilhos, miofasciais, desordens das inserções tendíneas, ativação dos músculos e do tecido conjuntivo, e também para estimulação dos pontos acupuntura.",
precaucao:"Não irradiar tumores malignos, Portadores de marcapasso, Mulheres gestantes, Áreas próximas ao coração, lesões isquêmicas, hemorrágicas, alteração da sensibilidade e testículos. Coma, hipertermia e enfermo com transtorno mental. Alteração crescimento nas placas epifisárias, Local apropriado e mobiliário de madeira, Evitar emprego de outros equipamentos eletrônicos. Área do corpo deve estar seca.",
dosimetria:"Potência de emissão do aparelho, distância do refletor com a superfície e lei do co-seno, tempo de duração tratamento, obedecer à sensação térmica subjetiva do paciente.",
dose1:"Dose I: calor imperceptível: FASE AGUDA",
dose2:" Dose II: calor perceptível: FASE SUBAGUDA",
dose3:"Dose III: calor claro: FASE CRÔNICA",
dose4:" Dose IV: calor forte.",
frequencia:" 2450 MHz",

}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MicroondasPage');
  }

}
