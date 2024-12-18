"use client";

import { JwtPayload } from "@/@types";

export interface PostProps {
  session: JwtPayload | null;
}

export function Post({ session }: PostProps) {
  return (
    <div>
      <h1>Hello post page</h1>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
