'use client'

import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

type Props = {
	href: string;
	icon: React.ElementType;
	label: string;
};

export const LinkNewSidebar = ({ href, icon: Icon, label }: Props) => {
	return (
		<div>
			<TooltipProvider delayDuration={120}>
				<Tooltip>
					<TooltipTrigger asChild>

						<Link
							href={href}
							className="flex h-9 w-9 shrink-0 items-center justify-center text-muted-foreground hover:text-foreground rounded-md"
						>
							<Icon className="h-5 w-5" />
							<span className="sr-only">{label}</span>
						</Link>

					</TooltipTrigger>

					<TooltipContent side="right">
						{label}
					</TooltipContent>

				</Tooltip>

			</TooltipProvider>
		</div>
	);
};