import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent }  from './compnents/user.component';
import { PasswordComponent }  from './compnents/password.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, UserComponent, PasswordComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
