import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
          <div>{{passwordValue}}</div>
          <div *ngIf="show">
   <password  (notify)= "onNotifyClicked($event)">{{passwordValue}} </password>
          </div>
          <div *ngIf="!show">
           <user></user>
           </div>
         
          `,
 
})
export class AppComponent  {

   passwordValue: string = 'Test Mot de Pass ';
   show = true;

   onNotifyClicked(passwordValue:string): void {
    this.passwordValue = passwordValue;
    this.show = false;
   }
}

