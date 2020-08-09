import { Component, OnInit } from '@angular/core';  
import { ModalController} from '@ionic/angular';  
  
@Component({  
  selector: 'app-modal',  
  templateUrl: './Modal.Page.html',  
  styleUrls: ['./Modal.Page.scss'],  
})  
export class ModalPage implements OnInit {  
  
  constructor(public modalCtrl: ModalController) {}  
  logo1:any;
  logo:any;
  bodyimg:any;
  title:any;
  body:any;
  link:any;
 topStories: any;
  ngOnInit() {  
    this.logo1="../../assets/LastIcon.png"
    this.title="Enable NFC Reader";
    this.body="Open the NFC reader on your iphone to read the tag"
       this.logo="../../assets/color.png"
      this.bodyimg="../../assets/no_nfc.png"

  }  
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
} 