import * as React from "react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem
} from "@/components/ui/dropdown-menu"
import { ChevronDown, Globe2, Users } from "lucide-react"
import { Dispatch, SetStateAction } from "react"
import { DropdownMenuItemIndicator } from "@radix-ui/react-dropdown-menu"

type PropsSelectPublicationScopeField = {
	selectedOption: string
	setSelectedOption: Dispatch<SetStateAction<string>>
}

export const SelectPublicationScopeField = ({ selectedOption, setSelectedOption }: PropsSelectPublicationScopeField) => {
	const configDropDown = `
    m-1
    relative
    px-6
    py-2
    rounded-sm
    data-[state=checked]:bg-accent
    data-[state=checked]:text-accent-foreground
    data-[state=checked]:border
    hover:bg-accent
    hover:text-accent-foreground
	
  `

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<ChevronDown className="cursor-pointer text-accent-foreground/60 hover:text-accent-foreground/10" />
			</DropdownMenuTrigger>

			<DropdownMenuContent className="w-[180px]" sideOffset={1}>
				<DropdownMenuRadioGroup
					value={selectedOption}
					onValueChange={setSelectedOption}
				>
					<DropdownMenuRadioItem
						value="meu-time"
						className={`${configDropDown}`}

					>
						<DropdownMenuItemIndicator className="">
							<Users className="w-4 h-4 text-purpleprimarytext right-2 relative" />
						</DropdownMenuItemIndicator>
						{selectedOption !== "meu-time" && <Users className="w-4 h-4 text-muted-foreground right-2 relative" />}
						<span className={`${selectedOption === "meu-time" ? "text-purpleprimarytext font-medium" : ""}`}>Meu Time</span>
					</DropdownMenuRadioItem>

					<DropdownMenuRadioItem
						value="todos"
						className={configDropDown}
					>
						<DropdownMenuItemIndicator className="">
							<Globe2 className="w-4 h-4 text-purpleprimarytext right-2 relative" />
						</DropdownMenuItemIndicator>
						{selectedOption !== "todos" && <Globe2 className="w-4 h-4 text-muted-foreground right-2 relative" />}

						<span className={`${selectedOption === "todos" ? "text-purpleprimarytext font-medium" : ""}`}>Todos</span>

					</DropdownMenuRadioItem>
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
