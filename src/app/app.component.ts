import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmailFormComponent } from "./email-form/email-form.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, EmailFormComponent]
})
export class AppComponent {
  title = 'email-app';
}
