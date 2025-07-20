'use client';

import { SigninForm } from "@/components/auth/signin-form";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/Logo";
import { useRouter } from 'next/navigation'

export default function Page() {
	const nextnav = useRouter();

	const handleCreateAccountClick = () => {
		nextnav.push("/signup");
	}

	return (

		<div className="max-w-lg mx-auto mt-12 px-6">

			<Logo size={50} />

			<h1 className="mt-6">Faça seu login</h1>

			<div className="mt-10 mb-10 flex flex-col gap-6	">

				<SigninForm />

			</div>

			<div className="flex items-center justify-center gap-6 mb-10">

				<div className="flex-grow border-t border-gray-400" />

				<span className="text-gray-500" > OU </span>

				<div className="flex-grow border-t border-gray-400" />

			</div>

			<Button
				label="Criar uma conta"
				size={2}
				type={2}
				onClick={handleCreateAccountClick}
			/>

		</div >

	);
}