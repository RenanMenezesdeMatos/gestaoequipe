'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
	label: string
	icon: React.JSX.Element;
	href: string;
	active?: boolean;
}

export const ButtonHomeMenu = ({ label, icon, href, active }: Props) => {
	const pathName = usePathname();
	const isMe = pathName === href;

	return (
		<Link href={href} className={`flex flex-col items-center justify-center h-full pt-3 px-2 pb-1    ${active || isMe ? 'text-purple-primary border-b-4 border-purple-primary' : 'text-pink-primary'} hover:bg-purple-primary hover:bg-opacity-20 hover:text-purple-primary hover:border-b-4 border-b-4 border-b-transparent hover:border-purple-primary`}>

			<div className="h-5 w-5 mb-0">
				{icon}
			</div>

			<div className="text-xs">
				{label}
			</div>

		</Link>
	);
}