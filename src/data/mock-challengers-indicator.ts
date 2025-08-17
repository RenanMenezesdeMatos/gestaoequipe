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
	actions?: boolean;
	goalSummary: string;
	goalDescription: string;
	howToCalculate: string;
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
		actions: true,
		goalSummary: "Média de tempo de atendimento de clientes via voz.",
		goalDescription: "O tempo médio de atendimento é a média do tempo gasto para atender um cliente, incluindo o tempo de espera e o tempo de conversa.",
		howToCalculate: "O TMA é calculado somando o tempo total de atendimento e dividindo pelo número total de atendimentos no mês."
	},
	{
		icon: "CheckCircle",
		name: "Monitoria",
		meta: "900s",
		desafio: "500s",
		record: "520s",
		yourRecord: "279",
		pontos: 100,
		actions: true,
		goalSummary: "Média das notas de monitoria, seja monitoria de qualidade ou de supervisor.",
		goalDescription: "Média das notas de monitoria, seja monitoria de qualidade ou de supervisor. A monitoria é uma avaliação do atendimento prestado ao cliente, onde são analisados aspectos como qualidade, eficiência e cordialidade e resolutividade.",
		howToCalculate: "A taxa de monitorias é calculada dividindo o número de monitorias concluídas pelo número total de monitorias programadas."
	},
	{
		icon: "BriefcaseBusiness",
		name: "Aderencia",
		meta: "900s",
		desafio: "500s",
		record: "520s",
		yourRecord: "279",
		pontos: 500,
		actions: true,
		goalSummary: "A aderência é a porcentagem de tempo que o colaborador está ativo no sistema em relação ao tempo programado.",
		goalDescription: "A aderência é a porcentagem de tempo que o colaborador está ativo no sistema em relação ao tempo programado. Isso inclui o tempo de espera, o tempo de atendimento e o tempo de pausa.",
		howToCalculate: "A aderência é calculada dividindo o tempo total ativo pelo tempo programado e multiplicando por 100."
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
		booster: 2,
		goalSummary: "Produção diária de atendimentos, independentemente do canal.",
		goalDescription: "A produção é a quantidade de atendimentos realizados pelo colaborador em um dia, independentemente do canal utilizado (voz, chat, e-mail, etc.).",
		howToCalculate: "A produção é calculada somando o número total de atendimentos realizados pelo colaborador no dia, é realizado uma média por dia útil trabalhado."
	}
]