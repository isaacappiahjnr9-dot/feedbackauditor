"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function Signup() {

  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function signup() {

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert(error.message);
      return;
    }

    alert("Account created. Check your email.");
  }


  return (
    <main className="flex min-h-screen items-center justify-center">

      <div className="w-full max-w-md space-y-5 rounded-xl border p-8">

        <h1 className="text-3xl font-bold">
          Create Account
        </h1>

        <input
          className="w-full rounded border p-3"
          placeholder="Email"
          type="email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          className="w-full rounded border p-3"
          placeholder="Password"
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="w-full rounded bg-black p-3 text-white"
          onClick={signup}
        >
          Sign Up
        </button>

      </div>

    </main>
  );
}