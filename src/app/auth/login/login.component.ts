import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { login } from '../auth.actions';
import { tap } from 'rxjs/internal/operators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  showErrorMessage: boolean = false;
  errorMessage: string;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get username(){ return this.loginForm.controls.username }
  get password(){ return this.loginForm.controls.password }

  onLogin(){
    if(this.loginForm.invalid){
      this.username.markAsTouched();
      this.password.markAsTouched();
      return;
    }

    const credentials = {
      email: this.username.value,
      password: this.password.value,
    }

    this.authService.login(credentials).pipe(
      tap((response: any) => {
        console.log('login back-end reponse', response);
        let user = response.user;
        user.token = response.token;
        this.store.dispatch(login({ user }));
      })
    ).subscribe(
      () => {},
      error => {
        if(error.status === 401){
          this.showErrorMessage = true;
          this.errorMessage = 'Login / Mot de passe incorrect';
        }
      }
    )

  }
}
