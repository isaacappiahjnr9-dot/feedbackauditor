"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";


export default function Login(){

const supabase=createClient();

const router=useRouter();

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");


async function login(){

const {error}=await supabase.auth.signInWithPassword({
email,
password
});


if(error){

alert(error.message);

return;

}


router.push("/dashboard");

}


return (

<main className="flex min-h-screen items-center justify-center">

<div className="w-full max-w-md space-y-5 rounded-xl border p-8">


<h1 className="text-3xl font-bold">
Login
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
onClick={login}
>
Login
</button>


</div>

</main>

)

}