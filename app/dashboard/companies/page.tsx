import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function Companies(){


return (

<div>


<div className="flex justify-between items-center">


<div>

<h1 className="text-3xl font-bold">
Companies
</h1>

<p className="text-gray-500">
Manage businesses being analyzed.
</p>

</div>


<Link href="/dashboard/companies/new">

<Button>
Add Company
</Button>

</Link>


</div>


<div className="mt-8 rounded-xl border bg-white p-10 text-center">

<h2 className="text-xl font-semibold">
No companies yet
</h2>


<p className="mt-2 text-gray-500">
Add your first company to begin analyzing customer feedback.
</p>


</div>


</div>

)

}