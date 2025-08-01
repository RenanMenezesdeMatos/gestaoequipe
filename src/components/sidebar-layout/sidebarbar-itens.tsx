'use client'

import { ChartBarIcon, ChevronDoubleLeftIcon, HomeIcon, MegaphoneIcon, UsersIcon } from "@heroicons/react/24/solid";
import { NavItem } from "./nav-item";
import { NavLogout } from "./nav-logout";
import { NavMyProfile } from "./nav-myprofile";
import { useState } from "react";

export const SidebarItens = () => {
	const [collapsed, setCollapsed] = useState(false);
	const [showIcon, setShowIcon] = useState(false);

	const handleClick = () => {
		setCollapsed(!collapsed);
		setShowIcon(!showIcon);
	}

	return (
		<div className="flex relative mr-1">
			<nav
				className={`hidden lg:flex flex-col justify-between ${collapsed ? "w-16" : "w-56"} bg-white transition-all duration-150 ease-in-out shadow-[4px_0_6px_-2px_rgba(0,0,0,0.03)]overflow-hidden`}>

				<div className="flex flex-col justify-end mt-6 p-3">
					<div className=" flex flex-row items-center justify-center overflow-hidden">

						<div className={`block truncate object-cover transition-all duration-200 ease-in-out ${collapsed ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
							<NavMyProfile />
						</div>



					</div>

					<div className=" lg:flex-grow border-t border-gray-200 mb-2 " />

					<NavItem
						label="Home"
						icon={< HomeIcon className="fas fa-tachometer-alt"></HomeIcon>}
						href="/home"
						active={false}
						showIcon={showIcon}
					/>

					<NavItem
						label="Meu Time"
						icon={< UsersIcon className=""></UsersIcon>}
						href="/meu-time"
						active={false}
						showIcon={showIcon}
					/>


					<NavItem
						label="Indicadores"
						icon={< ChartBarIcon className=""></ChartBarIcon>}
						href="/indicadores"
						active={false}
						showIcon={showIcon}
					/>

					<NavItem
						label="Passagens"
						icon={< MegaphoneIcon className=""></MegaphoneIcon>}
						href="/passagens"
						active={false}
						showIcon={showIcon}
					/>

				</div>

				<div className="pb-2">
					<NavLogout />
				</div>

			</nav>

			<button
				onClick={handleClick}
				className="self-start absolute bg-background mt-11 mr-2 -right-6 p-1 rounded border-r border-l-0 border-gray-200 ease-in-out"
			>
				<ChevronDoubleLeftIcon
					className={`w-4 h-4 text-muted-foreground transform transition-transform duration-500 ease-in-out ${collapsed ? 'rotate-180' : 'rotate-0'
						}`}
				/>
			</button>

		</div>

	);
}