'use client'

import { Goal } from "@/types/goals";
import { useState, useEffect, useRef } from "react";
import { goalsMock } from "@/data/mock-goal-users";
import { LibIcons } from "@/lib/lib-icons"
import { GoalsUser, GoalsUserSkeleton } from "./goals-user";
import { ArrowLeft, ArrowRight, ShieldQuestionMark, } from "lucide-react";
import { ChartContentCard } from "../charts/chart-content-card";


export const ContainerCarouselCard = () => {
	const [data, setData] = useState<Goal[]>([]);
	const carousel = useRef<HTMLDivElement | null>(null);
	const cardRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setTimeout(() => {
			setData(goalsMock);
		}, 1000);
	}, []);

	if (!data.length) return <div className="flex flex-row justify-center items-center h-40 w-[98%] relative carousel p-1">

		{<GoalsUserSkeleton />}

	</div>;

	const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (carousel.current && cardRef.current) {
			const cardWidth = cardRef.current.offsetWidth + 16; // 16 = gap-4 (4 * 4px)
			carousel.current.scrollLeft -= cardWidth;
		}
	};

	const handleRigthClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (carousel.current && cardRef.current) {
			const cardWidth = cardRef.current.offsetWidth + 16; // gap-4
			carousel.current.scrollLeft += cardWidth;
		}
	};

	return (
		<div className="flex flex-col justify-around items-center h-40 w-full relative carousel">

			<div className="flex flex-col justify-center items-center h-40 w-[98%] relative carousel p-1 ">

				<div
					ref={carousel}
					className="flex flex-row items-center h-full w-full gap-4 overflow-x-auto scroll scroll-smooth"
				>

					{data.map((goal, index) => {
						const IconComponent = LibIcons[goal.icon] ?? ShieldQuestionMark;

						return (
							<div key={goal.id} ref={index === 0 ? cardRef : null}>
								<GoalsUser
									goalDescription={goal.goalDescription}
									icon={<IconComponent className="h-12 w-14 text-pinkprimarytext" />}
									targetGoal={goal.targetGoal}
									untilTheGoal={goal.untilTheGoal}
									userGoal={goal.userGoal}
									typeGoal={goal.typeGoal}
									dataType={goal.dataType}
								/>
							</div>
						);
					})}


				</div>

				<div className=" text-muted-foreground-300/50">
					<button
						onClick={handleRigthClick}
						className="absolute -right-5 top-1/2 -translate-y-1/2 border rounded-full bg-background size-10 flex justify-center items-center hover:text-pinkprimarytext hover:bg-card/40 hover:shadow-md transition duration-150 w-10">
						<ArrowRight className="" />
					</button>
					<button
						onClick={handleLeftClick}
						className="absolute -left-5 top-1/2 -translate-y-1/2 border rounded-full bg-background size-10 flex justify-center items-center hover:text-pinkprimarytext hover:bg-card/40 hover:shadow-md transition duration-150 w-10">
						<ArrowLeft className="" />
					</button>
				</div>

			</div>



		</div>
	);
};
