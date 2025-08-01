import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


type Props = {
	label: string,
	icon: React.JSX.Element;
}

export const Medal = ({ label, icon }: Props) => {

	return (
		<TooltipProvider delayDuration={120}>
			<Tooltip>
				<div className=" flex flex-col justify-center items-center mx-2 text-purpleprimarytext">


					<TooltipTrigger asChild>
						<div className="flex flex-col justify-center items-center w-12 h-12 border-muted-foreground/10 border-[1px] rounded-full bg-accent hover:border-2 hover:border-solid hover:border-greenprimarytext hover:text-greenprimarytext transition-all duration-100 ease-in-out">
							<div className=" w-8 h-8">
								{icon}
							</div>
						</div>
					</TooltipTrigger>


					<TooltipContent align="center" side="top">
						<span className="p-2 text-sm text-popover-foreground/60 font-medium">
							{label}
						</span>
					</TooltipContent>

				</div>

			</Tooltip >
		</TooltipProvider >
	);
}