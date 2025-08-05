import { Popover, PopoverContent, PopoverTrigger, } from "@/components/ui/popover"
import { EarthIcon } from "lucide-react"
import { Card } from "../../ui/card";
import { NotificationTabs } from "./notifications-tabs";


export const NotificationTrigger = () => {
	return (
		<Popover>
			<PopoverTrigger asChild className="ml-4 text-white">

				<Card className="flex justify-center items-center border-transparent cursor-pointer bg-transparent">
					<EarthIcon />
				</Card>

			</PopoverTrigger>

			<PopoverContent className="w-84">
				<div className="grid gap-4">
					<div className="space-y-2">
						<div className="flex gap-4">

							<NotificationTabs />

						</div>

						<div>

						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	);
}