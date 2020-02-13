import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { VisitorGuard } from './services/visitor-guard.service';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component:  LoginComponent, canActivate: [VisitorGuard]},
  { path: 'register', component:  RegisterComponent, canActivate: [VisitorGuard]},
  // { path: 'forgot-password', component:  ForgotPasswordComponent, canActivate: [VisitorGuard] },
  { path: 'home', component:  HomeComponent, canActivate: [AuthGuard] }
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