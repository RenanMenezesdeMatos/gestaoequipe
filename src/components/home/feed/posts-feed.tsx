import { Card, CardContent } from "@/components/ui/card";
import { MessageSquareText, Tags } from "lucide-react";
import { CommentArea } from "./comment-area";
import { HeartLikeArea } from "./heart-like-area";
import { HeaderPost } from "./header-post";
import { PostTags } from "./post-tags";
import { mockPosts } from "@/data/mock-posts";

export const PostsFeed = () => {
	return (
		<div className="border-b border-dashed">
			{mockPosts
				.sort(
					(a, b) =>
						new Date(b.publishedAt).getTime() -
						new Date(a.publishedAt).getTime()
				)
				.map((post) => (
					<div key={post.id} className="mb-6">
						{/* Header */}
						<div className="flex items-center text-sm gap-6 text-accent-foreground/60 mb-4">
							<HeaderPost post={post} />
						</div>

						{/* Conteúdo */}
						<Card className="px-3 border-none shadow-none">
							<CardContent className="p-1 mt-3 w-[70%] mb-2">
								{post.content}
							</CardContent>
						</Card>

						{/* Tags + Curtidas + Comentários */}
						<div className="flex gap-4 justify-between items-center px-4 pb-6">
							<div className="relative flex gap-2 items-center">
								<Tags className="text-accent-foreground/30 w-5 h-5" />
								<PostTags tags={post.tags} />
								<HeartLikeArea
									postId={post.id}
									initialLikes={post.likes}
									initialIsLiked={post.isLiked}
								/>
								<div className="rounded-full bg-accent-foreground/10 px-2 py-1 text-accent-foreground/80 text-xs flex items-center gap-2">
									<MessageSquareText className="w-4 h-4" />
									<span className="font-bold">{post.comments}</span> Comentários
								</div>
							</div>
						</div>

						{/* Área de comentário */}
						<CommentArea />
					</div>
				))}
		</div>
	);
};
