import { Component, inject } from '@angular/core';
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
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sign-in',
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
  templateUrl: './sign-in.component.html',
  styleUrl: '../login/login.component.less',
})
export class SignInComponent {
  authService = inject(AuthService);

  readonly isLoggedIn$ = this.authService.isLoggedIn();

  readonly form: FormGroup<{
    email: FormControl<string | null>;
    password: FormControl<string | null>;
    name: FormControl<string | null>;
    login: FormControl<string | null>;
  }> = new FormGroup({
    login: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl('', [Validators.required]),
  });

  readonly errorState = new FormErrorStateMatcher();

  get emailControl(): FormControl {
    return this.form.controls.email;
  }
  get passwordControl(): FormControl {
    return this.form.controls.password;
  }
  get nameControl(): FormControl {
    return this.form.controls.name;
  }
  get loginControl(): FormControl {
    return this.form.controls.login;
  }

  onSubmit(): void {
    if (this.form.invalid) return;

    const userData = this.form.value;
    console.log(userData);
  }
}
