'use client'

import { ChartPieIcon, CheckBadgeIcon, ChevronDoubleDownIcon, ClockIcon, StarIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { Medal } from "../../ui/medal";
import { useState } from "react";

export const UserMedals = () => {
	const [collapsed, setCollapsed] = useState(false);

	const handleClick = () => {
		setCollapsed(!collapsed);
	}

	return (

		<div className="flex flex-col justify-center items-center w-3/5">

			<div className="flex flex-row w-full">

				<span className="flex flex-grow border-t border-gray-200 w-full m-2" ></span>

				<button
					onClick={handleClick}
					className={`w-5 h-5 ml-4 text-gray-400`}>
					<ChevronDoubleDownIcon
						className={`opacity-50 hover:opacity-100 w-5 h-5 transform transition-transform duration-150 ${collapsed ? 'rotate-180' : 'rotate-0'}`}
					/>
				</button>


			</div>



			<div className={`transition-all duration-100 ease-in-out ${collapsed ? 'hidden max-h-0 opacity-0 scale-50' : 'max-h-[100px] opacity-100 scale-100 mt-0'}  flex flex-row gap-1`}>

				<Medal
					label="Qualidade"
					icon={<StarIcon />}
				/>

				<Medal
					label="Acertivo"
					icon={<CheckBadgeIcon />}
				/>

				<Medal
					label="Colaborativo"
					icon={<UserGroupIcon />}
				/>

				<Medal
					label="Produtivo"
					icon={<ChartPieIcon />}
				/>

				<Medal
					label="Pontual"
					icon={<ClockIcon />}
				/>

			</div>

		</div>


	);
}