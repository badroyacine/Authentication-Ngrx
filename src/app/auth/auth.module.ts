import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  declarations: [
  AuthComponent,
  LoginComponent,
  RegisterComponent,
  HomeComponent],
  providers: [],
  entryComponents: [],
  exports: [],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
// export class AuthModule { }
export class AuthModule {
  static forRoot(): ModuleWithProviders {
      return {
          ngModule: AuthModule,
          providers: [
            // AuthService,
            //   AuthGuard
          ]
      }
  }
}