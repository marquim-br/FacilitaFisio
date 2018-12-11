import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MicroondasPage} from '../microondas/microondas';
import { FornodebierPage } from '../fornodebier/fornodebier';
import { InfravermelhoPage } from '../infravermelho/infravermelho';
import { LaserPage } from '../laser/laser';
import { OndascurtasPage } from '../ondascurtas/ondascurtas';
import { ParafinaPage } from '../parafina/parafina';
import { UltrassomPage } from '../ultrassom/ultrassom';


/**
 * Generated class for the AparelhosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aparelhos',
  templateUrl: 'aparelhos.html',
})
export class AparelhosPage {
  [x: string]: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
  ) {
    
  } 

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AparelhosPage');
  }
  openPage1(){
    this.navCtrl.push(MicroondasPage);
  }
  openPage2(){
    this.navCtrl.push(FornodebierPage);
  }
  openPage3(){
    this.navCtrl.push(InfravermelhoPage);
  }
  openPage4(){
    this.navCtrl.push(LaserPage);
  }
  openPage5(){
    this.navCtrl.push(OndascurtasPage);
  }
  openPage6(){
    this.navCtrl.push(ParafinaPage);
  }
  openPage7(){
    this.navCtrl.push(UltrassomPage);
  }
  add(){
    this.navCtrl.push(FornodebierPage);
  }
}
