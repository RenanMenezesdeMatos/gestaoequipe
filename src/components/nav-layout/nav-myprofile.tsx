import { users } from "@/data/user"
import Link from "next/link"
import { ProfilePhoto } from "../ui/profile-photo"

export const NavMyProfile = () => {

	return (
		<div className="flex items-center gap-2 mb-4">
			<div className="">
				<Link href={`/${users[1].id}`}>

					<ProfilePhoto
						alt={users[1].name}
						size={1}
						src={users[1].photoUrl}
					/>

				</Link>
			</div>

			<div className="flex flex-col justify-center overflow-hidden">

				<div className="text-green-primary font-medium block truncate">
					{users[1].name}
				</div>

				<div className="text-xs text-gray-400 block truncate">
					{users[1].position}
				</div>
			</div>

		</div>

	)
}