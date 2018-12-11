import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AparelhosPage } from './aparelhos';

@NgModule({
  declarations: [
    AparelhosPage,
  ],
  imports: [
    IonicPageModule.forChild(AparelhosPage),
  ],
})
export class AparelhosPageModule {}
