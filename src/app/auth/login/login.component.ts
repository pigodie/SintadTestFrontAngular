import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Credentials } from '../shared/auth.model';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {
  hide = true;
  form: FormGroup;
  durationInSeconds = 3;
  credentials: Credentials = {
    user: '',
    pass: ''
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.form = this.fb.group({
      user: [, [Validators.required]],
      pass: [, [Validators.required, Validators.minLength(4)]],
    })
  }

  ngOnInit(): void {
  }

 login(){
  this.credentials = {
    user: this.form.value.user,
    pass: this.form.value.pass
  }
  this.loginService.login(this.credentials).subscribe(usuario=>{
    console.log(usuario.token);
    if(!usuario.token){
      this.openSnackBar('Credenciales Incorrectas','ok');
      return;

    }
    localStorage.setItem('token', usuario.token);
    this.router.navigate(['/admin/entidad'])
  })

 }
 openSnackBar(message: string, action: string) {
  this.snackBar.open(message, action, {duration: this.durationInSeconds * 1000,
  });
}


}
