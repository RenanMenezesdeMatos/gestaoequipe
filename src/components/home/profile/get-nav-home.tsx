import { DataHomeMenu } from "@/data/mock-home-menu"
import { LibIcons } from "@/lib/lib-icons";
import { Home, LucideIcon } from "lucide-react";

type SidebarItem = {
	href: string;
	label: string;
	icon: LucideIcon;
};

export async function getNavHome(role: string): Promise<SidebarItem[]> {

	// Filtra os itens da sidebar conforme a role
	const filtered = DataHomeMenu.filter((item) => item.role === role);

	// Mapeia o mock para o formato usado no componente
	const mapped: SidebarItem[] = filtered.map((item) => {
		const icon = LibIcons[item.icon];

		if (!icon) {
			console.warn(`Ícone "${item.icon}" não encontrado no iconMap`);
		}

		return {
			href: item.href,
			label: item.label,
			icon: icon || Home// fallback para evitar erros
		};
	});

	return mapped;
}
