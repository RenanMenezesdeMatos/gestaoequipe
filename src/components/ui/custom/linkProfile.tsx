'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	label: string;
	href: string;
}

export const LinkProfile = ({ label, href }: Props) => {
	const pathName = usePathname();
	const isMe = pathName === href;

	return (
		<>
			<Link
				href={href}
				className={` px-4 pb-1 text-sm hover:text-purpleprimarytext ${isMe ? 'border-b-[3px] border-purpleprimarytext box-border text-purpleprimarytext' : ''
					}`}
			>
				{label}
			</Link>

		</>
	);
}