// import { JWTPayload, SignJWT, jwtVerify } from "jose";
// import { cookies } from "next/headers";
// import { NextRequest, NextResponse } from "next/server";

// const secretKey = "secret";
// const key = new TextEncoder().encode(secretKey);

// export async function encrypt(payload: any) {
//   return await new SignJWT(payload)
//     .setProtectedHeader({ alg: "HS256" })
//     .setIssuedAt()
//     .setExpirationTime("10 sec from now")
//     .sign(key);
// }

// export async function decrypt(input: string): Promise<JWTPayload | any> {
//   try {
//     const { payload } = await jwtVerify(input, key, {
//       algorithms: ["HS256"],
//     });
//     return payload;
//   } catch (e) {}
// }

// export async function login(formData: FormData) {
//   const user = { email: formData.get("email"), name: "lee" };

//   const expires = new Date(Date.now() + 10 * 10000);
//   const session = await encrypt({ user, expires });

//   (await cookies()).set("session", session, { expires, httpOnly: true });
// }

// export async function logout() {
//   (await cookies()).set("session", "", { expires: new Date(0) });
// }

// export async function getSession() {
//   const session = (await cookies()).get("session")?.value;

//   if (!session) {
//     console.log(session);
//     return null;
//   }

//   return decrypt(session);
// }

// export async function updateSession(request: NextRequest) {
//   const session = request.cookies.get("session")?.value;

//   if (!session) return;

//   const parsed = await decrypt(session);
//   parsed.exp = new Date(Date.now() + 10 * 100).getTime();
//   const res = NextResponse.next();
//   res.cookies.set({
//     name: "session",
//     value: await encrypt(parsed),
//     httpOnly: true,
//     expires: parsed.exp,
//   });
//   return res;
// }
