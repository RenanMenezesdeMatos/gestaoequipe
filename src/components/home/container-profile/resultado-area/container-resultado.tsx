'use client'

import type { ComponentType } from "react";
import { Goal } from "@/types/goals";
import { useState, useEffect, useRef } from "react";
import { goalsMock } from "@/data/mockDataGoalsUser";
import { GoalsUser } from "./goals-user";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon, CheckCircleIcon, ClockIcon, XCircleIcon } from "@heroicons/react/24/solid";

// Mapeia as keys do mock para componentes de ícones
const iconsMap: Record<string, ComponentType<{ className?: string }>> = {
	TMASuporte: ClockIcon,
	TMAVendas: CheckCircleIcon,
	Qualidade: XCircleIcon
};

export const ContainerResultado = () => {
	const [data, setData] = useState<Goal[]>([]);
	const carousel = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setTimeout(() => {
			setData(goalsMock);
		}, 1000);
	}, []);

	if (!data.length) return <div>Carregando metas...</div>;

	const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (carousel.current) {
			console.log(carousel.current.offsetWidth);
			carousel.current.scrollLeft -= 270;
		}
	}

	const handleRigthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (carousel.current) {
			console.log(carousel.current.offsetWidth);
			carousel.current.scrollLeft += 270;
		}
	}

	return (
		<div className="flex flex-row justify-center items-center h-40 w-[98%] relative carousel">

			<div
				ref={carousel}
				className="flex flex-row items-center h-full w-full gap-4 overflow-x-auto scroll scroll-smooth carousel"
			>

				{data.map((goal) => {
					// Pega o componente do ícone pelo nome no goal.icon
					const IconComponent = iconsMap[goal.icon] ?? ClockIcon; // assume ClockIcon como fallback

					return (
						<div >
							<GoalsUser
								key={goal.id}
								goalDescription={goal.goalDescription}
								icon={<IconComponent className="h-12 text-pink-primary" />}
								targetGoal={goal.targetGoal}
								untilTheGoal={goal.untilTheGoal}
								userGoal={goal.userGoal}
							/>
						</div>
					);
				})}


			</div>

			<div className=" text-gray-300/50">
				<button
					onClick={handleRigthClick}
					className="absolute -right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/80 size-10 flex justify-center items-center hover:text-pink-primary hover:bg-white/40 hover:shadow-md transition duration-150 w-10">
					<ArrowRightCircleIcon className="" />
				</button>
				<button
					onClick={handleLeftClick}
					className="absolute -left-5 top-1/2 -translate-y-1/2  rounded-full bg-white/80 size-10 flex justify-center items-center hover:text-pink-primary hover:bg-white/40 hover:shadow-md transition duration-150 w-10">
					<ArrowLeftCircleIcon className="" />
				</button>
			</div>

		</div>
	);
};
