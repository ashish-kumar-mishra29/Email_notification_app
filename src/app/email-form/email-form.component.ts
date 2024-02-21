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

  signUpUsers: any[] = [];

  FormData = new FormGroup({
    to_name:new FormControl('', [Validators.required]),
    to_email:new FormControl('', [Validators.required, Validators.email]),
    password:new FormControl('', [Validators.required]),
    number:new FormControl('', [Validators.required]),
    
  })
  async send(){
      // Retrieve existing data from local storage
  const existingUsers = JSON.parse(localStorage.getItem('signUpUser') || '[]');

  // Push the new user data
  existingUsers.push(this.FormData.value);

  // Store the updated array back into local storage
  localStorage.setItem('signUpUser', JSON.stringify(existingUsers));

  // Reset the form
  this.FormData.reset();
    // emailjs.init('fGa105Uwf8SbctAxG')
    // let response = await emailjs.send("service_glc490q","template_44di156",{
    //   to_name: this.FormData.value.to_name,
    //   to_email: this.FormData.value.to_email,
    //   });
     
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


  
