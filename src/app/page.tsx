import { Logo } from "@/components/ui/Logo";
import { redirect } from "next/navigation";

export default function Page() {

  redirect('home');

  return (

    <div className="min-h-screen w-full flex items-center justify-center">
      <Logo
        size={80} />
    </div>

  )
}