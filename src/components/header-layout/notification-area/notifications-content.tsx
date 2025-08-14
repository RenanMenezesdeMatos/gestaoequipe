import { Card, CardContent } from "@/components/ui/card";
import { AvatarCustom } from "@/components/ui/custom/avatar-custom";
import { formatRelativeTime } from "@/utils/format-relative";
import { NotificationUser } from "@/data/mock-notifications";

type NotificationContentProps = {
	notification: NotificationUser;
	onClick?: (id: string) => void;
};

export const NotificationContent = ({ notification, onClick }: NotificationContentProps) => {

	const { id, userAction, message, date, isRead } = notification;

	return (
		<div
			className={`flex flex-col items-end w-full border-b border-dotted border-muted-foreground/15 mb-2`}
			onClick={() => onClick?.(id)}
		>
			<div className="text-[10px] text-accent-foreground/60 mb-[2px] mr-3">
				Publicado <span className="font-bold">{formatRelativeTime(new Date(date))}</span>
			</div>

			<Card
				className={`w-full flex justify-center items-center rounded-md px-3 py-2 text-sm mb-3 cursor-pointer transition-colors shadow-none
          ${!isRead
						? "bg-muted hover:bg-muted-foreground/20 border-transparent"
						: "bg-transparent border-transparent cursor-auto"}
        `}
			>
				<AvatarCustom
					alt={userAction.name}
					src={userAction.avatar}
				/>

				<CardContent
					className="relative w-[210px] max-h-[55px] overflow-hidden text-xs break-words pl-3">

					<span
						className="text-sm font-semibold">
						{userAction.name}
					</span>

					<br />

					<span className="text-muted-foreground">{message}</span>

				</CardContent>
			</Card>
		</div>
	);
};
