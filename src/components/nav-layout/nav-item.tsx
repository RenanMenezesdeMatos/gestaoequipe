'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

type Props = {
	label: string;
	icon: React.JSX.Element;
	href: string;
	active?: boolean;
	showIcon?: boolean;
}


export const NavItem = ({ label, icon, href, active, showIcon }: Props) => {
	const pathName = usePathname();
	const isMe = pathName === href;

	return (

		<Link
			href={href}
			className={`
				flex flex-items-center
				gap-2
				p-2
				transition-colors
				hover:text-purple-primary
				hover:font-bold
				${active ? 'text-purple-primary font-bold' : 'hover:text-gray-700'}`
				+ (isMe ? ' text-purple-primary font-bold' : '')
			}>

			<div className="h-5 w-5 flex items-center justify-center">
				{icon}
			</div>

			{!showIcon && (
				<div className="flex items-baseline justify-center text-sm">
					{label}
				</div>
			)}

		</Link>



	)
}

