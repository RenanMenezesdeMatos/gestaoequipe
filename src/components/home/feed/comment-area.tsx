"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export const CommentArea = () => {
	const [value, setValue] = useState("");

	const handleSubmit = () => {
		if (!value.trim()) return;
		console.log("Novo comentário:", value); // depois pode mandar pro backend
		setValue("");
	};

	return (
		<div className="flex justify-center items-center gap-6 max-w-[750px] my-2">
			<Textarea
				className="resize-none min-h-6 border-none focus:outline-none focus-visible:ring-0 rounded-none"
				placeholder="Comente essa publicação"
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>

			<Button
				type="button"
				className="bg-transparent text-purpleprimarytext border-none hover:bg-transparent hover:underline"
				disabled={!value.trim()}
				onClick={handleSubmit}
			>
				Comentar
			</Button>
		</div>
	);
};
