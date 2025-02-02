import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registerForm: FormGroup;
  matching: Boolean = false;
  submitted = false;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group(
      {
      usernameRegister: ['', [Validators.required, Validators.minLength(5)]],
      emailRegister: ['', [Validators.required]],
      phoneRegister: ['', [Validators.required]],
      passRegister: ['', [Validators.required]],
      rePassRegister: ['', [Validators.required]]
    },
    { validators: this.passwordsMatchValidator.bind(this) }

  )}

  passwordsMatchValidator(form: AbstractControl): { mismatch: boolean } | null {
    const password = form.get('passRegister')?.value;
    const confirmPassword = form.get('rePassRegister')?.value;
  
    if (password && confirmPassword && password !== confirmPassword) {
      return { mismatch: true }; // Return error if passwords do not match
    }
    return null; // No error if passwords match
  }

  get formControls() {
    return this.registerForm.controls;
  }

  handleSubmit(){
    console.log(this.registerForm);

    this.submitted = true;
    if (this.registerForm.invalid) {
      this.markAllControlsTouched();
      return;
    }
  }

  markAllControlsTouched() {
    Object.keys(this.registerForm.controls).forEach(field => {
      const control = this.registerForm.get(field);
      control?.markAsTouched({ onlySelf: true });
    });
  }
  
}
