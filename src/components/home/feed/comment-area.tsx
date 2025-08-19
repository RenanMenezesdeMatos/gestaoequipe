"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export const CommentArea = () => {
	const [valueInput, setValueInput] = useState("");
	const [activateButtonComment, setActivateButtomComment] = useState(true);

	const handleClick = () => {
		setValueInput(valueInput);
		setValueInput("");
	}

	return (
		<div className="flex justify-center items-center gap-6 max-w-[750px] my-2">
			<Textarea className="
				resize-none 
				min-h-6 
				border-none
				border-input-none
				ring-offset-none
				focus-visible:outline-none
				focus-visible:none
				focus-visible:ring-none
				disabled:opacity-0
				focus:outline-none
				rounded-none"
				placeholder="Comente essa publicação"
				value={valueInput}
				onChange={(e) => setValueInput(e.target.value)}
			/>


			<Button
				className={`bg-transparent text-purpleprimarytext border-none hover:bg-transparent hover:underline`}
				disabled={valueInput.length === 0}
				onClick={handleClick}
			>
				Comentar
			</Button>

		</div>
	)
}