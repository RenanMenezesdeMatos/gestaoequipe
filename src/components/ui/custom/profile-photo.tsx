import { User } from "@/types/user";

type Props = {
	src: string | undefined,
	alt: string,
	size: 1 | 2 | 3
}

export const ProfilePhoto = ({ src, alt, size }: Props) => {
	const defaultUrl = "/userDefault.svg"

	return (
		<img
			src={src ? src : defaultUrl}
			alt={alt}
			className={`flex flex-col justify-center items-center rounded-full border-pinkprimarytext object-cover
				${size === 1 && 'border-2 max-h-10 max-w-10'}
				${size === 2 && 'border-4 max-h-40 max-w-40'}
				${size === 3 && 'border-4 max-h-80 max-w-80'}`}
		/>
	);
}