import { HomeProfileMenu } from "@/data/mock-home-profile-menu";

type Props = {
	href: string;
	label: string;
};

export async function GetMenuProfile(role: string): Promise<Props[]> {

	// Filtra os itens da sidebar conforme a role
	const filtered = HomeProfileMenu.filter((item) => item.role === role);

	// Mapeia o mock para o formato usado no componente
	const mapped: Props[] = filtered.map((item) => {
		return {
			href: item.href,
			label: item.label,
		};
	});

	return mapped;
}
