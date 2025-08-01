type HomeProfileMenuType = {
	id: number;
	href: string;
	label: string;
	role: string;
}

export const HomeProfileMenu: HomeProfileMenuType[] = [
	{
		id: 1,
		href: "/home/profile",
		label: "Perfil",
		role: "operador",
	},
	{
		id: 2,
		href: "/home/profile/jornada",
		label: "Jornada",
		role: "operador",
	},
	{
		id: 3,
		href: "/home/profile/feedback",
		label: "FeedBack",
		role: "operador",
	},
	{
		id: 4,
		href: "/home/profile/meus-pontos",
		label: "Meus Pontos",
		role: "operador",
	}
];