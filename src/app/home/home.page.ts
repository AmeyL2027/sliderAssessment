import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

   logo:any;
  
  topStories: any;

  constructor(){

    this.topStories = [
      {title: "Educate", body: "Assist at the point of activity with process knowledge and product information", picture: "../../assets/educate.png"},
      {title: "Assess",  body: "Reference and training checklist provide real-time assesments and employee support", picture: "../../assets/assess.png"},
      {title: "Empower",  body: "Enable your workforce to excel at their responsibilities and provide exceptional customer service", picture: "../../assets/empower.png"},
    ]
    this.logo="../../assets/white.png"
  }
  test(){
    console.log("code to other page");
  }

}