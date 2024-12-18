export type SignInDto = {
  email: string;
  password: string;
};

export interface Session {
  email: string;
  exp?: number;
  iat?: number;
}

export interface JwtPayload {
  session: Session;
  jwt: string;
}
