type Props = {
	icon: React.JSX.Element;
	userGoal: number;
	goalDescription: string;
	targetGoal: number;
	untilTheGoal: number;
}

export const GoalsUser = ({ icon, userGoal, goalDescription, targetGoal }: Props) => {
	const lastGoal = userGoal - targetGoal

	return (

		<div>

			<div className="bg-backgroundcolor border-[1px] border-gray-200 flex flex-col justify-center items-start rounded-md p-2 w-64 h-32">

				<div className="flex flex-row justify-between gap-2">
					<div className="flex justify-center items-center w-1/4">
						{icon}
					</div>

					<div className="">
						<div className="text-sm">{goalDescription}</div>
						<div className="text-lg text-green-primary"> <span className="text-2xl font-bold">{userGoal}</span> segundos</div>
					</div>

				</div>

				<div className="flex flex-col text-xs font-light ml-2">
					<div>Meta alvo de {targetGoal}</div>
					<div>falta {lastGoal} segundo para atingir a meta!</div>
				</div>

			</div>

		</div>
	);
}
