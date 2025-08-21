import { PostsFeed } from "./posts-feed";

export const FeedArea = () => {
	return (
		<div className="flex flex-col gap-4 h-full w-full p-6 font-roboto text-sm font-light m-2">

			<PostsFeed />

		</div>
	);
}