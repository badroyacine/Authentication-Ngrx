import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent, /*canActivate: [VisitorGuard] */},
  { path: 'register', component:  RegisterComponent, /*canActivate: [VisitorGuard] */},
  // { path: 'forgot-password', component:  ForgotPasswordComponent, canActivate: [VisitorGuard] },
  // { path: '', component:  HomeComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], exports: [
    RouterModule,
  ],
  providers: [],
  declarations: []
})

export class AuthRoutingModule { }