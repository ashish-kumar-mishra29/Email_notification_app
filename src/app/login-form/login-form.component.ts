import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {
  //signupUsers: any[] = [];
  data = new FormGroup({
    to_email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),   
  });
  send(){
  }
  onLogIn(){
    debugger
    
    const localUser = localStorage.getItem('signUpUser');
    if(localUser != null) {
      const users = JSON.parse(localUser);
      const isUserPresent = users.find((m:any)=>{
        m.to_email == this.data.value.to_email && m.password == this.data.value.password
      })
      if(isUserPresent != undefined){
        alert('User found')
      }else{
        alert('User not found')
      }
    }
    
  

  }  
}

