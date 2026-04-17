import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';  
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-signin',
  imports: [ReactiveFormsModule,NgIf,RouterModule ], 
  templateUrl: './signin.html',
  styleUrl: './signin.css',
})
export class Signin {
  submitted = false;
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]), 

  
  }
  );
  constructor(private router: Router) {
    console.log('Signin form initialized:', this.registrationForm);
  }


  onSubmit(): void {
      this.submitted = true;  
    if (this.registrationForm.invalid) {
      this.registrationForm.markAllAsTouched();
      return;
    }else{
      console.log('Signin payload:', this.registrationForm.value);
      this.router.navigate(['/signup']);
      
      // https://localhost:4200/signup
    } 
    
  }

  
}
