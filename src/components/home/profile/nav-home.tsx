'use client'

import { Skeleton } from "@/components/ui/skeleton"
import { ButtonHomeMenu } from "../../ui/custom/buttom-home-menu";
import { useEffect, useState } from "react";
import { getNavHome } from "./get-nav-home";

type PropsUseState = {
	href: string;
	label: string;
	icon: React.ElementType;
};

type PropsNavHome = {
	role: string
}

export const NavHome = ({ role }: PropsNavHome) => {
	const [dataHomeMenu, setDataHomeMenu] = useState<PropsUseState[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchMenu() {
			const itens = await getNavHome("operador");
			setDataHomeMenu(itens);
			setLoading(false); // dados carregados
		};

		fetchMenu();
	}, [role])

	const skeletonArray = Array.from({ length: 5 });

	return (
		<div className="flex flex-1 justify-center items-center gap-1 h-full w-full">
			{loading
				? skeletonArray.map((_, i) => (
					<Skeleton
						key={i}
						className="h-10 w-10 rounded-md bg-accent animate-pulse flex gap-5 p-5 m-3"
					/>
				))
				: dataHomeMenu.map((item, index) => (
					<ButtonHomeMenu
						key={item.href + index}
						href={item.href}
						icon={<item.icon />}
						label={item.label}
						active={false}
					/>
				))}
		</div>
	);

}