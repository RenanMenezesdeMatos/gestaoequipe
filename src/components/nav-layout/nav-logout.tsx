'use client';

import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/navigation";

export const NavLogout = () => {
	const router = useRouter();

	const handleClick = () => {
		router.replace('/signin');
	}

	return (

		<div
			onClick={handleClick}
			className={` 
				cursor-pointer
				flex flex-items-center
				gap-2
				p-2
				transition-colors
				hover:text-purple-primary
				hover:font-bold`
			}>

			<div className="size-5 flex items-center justify-center">
				<ArrowTopRightOnSquareIcon className="" />
			</div>

			<div className="flex justify-center items-baseline text-sm">
				Sair
			</div>

		</div >



	)
}