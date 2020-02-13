import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AppState } from 'src/app/reducers';
import { Store } from '@ngrx/store';
import { signup } from '../auth.actions';
import { tap } from 'rxjs/internal/operators';
import { passwordValidation } from '../validators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  showErrorMessage: boolean = false;
  errorMessage: string;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
			password: ['', [Validators.required, Validators.minLength(8)]],
			passwordConfirm: ['', [Validators.required, passwordValidation]],
    });
    
    this.registerForm.controls.password.valueChanges.subscribe(
      () => this.registerForm.controls.passwordConfirm.updateValueAndValidity()
    )
  }

  get password(){ return this.registerForm.controls.password }
  get email(){ return this.registerForm.controls.email }
  get username(){ return this.registerForm.controls.username }
  get passwordConfirm(){ return this.registerForm.controls.passwordConfirm }

  onRegister(){

    if(this.registerForm.invalid){
      this.password.markAsTouched();
      this.passwordConfirm.markAsTouched();
      this.email.markAsTouched();
      this.username.markAsTouched();
      return;
    }
    // this.loading = true;

    const userInofrmations = {
      password: this.password.value,
      email: this.email.value,
      username: this.username.value,
      passwordConfirm: this.passwordConfirm.value,
    }

    console.log(userInofrmations);

    this.authService.signup(userInofrmations).pipe(
      tap(response => {
        console.log('signup back-end reponse', response);
        let user = response.user;
        user.token = response.token;
        // this.router.navigate(['/timeline']);
        this.store.dispatch(signup({user}));
      })
    ).subscribe(
      () => {},
      error => {
        if(error.status === 500){
          this.showErrorMessage = true;
          this.errorMessage = 'Error server occured!';
        }
      }
    )

  }

}
