import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.page.html',
  styleUrls: ['./accordion.page.scss'],
})
export class AccordionPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("ngoninita")
  }
  ionViewWillEnter(){
    console.log("ionViewWillEntera")
  }
  ionViewDidEnter(){
    console.log("ionViewDidEntera")
  }
  ionViewWillLeave(){
    console.log("ionViewWillLeavea")
  }
  ionViewDidLeave(){
    console.log("ionViewDidLeaveaa")
  }


}
