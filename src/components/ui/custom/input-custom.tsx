"use client";

import { KeyboardEvent } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

type Props = {
	placeholder?: string;
	password?: boolean;
	icon?: React.JSX.Element;
	value?: string;
	onChange?: (newValue: string) => void;
	filled?: boolean;
	searchIcon?: React.JSX.Element;
	onEnter?: () => void;
};

export const InputCustom = ({ placeholder, password, icon, value, onChange, filled, searchIcon, onEnter }: Props) => {
	const [showPassord, setShowPassword] = useState(false);

	const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
		if (event.code.toLocaleLowerCase() === 'enter' && onEnter) {
			onEnter();
		}
	}

	return (
		<div className={`
		has-[:focus]:border-muted-foreground
		flex items-center
		h-12
		rounded-md
		border border-muted-foreground
		bg-background
		shadow-sm
		focus-within:border-muted-foreground
		${filled && 'bg-accent text-foreground'}`}>

			{icon && (
				<div className="p-3 bg-purpleprimarybackground rounded-md h-full flex items-center justify-center ">
					{icon}
				</div>
			)}

			{searchIcon && (
				<div className="flex items-center justify-center ml-2 text-muted-foreground">
					{searchIcon}
				</div>
			)}

			<input className="flex-1 outline-none bg-transparent h-full p-2 has-[:focus]:bg-muted-foreground"
				type={password && !showPassord ? "password" : "text"}
				placeholder={placeholder}
				value={value}
				onChange={e => onChange && onChange(e.target.value)}
				onKeyUp={handleKeyUp}
			/>

			{password && (

				showPassord ?
					<EyeIcon
						className="cursor-pointer mr-4 size-6 text-foreground"
						onClick={() => setShowPassword(!showPassord)}
					/> :
					<EyeSlashIcon
						className="cursor-pointer mr-4 size-6 text-foreground"
						onClick={() => setShowPassword(!showPassord)}
					/>

			)}

		</div>
	);
}