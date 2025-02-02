import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formValues = {
    email: "",
    password: ""
  }
  handleSubmitForm(form: any){
    console.log(form);
    console.log(form.value);
  }

}
