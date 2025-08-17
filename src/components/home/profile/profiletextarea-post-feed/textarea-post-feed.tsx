import { AvatarCustom } from "@/components/ui/custom/avatar-custom"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { users } from "@/data/user"
import { Globe2, Users } from "lucide-react"
import { SelectPublicationScopeField } from "@/components/home/profile/profiletextarea-post-feed/select-publication-scope-field"
import { Dispatch, SetStateAction } from "react"
import { TextareaForm } from "./textarea-form"

type PropsTextAreaPostFeedDialog = {
	selectedOption: string
	setSelectedOption: Dispatch<SetStateAction<string>>
}

// Função que retorna o ícone de acordo com a opção selecionada
const getScopeIcon = (scope: string) => {
	switch (scope) {
		case "meu-time":
			return <Users className="w-4 h-4 text-purpleprimarytext" />
		case "todos":
			return <Globe2 className="w-4 h-4 text-purpleprimarytext" />
		default:
			return <Globe2 className="w-4 h-4 text-purpleprimarytext" />
	}
}

export const TextAreaPostFeedDialog = ({ selectedOption, setSelectedOption }: PropsTextAreaPostFeedDialog) => {
	const publishTo = true

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="flex justify-start w-full text-left font-thin cursor-text border-accent-foreground/20"
				>
					Digite aqui o que está pensando...
				</Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-[425px] md:max-w-[700px] sm:min-h-[425px] md:min-h-[700px]">
				<div className="flex flex-col gap-4">
					<div className="flex items-center gap-4">
						<AvatarCustom
							alt={users[1].name}
							src={users[1].photoUrl}
							size="xl"
						/>
						<div className="flex flex-col p-2">
							<span className="text-2xl text-purpleprimarytext font-semibold m-0 p-0">
								{users[1].name}
							</span>

							<div className="flex items-center gap-2">
								<span className="text-accent-foreground/50 text-sm">
									{/* Publicado para seu grupo: */}
									{selectedOption === "meu-time" && "Publicado para: Meu Time"}
									{selectedOption === "todos" && "Publicado para: Todos"}
								</span>

								{getScopeIcon(selectedOption)} {/* Ícone condicional */}

								<SelectPublicationScopeField
									selectedOption={selectedOption}
									setSelectedOption={setSelectedOption}
								/>
							</div>
						</div>
					</div>

					<div className="w-full h-full">
						<TextareaForm />
					</div>
				</div>
			</DialogContent>
		</Dialog>
	)
}
