export type Column = {
	key: keyof Indicator | "actions"; // "actions" é a coluna do botão
	label: string;
	align?: "left" | "center" | "right";
};

export const challengeColumns: Column[] = [
	{ key: "name", label: "Indicador", align: "center" },
	{ key: "meta", label: "Meta", align: "center" },
	{ key: "desafio", label: "Desafio", align: "center" },
	{ key: "record", label: "Recorde Geral", align: "center" },
	{ key: "yourRecord", label: "Seu Record", align: "center" },
	{ key: "pontos", label: "Pontos", align: "center" },
	{ key: "actions", label: "", align: "center" },
];

export type Indicator = {
	icon: string;
	name: string;
	meta: string;
	desafio: string;
	record: string;
	yourRecord: string;
	pontos: number;
	booster?: number; // multiplicador do booster
	actions?: boolean
};

export const MockChallengeIndicatos: Indicator[] = [
	{
		icon: "Timer",
		name: "TMA",
		meta: "900s",
		desafio: "500s",
		record: "520s",
		yourRecord: "279",
		pontos: 100,
		booster: 5,
		actions: true
	},
	{
		icon: "CheckCircle",
		name: "Monitoria",
		meta: "900s",
		desafio: "500s",
		record: "520s",
		yourRecord: "279",
		pontos: 100,
		actions: true
	},
	{
		icon: "BriefcaseBusiness",
		name: "Aderencia",
		meta: "900s",
		desafio: "500s",
		record: "520s",
		yourRecord: "279",
		pontos: 500,
		actions: true
	},
	{
		icon: "ChartPie",
		name: "Produção",
		meta: "900s",
		desafio: "500s",
		record: "520s",
		yourRecord: "279",
		pontos: 350,
		actions: true,
		booster: 2
	}
]