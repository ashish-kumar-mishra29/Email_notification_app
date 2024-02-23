import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmailFormComponent } from './email-form/email-form.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule,FormsModule, FormBuilder,Validator, FormGroup, Validators,FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResetPasswordComponent } from './reset-password/reset-password.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailFormComponent,
    LoginFormComponent,
    ResetPasswordComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
 
})
export class AppModule { }
