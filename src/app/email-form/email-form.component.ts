import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule,FormsModule, FormBuilder,Validator, FormGroup, Validators,FormControl } from '@angular/forms';
import emailjs from '@emailjs/browser'
@Component({
  selector: 'app-email-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './email-form.component.html',
  styleUrl: './email-form.component.css'
})
export class EmailFormComponent {
  FormData = new FormGroup({
    from_name:new FormControl(''),
    to_name:new FormControl('Admin'),
    from_email:new FormControl('', [Validators.required, Validators.email]),
    Subject:new FormControl('',[Validators.required]),
    message:new FormControl( '', [Validators.required]),
  })
  send(){
    emailjs.send("service_glc490q","template_n3gjqle",{
  from_name: "Ashish",
  to_name: "test",
  from_email: "ashish@gmail.com",
  subject: "First Message",
  message: "hello how are you",
  });
  }
}


