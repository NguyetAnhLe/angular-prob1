import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
      tick = 0;
      hour = new Date().getHours();
      min = new Date().getMinutes();
      sec = new Date().getSeconds();
      time = "AM";
      interval;

      public ngOnInit() {
          this.interval = setInterval(() => {
            if(this.hour >= 12 && this.hour < 24){
              this.time = "PM";
            }

            if(this.hour >= 0 && this.hour < 12){
              this.time = "AM";
            }

            this.tick = this.tick + 1 ;
            this.sec = this.sec+1;

            if(this.sec == 60) {
              this.min = this.min + 1;
              this.sec = 0;
            }

            if(this.min == 60){
              this.hour = this.hour+1;
              this.min = 0;
            }

            if(this.hour == 24){
              this.hour = 0;
            }

            if(this.hour >= 12 && this.hour <0)
              this.time = "PM";

         }, 1000);

        }

     pause(){
        clearInterval(this.interval);
      }

    start(){
      this.interval = setInterval(() => {
        if(this.hour >= 12 && this.hour < 24){
          this.time = "PM";
        }

        if(this.hour >= 0 && this.hour < 12){
          this.time = "AM";
        }

        this.tick = this.tick + 1 ;
        this.sec = this.sec+1;

        if(this.sec == 60) {
          this.min = this.min + 1;
          this.sec = 0;
        }

        if(this.min == 60){
          this.hour = this.hour+1;
          this.min = 0;
        }

        if(this.hour == 24){
          this.hour = 0;
        }

        if(this.hour >= 12 && this.hour <0)
          this.time = "PM";

     }, 1000);
    }



  }
