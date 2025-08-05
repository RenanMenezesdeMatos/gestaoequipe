import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

type AvatarCustom = {
	alt: string;
	src?: string;
}

export const AvatarCustom = ({ alt, src }: AvatarCustom) => {
	return (
		<Avatar className="flex items-center justify-center text-[14px] font-semibold w-8 h-8 border-pinkprimarybackground border-2 rounded-full overflow-hidden text-white">
			<AvatarImage src={src} alt={alt} />
			<AvatarFallback>
				{alt.trim()
					.split(" ")
					.filter(Boolean)
					.map((n) => n[0])
					.filter(Boolean)
					.reduce((acc, curr, idx, arr) => (idx === 0 || idx === arr.length - 1 ? acc + curr : acc), "")
					.toUpperCase()}
			</AvatarFallback>
		</Avatar>
	);
};