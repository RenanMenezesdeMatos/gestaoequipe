export type Goal = {
	id: number;
	goalDescription: string;
	icon: string;
	targetGoal: number;
	untilTheGoal: number;
	userGoal: number;
	typeGoal: boolean;
	dataType: "percent" | "number" | "minute"
}