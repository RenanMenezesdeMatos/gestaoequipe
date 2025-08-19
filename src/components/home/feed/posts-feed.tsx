
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { AvatarCustom } from "@/components/ui/custom/avatar-custom";
import { BookmarkPlus, Heart, MessageSquareText, Tags, Users } from "lucide-react";
import { users } from "@/data/user";
import { CommentArea } from "./comment-area";

export const PostsFeed = () => {

	return (
		<div className="border-b border-dashed">
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

			<div className="flex gap-4 justify-between items-center px-4 pb-6">

				<div className="relative flex gap-2 p-1 justify-center items-center">

					<Tags className="-left-5 absolute p-1 text-accent-foreground/30" />

					<div className="flex gap-2 p-1 rounded-full border border-accent-foreground/20">

						<span className="rounded-full bg-accent-foreground/10 px-4 py-1 text-accent-foreground/80 text-xs flex items-center">Avisos</span>

						<span className="rounded-full bg-accent-foreground/10 px-4 py-1 text-accent-foreground/80 text-xs flex items-center">Processos</span>

						<span className="rounded-full bg-destructive px-4 py-1  text-xs flex items-center text-destructive-foreground">Importante!</span>

					</div>

					<div className="relative flex gap-2 p-1 rounded-full">
						<div className="rounded-full bg-accent-foreground/10 px-2 py-1 text-accent-foreground/80 text-xs flex items-center justify-between gap-2">
							<Heart className="w-4 h-4 text-red-500 cursor-pointer hover:text-red-700" fill="currentColor" stroke="none" /><span className="font-bold">234</span> Curtidas
						</div>
					</div>

					<div className="relative flex gap-2 p-1 rounded-full ">
						<div className="rounded-full bg-accent-foreground/10 px-2 py-1 text-accent-foreground/80 text-xs flex items-center justify-between gap-2">
							<MessageSquareText className="w-4 h-4" /><span className="font-bold">234</span> Comentários
						</div>
					</div>

				</div>



				<span className="flex items-center text-xl"><BookmarkPlus className="w-5 h-5 text-accent-foreground/60" />...</span>

			</div>

			<CommentArea />

		</div>
	);
}