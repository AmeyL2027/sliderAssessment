import { Component, OnInit } from '@angular/core';  
import { ModalController} from '@ionic/angular';  
  
@Component({  
  selector: 'app-Iframemodal',  
  templateUrl: './IframeModal.Page.html',  
  styleUrls: ['./IframeModal.Page.scss'],  
})  
export class IframeModalPage implements OnInit {  
  
  constructor(public modalCtrl: ModalController) {}  
  
  ngOnInit() {  
  }  
  dismiss() {  
    this.modalCtrl.dismiss();  
  }  
} 