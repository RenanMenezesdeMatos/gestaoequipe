"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

type HeartLikeAreaProps = {
	postId: string;
	initialLikes: number;
	initialIsLiked: boolean;
};

export const HeartLikeArea = ({ postId, initialLikes, initialIsLiked }: HeartLikeAreaProps) => {
	const [isLiked, setIsLiked] = useState(initialIsLiked);
	const [count, setCount] = useState(initialLikes);

	// const toggleLike = async () => {
	// 	setIsLiked((prev) => {
	// 		setCount((countPrev) => (prev ? countPrev - 1 : countPrev + 1));
	// 		return !prev;
	// 	});

	// 	try {
	// 		await fetch(`/api/posts/${postId}/like`, {
	// 			method: isLiked ? "DELETE" : "POST",
	// 		});
	// 	} catch (error) {
	// 		setIsLiked(initialIsLiked);
	// 		setCount(initialLikes);
	// 		console.error("Erro ao atualizar like:", error);
	// 	}
	// };

	const toggleLike = () => {
		setIsLiked((prev) => !prev);
		setCount((prev) => (isLiked ? prev - 1 : prev + 1));
	};

	return (
		<div className="rounded-full bg-accent-foreground/10 px-2 py-1 text-accent-foreground/80 text-xs flex items-center gap-2">
			<Heart
				className="w-4 h-4 cursor-pointer text-red-500"
				fill={isLiked ? "currentColor" : "none"}
				stroke="currentColor"
				aria-label={isLiked ? "Remover curtida" : "Curtir postagem"}
				onClick={toggleLike}
			/>
			<span className="font-bold">{count}</span> Curtidas
		</div>
	);
};
