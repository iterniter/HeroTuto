import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'password',
  template: `  
        <h3>Entrez le password</h3>
        <input type="text" [(ngModel)] = "passwordUser" />
        <button (click)="validerPassword()">Valider</button>
        `,
 inputs: ['showEmit']
  
})
export class PasswordComponent  { 
     passwordUser = '';
     password= '123456';
     message= 'Le mot de passe est correct';
     show = true;

     @Output() notify: EventEmitter<string> = new EventEmitter<string>();

// There is a login page preventing unauthorized access. Only a password is required. The password is 123456.
     validerPassword(){
    if (this.passwordUser === this.password){
       console.log('Boutton valider appuié');
       this.notify.emit(this.message);
    }
}
 }
