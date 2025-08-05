import { users } from "@/data/user"
import { ThemeTogle } from "./theme-toggle"
import { ProfileTrigger } from "./profile-area/profile-trigger"
import { Calendar1, Earth, EarthIcon, EarthLock, Heart, LucideEarth, RefreshCcwIcon } from "lucide-react"
import { NotificationTrigger } from "./notification-area/notifications-trigger"

export const HeaderLayout = () => {

	return (
		<div className="text-xs flex flex-row gap-4 justify-between max-w-3xl m-auto font-light">

			<div className="flex flex-row gap-6">
				<div className="flex gap-2 justify-center items-center">
					<Calendar1 className="h-5" />
					Dados do mês 07/2025
				</div>

				<div className="flex gap-2 justify-center items-center">
					<RefreshCcwIcon className="h-5" />
					Ultima atualização em 15/07/2025
				</div>

			</div>

			<div className="flex flex-row justify-center items-center">

				{/* <div className="flex gap-2 pr-2">
					Olá <strong>{users[1].name}</strong>
				</div>

				<ProfilePhoto
					alt={users[1].name}
					size={1}
					src={users[1].photoUrl}
				/>

				<ChevronDoubleDownIcon
					className="h-4 cursor-pointer hover:opacity-40"
				/> */}

				<ProfileTrigger />

				<NotificationTrigger />

				<div className="pl-4 text-foreground bg-purpleprimarybackground">
					<ThemeTogle />
				</div>

			</div>
		</div>
	)
}