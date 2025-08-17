import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AvatarCustom } from "@/components/ui/custom/avatar-custom";
import { Users } from "lucide-react";
import { users } from "@/data/user";

export const PostsFeed = () => {
	return (
		<div>
			<div className="flex items-center gap-8 text-accent-foreground/60 mb-4">
				<div className="flex gap-2 items-center px-3">
					<AvatarCustom
						alt={users[4].name}
						src={users[4].photoUrl}
						size="sm"
					/>
					<span className="text-pinkprimarytext text-base">{users[4].name}</span>
				</div>

				<div>Publucado há 5 dias atrás</div>

				<span className="flex gap-1 items-end">
					<Users className="w-4" />
					Publicado para seu time
				</span>

			</div>

			<Card className="px-3 border-none shadow-none">
				<CardTitle className="text-purpleprimarytext font-normal"> Titulo do Post

				</CardTitle>
				<CardContent className="p-1 mt-3 w-[70%] mb-2"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda veniam, eius accusantium rerum quam molestiae doloribus velit hic temporibus in maiores quae sed saepe eaque odit magni, aperiam similique ratione.
				</CardContent>
			</Card>

			<div className="flex gap-4 justify-between px-4 border-b pb-6">

				<div className="flex gap-5">
					<span className="rounded-full bg-accent-foreground/10 px-4 py-1 text-accent-foreground/80 text-xs flex items-center">Avisos</span>

					<span className="rounded-full bg-accent-foreground/10 px-4 py-1 text-accent-foreground/80 text-xs flex items-center">Processos</span>
				</div>

				<span className="rounded-full bg-accent-foreground/10 px-4 py-1 text-accent-foreground/80 text-xs flex items-center">Salvar Post</span>

			</div>

		</div>
	);
}