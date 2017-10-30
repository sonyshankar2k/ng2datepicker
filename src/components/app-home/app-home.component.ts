import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'app-home.component.html'
})
export class AppHomeComponent {
  date: Date;
  emotionsRedDates = [];
  emotionYellowDates = [];
  emotionGreenDates = [];

  constructor() {
    this.date = new Date();
    this.emotionsRedDates = ['10/15/2017'];
    this.emotionYellowDates = ['10/16/2017'];
    this.emotionGreenDates = ['10/5/2017'];
    /*this.emotionsRedDates = ['9/19/2017', '10/19/2017', '10/25/2017', '10/26/2017', '10/27/2017',
     '10/3/2017', '10/6/2017', '10/9/2017', '10/12/2017', '10/15/2017'];
     this.emotionYellowDates = ['9/29/2017', '7/19/2017', '8/25/2017', '7/26/2017', '6/27/2017',
     '7/3/2017', '9/6/2017', '9/9/2017', '10/1/2017', '10/16/2017'];
     this.emotionGreenDates = ['6/19/2017', '8/19/2017', '6/25/2017', '8/26/2017', '9/27/2017',
     '8/3/2017', '8/16/2017', '6/19/2017', '8/12/2017', '10/5/2017'];*/
  }
}
