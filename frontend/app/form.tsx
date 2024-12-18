// import { login, logout } from "@/lib";
// import { redirect } from "next/navigation";

// export async function Form() {
//   return (
//     <>
//       <form
//         className="flex flex-col items-center w-[250px]"
//         action={async (formData) => {
//           "use server";
//           await login(formData);
//           redirect("/");
//         }}
//       >
//         <input
//           className="px-[0.75rem] text-xl"
//           type="email"
//           id="email"
//           name="email"
//           placeholder="Email"
//         />
//         <br />
//         <button className="w-full my-[0.75rem]" type="submit">
//           Login
//         </button>
//       </form>

//       <form
//         action={async () => {
//           "use server";
//           await logout();
//           redirect("/");
//         }}
//       >
//         <button type="submit">Logout</button>
//       </form>
//     </>
//   );
// }
