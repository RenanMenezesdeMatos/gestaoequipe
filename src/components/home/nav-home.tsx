import { ChartPieIcon, FireIcon, HomeIcon, NewspaperIcon, TrophyIcon } from "@heroicons/react/24/solid";
import { ButtonHomeMenu } from "../ui/buttom-home-menu";

export const NavHome = () => {

	return (
		<div className="flex flex-1 justify-center items-center gap-1 h-full w-full">

			<ButtonHomeMenu
				href={"/home/profile"}
				icon={<HomeIcon />}
				label="Home"
				active={true}
			/>

			<ButtonHomeMenu
				href="/home/resultados"
				icon={<ChartPieIcon />}
				label="Resultados"
				active={false}
			/>

			<ButtonHomeMenu
				href="/home/desafios"
				icon={<FireIcon />}
				label="Desafios"
				active={false}
			/>

			<ButtonHomeMenu
				href="/home/mural"
				icon={<NewspaperIcon />}
				label="Mural"
				active={false}
			/>

			<ButtonHomeMenu
				href="/home/ranking"
				icon={<TrophyIcon />}
				label="Ranking"
				active={false}
			/>

		</div>
	);
}