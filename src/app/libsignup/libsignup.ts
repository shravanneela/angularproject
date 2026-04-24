import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';   
import { Router, RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-libsignup',
  templateUrl: './libsignup.html',
  imports: [ReactiveFormsModule,NgIf,RouterModule],
  styleUrls: ['./libsignup.css'],
})
export class Libsignup {
  submitted = false;
  registrationForm = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirmPassword: new FormControl('', Validators.required),
    agreeterms: new FormControl(false, Validators.requiredTrue),
  });

   passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
   return password === confirmPassword ? null : { mismatch: true };  
 } 

  constructor(private router: Router) {
    console.log('Libsignup form initialized:', this.registrationForm);
  }

  onSubmit(): void {
    this.submitted = true;  
   if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }else{
      console.log('Libsignup payload:', this.registrationForm.value);
      this.router.navigate(['/libhomepage']);
      
      // https://localhost:4200/homepage
    }
  }
}