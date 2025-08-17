import { HomeMenuType } from "@/types/home-menu";


export const DataHomeMenu: HomeMenuType[] = [
	{
		id: 1,
		href: "/home/profile",
		icon: "Home",
		label: "Início",
		active: false,
		role: "operador",
	},
	{
		id: 2,
		href: "/home/resultados",
		icon: "ChartArea",
		label: "Resultado",
		active: false,
		role: "operador",
	},
	{
		id: 3,
		href: "/home/desafios",
		icon: "Flame",
		label: "Desafios",
		active: false,
		role: "operador",
	},
	{
		id: 4,
		href: "/home/feed",
		icon: "Rss",
		label: "Feed",
		active: false,
		role: "operador",
	},
	{
		id: 5,
		href: "/home/ranking",
		icon: "Medal",
		label: "Ranking",
		active: false,
		role: "operador",
	},
];