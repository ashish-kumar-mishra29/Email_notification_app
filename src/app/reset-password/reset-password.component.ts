import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css',
})
export class ResetPasswordComponent {
  constructor(private http: HttpClient) {}
  data = new FormGroup({
    to_email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    Cpassword: new FormControl('', [Validators.required]),
  });
  send() {
    // Passwords match, proceed with registration
    this.http
      .post<any>(
        'https://localhost:7229/api/Registration/reset_password',
        this.data.value
      )
      .subscribe(
        (response) => {
          console.log('Registration successful:', response);
          // Optionally, you can show a success message or redirect the user to another page
        },
        (error) => {
          console.error('Registration failed:', error);
          // Handle registration failure, show error message, etc.
        }
      );

    alert('Successfully Registered');
  }

  onLogIn() {
    setTimeout(function () {
      // Redirect to the login page
      window.location.href = '/';
    }, 3000);
  }
}
