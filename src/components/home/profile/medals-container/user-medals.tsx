'use client'

import { Medal } from "@/components/ui/custom/medal";
import { ChevronDoubleDownIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import { getMedals } from "./get-medals";

type Props = {
	matricula: string;
};

type MedalsType = {
	icon: JSX.Element;
	label: string;
};

export const UserMedals = ({ matricula }: Props) => {
	const [collapsed, setCollapsed] = useState(false);
	const [medals, setMedals] = useState<MedalsType[]>([]);

	useEffect(() => {
		async function fetchMedals() {
			const itens = await getMedals("G0055350");
			setMedals(itens);
		}

		fetchMedals();
	}, [matricula]);

	const handleClick = () => {
		setCollapsed(!collapsed);
	};

	return (
		<div className="flex flex-col justify-center items-center w-3/5">
			<div className="flex flex-row w-full">
				<span className="flex flex-grow border-t border-muted w-full m-2"></span>

				<button
					onClick={handleClick}
					className="w-5 h-5 ml-4 text-muted-foreground"
				>
					<ChevronDoubleDownIcon
						className={`opacity-50 hover:opacity-100 w-5 h-5 transform transition-transform duration-150 ${collapsed ? "rotate-180" : "rotate-0"
							}`}
					/>
				</button>
			</div>

			<div
				className={`transition-all duration-100 ease-in-out ${collapsed
					? "max-h-0 opacity-0 scale-50"
					: "max-h-[100px] opacity-100 scale-100 mt-0"
					} flex flex-row gap-1`}
			>
				{medals.map((medal, index) => (
					<Medal key={index} label={medal.label} icon={medal.icon} />
				))}
			</div>
		</div>
	);
};
