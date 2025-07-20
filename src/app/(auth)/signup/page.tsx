'use client';

import { SignupForm } from "@/components/auth/signup-form";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Page() {
	const nextnav = useRouter();

	const handleCreateAccountClick = () => {
		nextnav.push("/signin");
	}
	return (


		<div className="max-w-lg mx-auto mt-12 px-6">
			<Logo size={50} />
			<h1 className="mt-6">Crie a sua conta!</h1>

			<div className="mt-10 mb-14 flex flex-col gap-6	">

				<SignupForm />

			</div>

			<div className="flex items-center justify-center gap-6 mb-10">

				<div className="flex-grow border-t border-gray-400" />

				<span className="text-gray-500" > OU </span>

				<div className="flex-grow border-t border-gray-400" />

			</div>

			<Button
				label="Já tenho uma conta"
				size={2}
				type={1}
				onClick={handleCreateAccountClick}
			/>

		</div>

	);
}