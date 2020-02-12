import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../actions.types';
// import { environment } from '../../environments/environment';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: any,
  authErrorMessage: string
}

export const initialAuthState: AuthState = {
  user: undefined,
  authErrorMessage: undefined
}

const authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action) =>{
    return { 
      ...state,
      user: action.user 
    }
  }),
  on(AuthActions.loadUser, (state, action) =>{
    return { 
      ...state,
      user: action.user 
    }
  }),
  on(AuthActions.logout, (state, action) =>{
    return { 
      ...state,
      user: undefined
    }
  })
);


export function reducer(state: AuthState | undefined, action) {
  return authReducer(state, action);
}

// export const reducers: ActionReducerMap<State> = {

// };


// export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
