import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MainScreen } from './mainScreen.component';

import { MainScreenRoutingModule } from './mainscreeen-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MainScreenRoutingModule
  ],
  declarations: [MainScreen]
})
export class HomePageModule {}
