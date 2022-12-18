import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {

  public progress = 0.1;

  constructor() {
    // setInterval(() => {
    //   this.progress += 0.01;

    //   // Reset the progress bar when it reaches 100%
    //   // to continuously show the demo
    //   if (this.progress > 1) {
    //     setTimeout(() => {
    //       this.progress = 0;
    //     }, 1000);
    //   }
    // }, 50);
    
  }

  ngOnInit() {
  }

  progressAdd(){
    this.progress += 0.1;
  }

}
