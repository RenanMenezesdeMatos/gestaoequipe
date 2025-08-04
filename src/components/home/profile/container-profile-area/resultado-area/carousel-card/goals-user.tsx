type Props = {
	icon: React.JSX.Element;
	userGoal: number;
	goalDescription: string;
	targetGoal: number;
	untilTheGoal: number;
	typeGoal?: boolean;
	dataType?: "percent" | "number" | "minute";
};

export const GoalsUser = ({
	icon,
	userGoal,
	goalDescription,
	targetGoal,
	typeGoal,
	dataType
}: Props) => {
	const lastGoal = Math.abs(targetGoal - userGoal);

	const shouldWarn =
		(typeGoal === true && userGoal < targetGoal) ||
		(typeGoal === false && userGoal > targetGoal);

	// Pluralizador
	const pluralize = (value: number, singular: string, plural?: string) =>
		value === 1 ? singular : (plural ?? singular + "s");

	// Formatação do valor + unidade
	const formatValue = (value: number, type?: "percent" | "number" | "minute") => {
		switch (type) {
			case "minute":
				return `${value} ${pluralize(value, "minuto")}`;
			case "number":
				return `${value} ${pluralize(value, "ponto")}`;
			case "percent":
				return `${value} %`;
			default:
				return value.toString();
		}
	};

	// Mensagem condicional com destaque no valor
	const goalMessage = shouldWarn ? (
		<div>
			Faltam <span className="font-medium">{lastGoal}</span> {pluralize(lastGoal, dataType === "percent" ? "%" : dataType === "minute" ? "minuto" : "ponto")} para atingir a meta!
		</div>
	) : (
		<div>
			Você atingiu a meta e está a <span className="font-medium">{lastGoal}</span> {pluralize(lastGoal, dataType === "percent" ? "%" : dataType === "minute" ? "minuto" : "ponto")} da meta alvo.
		</div>
	);

	return (
		<div>
			<div className={`bg-accent/40 
			${shouldWarn ? "border-destructive bg-destructive/10" : "border"}
				 border-[1px] flex flex-col justify-center items-start rounded-md p-2 w-64 h-32
				
			`}>

				<div className="flex flex-row justify-between gap-2">
					<div className="flex justify-center items-center w-1/4">
						{icon}
					</div>

					<div>
						<div className="text-sm">{goalDescription}</div>
						<div className="text-lg text-greenprimarytext">
							<span className="text-2xl font-bold">{formatValue(userGoal, dataType)}</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col text-xs font-light ml-2">
					<div>Meta alvo de <span className="font-medium">{formatValue(targetGoal, dataType)}</span></div>
					<div>{goalMessage}</div>
				</div>

			</div>
		</div>
	);
};



export const GoalsUserSkeleton = () => {
	return (
		<div className="flex flex-row gap-4 justify-center items-center h-40 w-[98%] relative carousel p-1">

			<div className="bg-accent border border-accent flex flex-col justify-center items-start rounded-md w-64 h-32 animate-pulse">

				{/* Icon + Text */}
				<div className="flex flex-row justify-between gap-2 w-full">
					{/* Icon Placeholder */}
					<div className="flex justify-center items-center w-1/4">
						<div className="w-8 h-8 rounded-full bg-accent"></div>
					</div>

					{/* Goal Description + Number */}
					<div className="flex flex-col gap-2 w-3/4">
						<div className="w-3/4 h-4 bg-accent rounded"></div>
						<div className="w-1/2 h-5 bg-accent rounded"></div>
					</div>
				</div>

				{/* Bottom text */}
				<div className="flex flex-col gap-1 text-xs font-light ml-2 mt-3 w-full">
					<div className="w-3/4 h-3 bg-accent rounded"></div>
					<div className="w-4/5 h-3 bg-accent rounded"></div>
				</div>
			</div>


			<div className="bg-background border border-accent flex flex-col justify-center items-start rounded-md p-2 w-64 h-32 animate-pulse">

				{/* Icon + Text */}
				<div className="flex flex-row justify-between gap-2 w-full">
					{/* Icon Placeholder */}
					<div className="flex justify-center items-center w-1/4">
						<div className="w-8 h-8 rounded-full bg-accent"></div>
					</div>

					{/* Goal Description + Number */}
					<div className="flex flex-col gap-2 w-3/4">
						<div className="w-3/4 h-4 bg-accent rounded"></div>
						<div className="w-1/2 h-5 bg-accent rounded"></div>
					</div>
				</div>

				{/* Bottom text */}
				<div className="flex flex-col gap-1 text-xs font-light ml-2 mt-3 w-full">
					<div className="w-3/4 h-3 bg-accent rounded"></div>
					<div className="w-4/5 h-3 bg-accent rounded"></div>
				</div>
			</div>


			<div className="bg-background border border-accent flex flex-col justify-center items-start rounded-md p-2 w-64 h-32 animate-pulse">

				{/* Icon + Text */}
				<div className="flex flex-row justify-between gap-2 w-full">
					{/* Icon Placeholder */}
					<div className="flex justify-center items-center w-1/4">
						<div className="w-8 h-8 rounded-full bg-accent"></div>
					</div>

					{/* Goal Description + Number */}
					<div className="flex flex-col gap-2 w-3/4">
						<div className="w-3/4 h-4 bg-accent rounded"></div>
						<div className="w-1/2 h-5 bg-accent rounded"></div>
					</div>
				</div>

				{/* Bottom text */}
				<div className="flex flex-col gap-1 text-xs font-light ml-2 mt-3 w-full">
					<div className="w-3/4 h-3 bg-accent rounded"></div>
					<div className="w-4/5 h-3 bg-accent rounded"></div>
				</div>
			</div>


			<div className="bg-background border border-accent flex flex-col justify-center items-start rounded-md p-2 w-64 h-32 animate-pulse">

				{/* Icon + Text */}
				<div className="flex flex-row justify-between gap-2 w-full">
					{/* Icon Placeholder */}
					<div className="flex justify-center items-center w-1/4">
						<div className="w-8 h-8 rounded-full bg-accent"></div>
					</div>

					{/* Goal Description + Number */}
					<div className="flex flex-col gap-2 w-3/4">
						<div className="w-3/4 h-4 bg-accent rounded"></div>
						<div className="w-1/2 h-5 bg-accent rounded"></div>
					</div>
				</div>

				{/* Bottom text */}
				<div className="flex flex-col gap-1 text-xs font-light ml-2 mt-3 w-full">
					<div className="w-3/4 h-3 bg-accent rounded"></div>
					<div className="w-4/5 h-3 bg-accent rounded"></div>
				</div>
			</div>



		</div>
	);
};
