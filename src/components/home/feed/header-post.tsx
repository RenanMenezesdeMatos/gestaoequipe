import { AvatarCustom } from "@/components/ui/custom/avatar-custom";
import { Earth, Users, WholeWord } from "lucide-react";
import { Post } from "@/types/posts";
import { formatRelativeTime } from "@/utils/format-relative";


type HeaderPostProps = {
	post: Post;
};

export const HeaderPost = ({ post }: HeaderPostProps) => {
	return (
		<div className="flex justify-center items-center gap-2">
			<div className="flex gap-2 items-center px-3">
				<AvatarCustom
					alt={post.author.name}
					src={post.author.avatarUrl}
					size="sm"
				/>
				<span className="text-pinkprimarytext text-base">
					{post.author.name}
				</span>
			</div>

			<div className="flex gap-3 items-end text-xs sm:text-sm">
				<div className="flex gap-1 items-end">
					{post.visibility === "Publicado para seu time" ?
						<Users className="w-4 text-purpleprimarytext" /> :
						<Earth className="w-4 text-purpleprimarytext" />
					}

					<span>{post.visibility}</span>
				</div>
				<span>|</span>
				<span>{post.author.team}</span>
				<span>|</span>
				<div>{post.author.role}</div>
				<span>|</span>
				<div>Publicado <span className="font-medium">{formatRelativeTime(new Date(post.publishedAt))}</span></div>
				{/* aqui pode formatar com date-fns para calcular o tempo real */}
			</div>
		</div>
	);
};
