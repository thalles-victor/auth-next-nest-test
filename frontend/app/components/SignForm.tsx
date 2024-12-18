"use client";

import React, { useEffect, useState } from "react";
import { SignInDto } from "@/@types";
import { useForm } from "react-hook-form";
import { signIn } from "../actions";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ type, ...props }, ref) => {
    return (
      <input
        type={type}
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export const SignForm = () => {
  const [serverResponse] = useState<string | null>(null);
  const { register, handleSubmit } = useForm<SignInDto>();

  const action: () => void = handleSubmit(async (data) => {
    await signIn(data);
  });

  useEffect(() => {
    console.log(serverResponse);
  }, [serverResponse]);

  return (
    <form action={action} className="flex flex-col items-center space-y-2">
      <Input placeholder="email" {...register("email")} />
      <Input placeholder="password" {...register("password")} />

      <button
        type="submit"
        className="text-white bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
      >
        Confirm
      </button>
    </form>
  );
};
