import {createClient} from "@/lib/supabase/server";


export default async function Dashboard(){


const supabase=createClient();


const {
data:{
user
}

}=await supabase.auth.getUser();



return (

<div className="p-10">


<h1 className="text-4xl font-bold">
FeedbackAuditor Dashboard
</h1>


<p className="mt-4">

Welcome {user?.email}

</p>


</div>

)


}