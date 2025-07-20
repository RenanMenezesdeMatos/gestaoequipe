'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { Button } from "../ui/button";

export const SignupForm = () => {
	const router = useRouter();
	const [nameField, setNameField] = useState("");
	const [emailField, setEmailField] = useState("");
	const [passwordField, setPasswordField] = useState("");

	const handleEnterButtonClick = () => {
		router.replace("/");
	}

	return (
		<>
			<Input
				placeholder="Digite seu nome"
				value={nameField}
				onChange={(t) => setNameField(t)}
			/>
			<Input
				placeholder="Digite seu e-mail"
				value={emailField}
				onChange={(t) => setEmailField(t)}
				icon={<EnvelopeIcon className="h-6 w-6 text-white" />}
			/>

			<Input
				placeholder="Digite sua senha"
				value={passwordField}
				onChange={(t) => setPasswordField(t)}
				password
				icon={<LockClosedIcon className="h-6 w-6 text-white" />}
			/>

			<Button
				label="Criar Conta"
				onClick={handleEnterButtonClick}
				size={1}
				type={2}
			/>

		</>
	);
}