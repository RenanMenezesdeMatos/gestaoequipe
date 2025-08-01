import { Goal } from "@/types/goals";

export const goalsMock: Goal[] = [
	{
		id: 1,
		goalDescription: "Tempo Médio de Atendimento",
		icon: "Timer",
		targetGoal: 800,
		untilTheGoal: 0,
		userGoal: 780,
		typeGoal: false,
		dataType: "minute"
	},
	{
		id: 2,
		goalDescription: "Tempo Médio de Tratativa",
		icon: "Timer",
		targetGoal: 600,
		untilTheGoal: 0,
		userGoal: 700,
		typeGoal: false,
		dataType: "minute"
	},
	{
		id: 3,
		goalDescription: "Monitoria de Qualidade",
		icon: "Award",
		targetGoal: 90,
		untilTheGoal: 0,
		userGoal: 100,
		typeGoal: true,
		dataType: "number"
	}
	,
	{
		id: 4,
		goalDescription: "Reincidencia 24hrs",
		icon: "Repeat2",
		targetGoal: 93,
		untilTheGoal: 0,
		userGoal: 94,
		typeGoal: false,
		dataType: "percent"
	}
	,
	{
		id: 5,
		goalDescription: "Produção DU",
		icon: "ChartNoAxesCombined",
		targetGoal: 13,
		untilTheGoal: 0,
		userGoal: 20,
		typeGoal: true,
		dataType: "number"
	},
	{
		id: 6,
		goalDescription: "NPS",
		icon: "CircleCheckBig",
		targetGoal: 4.5,
		untilTheGoal: 0,
		userGoal: 4.5,
		typeGoal: true,
		dataType: "number"
	},
	{
		id: 7,
		goalDescription: "Tempo de serviço",
		icon: "BicepsFlexed",
		targetGoal: 95,
		untilTheGoal: 0,
		userGoal: 99,
		typeGoal: true,
		dataType: "percent"
	}
];