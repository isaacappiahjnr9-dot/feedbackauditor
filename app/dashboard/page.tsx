import {
Card,
CardContent,
CardHeader,
CardTitle
} from "@/components/ui/card";


export default function Dashboard(){


return (

<div>


<h1 className="text-4xl font-bold">
Dashboard
</h1>


<p className="mt-2 text-gray-500">
Monitor your customer feedback intelligence.
</p>



<div className="mt-8 grid gap-6 md:grid-cols-3">


<Card>

<CardHeader>

<CardTitle>
Total Reviews
</CardTitle>

</CardHeader>

<CardContent>

0

</CardContent>

</Card>



<Card>

<CardHeader>

<CardTitle>
AI Reports
</CardTitle>

</CardHeader>

<CardContent>

0

</CardContent>

</Card>



<Card>

<CardHeader>

<CardTitle>
Sentiment Score
</CardTitle>

</CardHeader>

<CardContent>

-

</CardContent>

</Card>


</div>


</div>

)

}