'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";
import { InputCustom } from "@/components/ui/custom/input-custom";
import { ButtonCustom } from "../ui/custom/button-custom";
import { LockIcon, Mail } from "lucide-react";

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
			<InputCustom
				placeholder="Digite seu nome"
				value={nameField}
				onChange={(t) => setNameField(t)}
			/>
			<InputCustom
				placeholder="Digite seu e-mail"
				value={emailField}
				onChange={(t) => setEmailField(t)}
				icon={<Mail className="h-6 w-6 text-accent" />}
			/>

			<InputCustom
				placeholder="Digite sua senha"
				value={passwordField}
				onChange={(t) => setPasswordField(t)}
				password
				icon={<LockIcon className="h-6 w-6 text-accent" />}
			/>

			<ButtonCustom
				label="Criar Conta"
				onClick={handleEnterButtonClick}
				size={1}
				type={2}
			/>

		</>
	);
}