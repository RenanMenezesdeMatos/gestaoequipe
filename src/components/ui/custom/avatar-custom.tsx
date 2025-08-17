import * as Avatar from "@radix-ui/react-avatar";

type AvatarCustomProps = {
	alt: string;
	src?: string;
	size?: "sm" | "md" | "lg" | "xl";
};

const sizeClasses = {
	sm: "w-8 h-8",
	md: "w-10 h-10",
	lg: "w-14 h-14",
	xl: "w-20 h-20",
};

export const AvatarCustom = ({ alt, src, size = "sm" }: AvatarCustomProps) => {

	const getInitials = (name: string) => {
		return name
			.trim()
			.split(" ")
			.filter(Boolean)
			.map((n) => n[0])
			.filter(Boolean)
			.reduce((acc, curr, idx, arr) => {
				return idx === 0 || idx === arr.length - 1 ? acc + curr : acc;
			}, "")
			.toUpperCase();
	};

	return (
		<Avatar.Root
			className={`
        flex items-center justify-center text-[14px] font-semibold 
        border-pink-secondary border-2 rounded-full overflow-hidden 
        text-purpleprimarytext bg-accent
        ${sizeClasses[size]}
      `}
		>
			<Avatar.Image src={src} alt={alt} />
			<Avatar.Fallback>{getInitials(alt)}</Avatar.Fallback>
		</Avatar.Root>
	);
};
