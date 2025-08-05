import { Calculator, Calendar, LogOutIcon, Settings, Smile, User, } from "lucide-react"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from "@/components/ui/command"

export function ProfileCommand() {
	return (
		<Command className="md:min-w-full">
			<CommandInput placeholder="Buscar" />
			<CommandList>

				<CommandEmpty>Busca não encontrada.</CommandEmpty>

				<CommandGroup heading="Em breve">

					<CommandItem disabled>
						<Smile />
						<span>Humor</span>
					</CommandItem>

					<CommandItem disabled>
						<Calendar />
						<span>Calendário</span>
					</CommandItem>

					<CommandItem disabled>
						<Calculator />
						<span>Simulador de PIV</span>
					</CommandItem>

				</CommandGroup>

				<CommandSeparator />

				<CommandGroup heading="Configurações">

					<CommandItem>
						<User />
						<span>Perfil</span>
						<CommandShortcut>⌘P</CommandShortcut>
					</CommandItem>

					<CommandItem>
						<Settings />
						<span>Configurações</span>
						<CommandShortcut>⌘C</CommandShortcut>
					</CommandItem>

					<CommandItem>
						<LogOutIcon />
						<span>Sair</span>
						<CommandShortcut>⌘S</CommandShortcut>
					</CommandItem>

				</CommandGroup>

			</CommandList>
		</Command>
	)
}
