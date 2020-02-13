import { createAction, props } from '@ngrx/store';


export const login = createAction(
  "[Login Page] User Login",
  props<{ user: any }>()
);

export const signup = createAction(
  "[SignUp Page] User Signup",
  props<{ user: any }>()
);

export const logout = createAction(
  "[Menu] User Logout"
);

export const loadUser = createAction(
  "[App Component] Load User",
  props<{ user: any }>()
);