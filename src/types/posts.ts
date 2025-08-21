export type Post = {
	id: string;
	author: {
		name: string;
		role: string;
		team: string;
		avatarUrl: string;
	};
	publishedAt: string; // ISO string ou "há X dias"
	visibility: string;
	content: string;
	tags: string[];
	likes: number;
	comments: number;
	isLiked: boolean;
};
