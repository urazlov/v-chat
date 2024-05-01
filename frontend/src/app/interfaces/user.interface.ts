export interface User {
  id: number;
  name: string;
  password: string;
  email: string;
  avatarSrc?: string;
  login: string;
}

export type UserLogin = Pick<User, 'login' | 'password'>;

export type UserRegistration = Omit<User, 'id' | 'avatarSrc'>;
