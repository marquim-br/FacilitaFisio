import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {AngularFireModule} from 'angularfire2';

import { AparelhosPageModule } from '../pages/aparelhos/aparelhos.module';
import { FornodebierPageModule } from '../pages/fornodebier/fornodebier.module';
import { InfravermelhoPageModule } from '../pages/infravermelho/infravermelho.module';
import { LaserPageModule } from '../pages/laser/laser.module';
import { MicroondasPageModule } from '../pages/microondas/microondas.module';
import { OndascurtasPageModule } from '../pages/ondascurtas/ondascurtas.module';
import { ParafinaPageModule } from '../pages/parafina/parafina.module';
import { UltrassomPageModule } from '../pages/ultrassom/ultrassom.module';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
    AparelhosPageModule,
    FornodebierPageModule,
    InfravermelhoPageModule,
    LaserPageModule,
    MicroondasPageModule,
    OndascurtasPageModule,
    ParafinaPageModule,
    UltrassomPageModule
   
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})

export class AppModule {}
