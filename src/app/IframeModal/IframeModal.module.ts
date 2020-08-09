import { NgModule } from '@angular/core';  
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';  
import { Routes, RouterModule } from '@angular/router';  
  
import { IonicModule } from '@ionic/angular';  
  
import { IframeModalPage } from './IframeModal.page';  
  
const routes: Routes = [  
  {  
    path: '',  
    component: IframeModalPage  
  }  
];  
  
@NgModule({  
  imports: [  
    CommonModule,  
    FormsModule,  
    IonicModule,  
    RouterModule.forChild(routes)  
  ],  
  declarations: [IframeModalPage]  
})  
export class IframeModalPageModule {}  