"use server";

import { JwtPayload, Session, SignInDto } from "@/@types";
import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function decrypt(jwt: string): Promise<Session> {
  try {
    const { payload } = await jwtVerify(jwt, key, {
      algorithms: ["HS256"],
    });

    return {
      email: payload.email as string,
      exp: payload.exp,
      iat: payload.iat,
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    redirect("/");
  }
}

export async function encrypt(payload: JWTPayload) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("10 sec from now")
    .sign(key);

  return jwt;
}

export async function signIn({ email }: SignInDto) {
  const expires = new Date(Date.now() + 10 * 1000);
  const session = await encrypt({ email });

  (await cookies()).set("teste-auth-session", session, {
    expires,
    httpOnly: true,
  });
  redirect("/");
}

export async function logout() {
  (await cookies()).set("teste-auth-session", "", { expires: new Date(0) });
}

export async function getSession(): Promise<JwtPayload | null> {
  const session = (await cookies()).get("teste-auth-session")?.value;

  if (!session) {
    return null;
  }

  return { session: await decrypt(session), jwt: session };
}
