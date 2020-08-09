import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';  
import { ModalPage } from '../Modal/Modal.page';  
import { IframeModalPage } from '../IframeModal/IframeModal.page'; 

@Component({
  selector: 'app-main',
  templateUrl: 'mainScreen.component.html',
  styleUrls: ['mainScreen.component.scss'],
})
export class MainScreen {

   logo:any;
   bodyimg:any;
   title:any;
   body:any;
   link:any;
  topStories: any;


  constructor(public modalCtrl: ModalController) {  

 this.title="Enable NFC Reader";
 this.body="Open the NFC reader on your iphone to read the tag"
    this.logo="../../assets/color.png"
   this.bodyimg="../../assets/no_nfc.png"
 
  }
 
  async showModal() {  
    const modal = await this.modalCtrl.create({  
      component: ModalPage  
    });  
    return await modal.present();  
  }  

  async showIframeModal() {  
    const modal = await this.modalCtrl.create({  
      component: IframeModalPage  
    });  
    return await modal.present();  
  } 

}