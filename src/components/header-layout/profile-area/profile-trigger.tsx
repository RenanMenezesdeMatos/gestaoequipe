import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { ChevronDown } from "lucide-react"
import { Card } from "../../ui/card";
import { AvatarCustom } from "../../ui/custom/avatar-custom";
import { users } from "@/data/user";
import { ProfileCommand } from "./profile-command";


export const ProfileTrigger = () => {
	return (
		<Popover>
			<PopoverTrigger asChild>

				<Card className="flex justify-center items-center border-transparent cursor-pointer bg-transparent">

					<AvatarCustom
						alt={users[1].name}
						src={users[1].photoUrl}
					/>

					<ChevronDown className="w-4 h-4 ml-[1.5px] text-white hover:text-white/60 hover:bg-purple-secondary rounded-md" />

				</Card>

			</PopoverTrigger>
			<PopoverContent className="w-72">
				<div className="grid gap-4">
					<div className="space-y-2">
						<div className="flex gap-4">
							<AvatarCustom
								alt={users[1].name}
								src={users[1].photoUrl}
							/>

							<div className="flex flex-col">
								<h4 className="leading-none font-medium">{users[1].name}</h4>
								<p className="text-muted-foreground text-xs">
									{users[1].position}
								</p>

								{/* <span className="w-full h-px bg-muted-foreground/20 mt-2"></span> */}

							</div>

						</div>

						<div>
							<ProfileCommand />
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}