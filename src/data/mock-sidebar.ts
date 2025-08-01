import { SidebarMock } from "@/types/sidebar";


export const sidebar: SidebarMock[] = [
	{
		id: 1,
		href: "/home",
		label: "Início",
		icon: "Home",
		role: "operador",
	},
	{
		id: 2,
		href: "/meu-time",
		label: "Meu Time",
		icon: "Users",
		role: "operador",
	},
	{
		id: 3,
		href: "/indicadores",
		label: "Indicadores",
		icon: "ChartColumn",
		role: "operador",
	},
	{
		id: 4,
		href: "/passagens",
		label: "Passagens",
		icon: "Megaphone",
		role: "operador",
	}
];