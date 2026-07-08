import Link from "next/link";
import {
  LayoutDashboard,
  Building2,
  FileText,
  CreditCard,
  Settings
} from "lucide-react";


const navigation = [
  {
    name:"Dashboard",
    href:"/dashboard",
    icon:LayoutDashboard
  },
  {
    name:"Companies",
    href:"/dashboard/companies",
    icon:Building2
  },
  {
    name:"Reports",
    href:"/dashboard/reports",
    icon:FileText
  },
  {
    name:"Billing",
    href:"/dashboard/billing",
    icon:CreditCard
  },
  {
    name:"Settings",
    href:"/dashboard/settings",
    icon:Settings
  }
];


export default function DashboardLayout({
children
}:{
children:React.ReactNode
}){


return (

<div className="flex min-h-screen">


{/* Sidebar */}

<aside className="w-64 border-r bg-white p-6">


<h1 className="mb-8 text-2xl font-bold">
FeedbackAuditor
</h1>


<nav className="space-y-2">

{
navigation.map((item)=>{

const Icon=item.icon;

return (

<Link
key={item.href}
href={item.href}
className="flex items-center gap-3 rounded-lg p-3 hover:bg-gray-100"
>

<Icon size={20}/>

{item.name}

</Link>

)

})
}

</nav>


</aside>



{/* Main Content */}

<main className="flex-1 bg-gray-50 p-8">

{children}

</main>


</div>

)

}