import { ClockIcon } from "@heroicons/react/24/solid";
import { GoalsUser } from "./goals-user";

export const ContainerResultado = () => {
	return (
		<div className="flex flex-row justify-center items-center h-40 w-[98%] p-2 gap-4  overflow-x-scroll mt-1">

			<GoalsUser
				goalDescription="Tempo médio de Atendimento"
				icon={<ClockIcon className="size-12 text-pink-primary" />}
				targetGoal={800}
				untilTheGoal={125}
				userGoal={885}
			/>

			<GoalsUser
				goalDescription="Tempo médio de Atendimento"
				icon={<ClockIcon className="size-12 text-pink-primary" />}
				targetGoal={800}
				untilTheGoal={125}
				userGoal={885}
			/>


			<GoalsUser
				goalDescription="Tempo médio de Atendimento"
				icon={<ClockIcon className="size-12 text-pink-primary" />}
				targetGoal={800}
				untilTheGoal={125}
				userGoal={885}
			/>


			<GoalsUser
				goalDescription="Tempo médio de Atendimento"
				icon={<ClockIcon className="size-12 text-pink-primary" />}
				targetGoal={800}
				untilTheGoal={125}
				userGoal={885}
			/>

			<GoalsUser
				goalDescription="Tempo médio de Atendimento"
				icon={<ClockIcon className="size-12 text-pink-primary" />}
				targetGoal={800}
				untilTheGoal={125}
				userGoal={885}
			/>

		</div>
	);
}