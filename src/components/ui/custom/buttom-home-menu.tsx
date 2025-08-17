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
	const souEu = true;

	return (

		<Link href={href} className={`flex flex-col items-center justify-center h-full pt-3 px-2 pb-1    ${active || isMe ? 'text-purpleprimarytext border-b-4 border-border-purpleprimarytext' : 'text-pinkprimarytext'} hover:bg-purpleprimarybackground/5 hover:bg-opacity-20 hover:text-purpleprimarytext hover:border-b-4 border-b-4 border-b-transparent hover:border-purpleprimarytext`}>

			{souEu &&
				<>
					<div className="flex m-auto h-5 w-5">
						{icon}
					</div>

					<div className="text-xs mt-1">
						{label}
					</div>
				</>

			}

		</Link>
	);
}