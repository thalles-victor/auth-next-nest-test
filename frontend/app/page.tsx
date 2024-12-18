import { getSession } from "./actions";
import Link from "next/link";
import { Post } from "./components/Post";

export default async function Home() {
  const session = await getSession();

  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh]">
      {!session && (
        <Link
          className="text-blue-500 border border-black rounded-xl px-[1rem] py-[0.25rem]"
          href={"/SignIn"}
        >
          SignIn
        </Link>
      )}
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Post session={session} />
    </main>
  );
}
