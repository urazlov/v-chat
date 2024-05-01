import { Component, NgZone, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormErrorStateMatcher } from '../../validators/validators';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserLogin } from '../../interfaces/user.interface';
import { tap } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    RouterModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
})
export class LoginComponent {
  private readonly authService = inject(AuthService);
  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);

  readonly isLoggedIn$ = this.authService.isLoggedIn();

  readonly form: FormGroup<{
    login: FormControl<string | null>;
    password: FormControl<string | null>;
  }> = new FormGroup({
    login: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  readonly errorState = new FormErrorStateMatcher();

  get loginControl(): FormControl {
    return this.form.controls.login;
  }
  get passwordControl(): FormControl {
    return this.form.controls.password;
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const userData = this.form.value as UserLogin;

    this.authService
      .login(userData)
      .pipe(
        tap((data) => localStorage.setItem('accessToken', data.accessToken))
      )
      .subscribe(() =>
        this.zone.run(() => {
          this.router.navigateByUrl('/');
        })
      );
  }
}
