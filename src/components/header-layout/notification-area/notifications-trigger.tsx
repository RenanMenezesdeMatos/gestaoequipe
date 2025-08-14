"use client"

import { useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Bell } from "lucide-react"
import { Card } from "../../ui/card"
import { NotificationTabs } from "./notifications-tabs"
import { mockNotifications, NotificationUser } from "@/data/mock-notifications"
import { Badge } from "@/components/ui/badge"

export const NotificationTrigger = () => {
	const [notifications, setNotifications] = useState<NotificationUser[]>(mockNotifications);

	const unreadCount = notifications.filter(n => !n.isRead).length

	const markOneAsRead = (id: string) => {
		setNotifications(item =>
			item.map(n =>
				n.id === id ? { ...n, isRead: true } : n
			)
		)
	}

	return (
		<Popover>
			<PopoverTrigger asChild className="ml-4 text-white relative">
				<Card className="flex justify-center items-center border-transparent cursor-pointer bg-transparent relative">
					<Bell className="hover:text-white/70" />
					{unreadCount > 0 && (
						<Badge
							variant="destructive"
							className="absolute -top-2 -right-2 px-1 py-0 text-[10px] leading-none rounded-full h-4 min-w-4 flex justify-center items-center"
						>
							{unreadCount}
						</Badge>
					)}
				</Card>
			</PopoverTrigger>

			<PopoverContent className="w-84">
				<div className="grid gap-4">
					<div className="space-y-2">
						<div className="flex gap-4">
							<NotificationTabs
								notifications={notifications}
								onNotificationClick={markOneAsRead}
							/>
						</div>
					</div>
				</div>
			</PopoverContent>
		</Popover>
	)
}
