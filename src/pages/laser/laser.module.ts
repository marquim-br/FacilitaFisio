import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaserPage } from './laser';

@NgModule({
  declarations: [
    LaserPage,
  ],
  imports: [
    IonicPageModule.forChild(LaserPage),
  ],
})
export class LaserPageModule {}
