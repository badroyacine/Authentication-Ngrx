import { CUSTOM_ELEMENTS_SCHEMA, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import * as fromAuth from './reducers';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuth.authFeatureKey, fromAuth.reducer),
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
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