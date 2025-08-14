import { NotificationUser } from "@/data/mock-notifications";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { NotificationContent } from "./notifications-content";

type NotificationTabsProps = {
	notifications: NotificationUser[];
	onNotificationClick: (id: string) => void;
};

export function NotificationTabs({ notifications, onNotificationClick }: NotificationTabsProps) {

	return (
		<div className="flex w-full max-w-sm flex-col gap-6">
			<Tabs defaultValue="all">
				<TabsList className="flex mb-4">
					<TabsTrigger value="all">Tudo</TabsTrigger>
					<TabsTrigger value="myteam">Meu Time</TabsTrigger>
					<TabsTrigger value="like">Like e Comentário</TabsTrigger>
				</TabsList>

				<div className="h-[500px] overflow-y-auto">
					<TabsContent value="all" className="mr-3">

						{notifications
							.filter((n) => n.isRead === false)
							.map((n) => (
								<NotificationContent
									key={n.id}
									notification={n}
									onClick={onNotificationClick}
								/>
							))}

						<div className="flex items-center gap-2 my-2 text-xs text-muted-foreground">
							<div className="flex-1 h-px bg-muted-foreground/20" />
							<span>lidos</span>
							<div className="flex-1 h-px bg-muted-foreground/20" />
						</div>

						{notifications
							.filter((n) => n.isRead === true)
							.map((n) => (
								<NotificationContent
									key={n.id}
									notification={n}
									onClick={onNotificationClick}
								/>
							))}


					</TabsContent>

					<TabsContent value="myteam" className="mr-3">

						{notifications
							.filter((n) => n.type === "team" && n.isRead === false)
							.map((n) => (
								<NotificationContent
									key={n.id}
									notification={n}
									onClick={onNotificationClick}
								/>
							))}


						<div className="flex items-center gap-2 my-2 text-xs text-muted-foreground">
							<div className="flex-1 h-px bg-muted-foreground/20" />
							<span>lidos</span>
							<div className="flex-1 h-px bg-muted-foreground/20" />
						</div>


						{notifications
							.filter((n) => n.type === "team" && n.isRead === true)
							.map((n) => (
								<NotificationContent
									key={n.id}
									notification={n}
									onClick={onNotificationClick}
								/>
							))}

					</TabsContent>

					<TabsContent value="like" className="mr-3">

						{notifications
							.filter((n) => n.type === "like" || n.type === "comment")
							.filter((n) => n.isRead === false)
							.map((n) => (
								<NotificationContent
									key={n.id}
									notification={n}
									onClick={onNotificationClick}
								/>
							))}

						<div className="flex items-center gap-2 my-2 text-xs text-muted-foreground">
							<div className="flex-1 h-px bg-muted-foreground/20" />
							<span>lidos</span>
							<div className="flex-1 h-px bg-muted-foreground/20" />
						</div>

						{notifications
							.filter((n) => n.type === "like" || n.type === "comment")
							.filter((n) => n.isRead === true)
							.map((n) => (
								<NotificationContent
									key={n.id}
									notification={n}
									onClick={onNotificationClick}
								/>
							))}

					</TabsContent>
				</div>
			</Tabs>
		</div>
	);
}
