import { Component, OnInit, ElementRef, NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.page.html',
  styleUrls: ['./docente.page.scss'],
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule, ReactiveFormsModule, RouterModule]
})
export class DocentePage {
  loginFormAlumno! : FormGroup;
  isDisabled: boolean = true;
  var_username: String="";
  var_newpassword: String="";

  constructor(private fb:FormBuilder, private router:Router) { 
this.loginFormAlumno=this.fb.group({ 

  username:[
    '',
    [
      Validators.required,      
      Validators.minLength(10),
      Validators.maxLength(50),
      Validators.pattern('^[a-zA-Z0-9]*$')
    ]
  ],

  password:[
    '',
    [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(12),
      Validators.pattern('^[a-zA-Z0-9]*$')
    ]

  ]
});

  }

  onLogin() {
    if(this.loginFormAlumno.valid)
      {
        const username =this.loginFormAlumno.get('username')?.value;
        const password =this.loginFormAlumno.get('password')?.value;

        this.router.navigate( ['formulario-profesor'], { queryParams:{username,password} });
      } if(this.loginFormAlumno.invalid) {         

          this.changeButton();
          const username =this.loginFormAlumno.get('username')?.value;
      } else {
          console.error('No valido')
      }
  }

  changeButton() {
    this.isDisabled = !this.isDisabled;
  }

  toClick() {
    const username =this.loginFormAlumno.get('username')?.value;
    this.router.navigate( ['recovery-docente'], { queryParams:{username} });
  }

  ngOnInit() {
    const navigation =this.router.getCurrentNavigation();

    if(navigation?.extras.queryParams) {
      this.var_username=navigation.extras.queryParams['username'],
      this.var_newpassword=navigation.extras.queryParams['newpassword']
      
    }
  }
  
}