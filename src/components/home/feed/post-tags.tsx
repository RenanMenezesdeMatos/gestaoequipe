type PostTagsProps = {
	tags: string[];
};

export const PostTags = ({ tags }: PostTagsProps) => {
	const sortedTags = [...tags].sort((a, b) => {
		if (a === "Importante!") return -1;
		if (b === "Importante!") return 1;
		return a.localeCompare(b);
	});

	return (
		<div className="flex gap-2 p-1 rounded-full border border-accent-foreground/20 flex-wrap">
			{sortedTags.map((tag, index) => (
				<span
					key={index}
					className={`rounded-full px-4 py-1 text-xs flex items-center ${tag === "Importante!"
							? "bg-destructive text-destructive-foreground"
							: "bg-accent-foreground/10 text-accent-foreground/80"
						}`}
				>
					{tag}
				</span>
			))}
		</div>
	);
};
