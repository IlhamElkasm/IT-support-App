import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/Service/authentication.service';

@Component({
  selector: 'app-register-technicien',
  templateUrl: './register-technicien.component.html',
  styleUrls: ['./register-technicien.component.css']
})
export class RegisterTechnicienComponent implements OnInit {

  registerForm!: FormGroup


    constructor(
      private service : AuthenticationService,
      private fb: FormBuilder,
      private router: Router
    ){}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validator: this.passwordMathValidator})
  }


  passwordMathValidator(formGroup: FormGroup){
    const password = formGroup.get('password')?.value;
    const confirmPassword= formGroup.get('confirmPassword')?.value;

    if(password != confirmPassword){
      formGroup.get('confirmPassword')?.setErrors({passwordMisamtch : true});
    }else
    {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
  submitForm() {
    console.log(this.registerForm.value);
    this.service.registertechnicien(this.registerForm.value).subscribe(
      (response) => {
          console.log('Registration successful:', response);
          this.router.navigate(['/dashboard/user']);
      },
      (error) => {
          console.error('Registration failed:', error);
      }
    );
  }
  


}
