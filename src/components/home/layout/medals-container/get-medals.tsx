import { DataMedalUsers } from "@/data/mock-medal-users";
import { LibIcons } from "@/lib/lib-icons";
import { Home } from "lucide-react";

type MedalsType = {
	icon: JSX.Element;
	label: string;
}

export async function getMedals(matricula: string): Promise<MedalsType[]> {
	const filtered = DataMedalUsers.filter((item) => item.matricula === matricula);

	const mapped: MedalsType[] = filtered.map((item) => {
		const Icon = LibIcons[item.icon] || Home;

		return {
			icon: <Icon className="w-full h-full" />,
			label: item.label
		};
	});

	return mapped;
}
