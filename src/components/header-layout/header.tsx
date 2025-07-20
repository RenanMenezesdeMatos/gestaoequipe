import { users } from "@/data/user"
import { ArrowPathIcon, CalendarDateRangeIcon, ChevronDoubleDownIcon } from "@heroicons/react/20/solid"
import { ProfilePhoto } from "../ui/profile-photo"

export const HeaderLayout = () => {

	return (
		<div className="text-xs flex flex-row gap-4 justify-between max-w-3xl m-auto font-light">

			<div className="flex flex-row gap-6">
				<div className="flex gap-2 justify-center items-center">
					<CalendarDateRangeIcon className="size-5" />
					Dados do mês 07/2025
				</div>

				<div className="flex gap-2 justify-center items-center">
					<ArrowPathIcon className="size-5" />
					Ultima atualização em 15/07/2025
				</div>

			</div>

			<div className="flex flex-row justify-center items-center">

				<div className="flex gap-2 pr-2">
					Olá <strong>{users[1].name}</strong>
				</div>

				<ProfilePhoto
					alt={users[1].name}
					size={1}
					src={users[1].photoUrl}
				/>

				<ChevronDoubleDownIcon
					className="size-4 cursor-pointer hover:opacity-40"
				/>

			</div>
		</div>
	)
}