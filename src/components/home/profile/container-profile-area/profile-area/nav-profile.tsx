'use client'

import { LinkProfile } from "../../../../ui/custom/linkProfile";
import { useEffect, useState } from "react";
import { GetMenuProfile } from "./get-menu-profile";

type PropsUseState = {
	href: string;
	label: string
}

type Props = {
	role: string;
}

export const NavProfile = ({ role }: Props) => {
	const [dataMenu, setDataMenu] = useState<PropsUseState[]>([]);

	useEffect(() => {
		async function fetchMenu() {
			const itens = await GetMenuProfile("operador");
			setDataMenu(itens)
		};

		fetchMenu();
	}, [role])

	return (
		<>

			<div className="w-full flex flex-row justify-center items-center gap-8 relative mt-5 mb-5" >

				{dataMenu.map((item) => (
					<LinkProfile
						href={item.href}
						label={item.label}
					/>
				))}

			</div>


			<div className="w-full max-w-[90%] h-[1px] bg-gray-300 -mt-[23px] mx-auto mb-4" />
		</>

	);
}
