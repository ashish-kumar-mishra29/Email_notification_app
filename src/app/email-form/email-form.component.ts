import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule, FormBuilder,Validator, FormGroup, Validators,FormControl } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import emailjs from '@emailjs/browser'
@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule,RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {
  FormData = new FormGroup({
    to_name:new FormControl('', [Validators.required]),
    to_email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    number:new FormControl('', [Validators.required]),
    
  })
  async send(){
    emailjs.init('fGa105Uwf8SbctAxG')
    let response = await emailjs.send("service_glc490q","template_44di156",{
      to_name: this.FormData.value.to_name,
      to_email: this.FormData.value.to_email,
      });
  alert('Successfully registered');
  this.FormData.reset();
  }
  submit(){
    setTimeout(function() {
      // Redirect to the login page
      window.location.href = '/login';
  }, 3000);
  }
}


  
