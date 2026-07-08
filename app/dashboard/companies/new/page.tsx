"use client";

import {useState} from "react";


export default function NewCompany(){


const [name,setName]=useState("");

const [website,setWebsite]=useState("");



function save(){

console.log({
name,
website
});

alert("Company saved");

}



return (

<div className="max-w-xl">


<h1 className="text-3xl font-bold">
Add Company
</h1>


<div className="mt-6 space-y-4">


<input
className="w-full rounded border p-3"
placeholder="Company Name"
onChange={(e)=>setName(e.target.value)}
/>


<input
className="w-full rounded border p-3"
placeholder="Website"
onChange={(e)=>setWebsite(e.target.value)}
/>


<button
className="rounded bg-black px-6 py-3 text-white"
onClick={save}
>

Save Company

</button>


</div>


</div>

)

}