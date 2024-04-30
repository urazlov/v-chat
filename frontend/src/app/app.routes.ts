import { Route } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { MainComponent } from './modules/main/main.component';
import { canActivate } from './guards/auth.guard';
import { SignInComponent } from './modules/sign-in/sign-in.component';

export const appRoutes: Route[] = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', component: MainComponent, canActivate: [canActivate] },
];
