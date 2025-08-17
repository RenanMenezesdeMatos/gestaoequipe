"use client"

import { FeedArea } from "@/components/home/feed/feed-area"
import { TextAreaPostFeedDialog } from "@/components/home/profile/profiletextarea-post-feed/textarea-post-feed"
import { Card, CardContent } from "@/components/ui/card"
import { AvatarCustom } from "@/components/ui/custom/avatar-custom"
import { users } from "@/data/user"
import { useState } from "react"

export default function ProfilePage({ params }: { params: { slug: string } }) {
	const [selectedOption, setSelectedOption] = useState("meu-time")
	const souEu = true

	return (
		<div className="w-full gap-6 px-8 flex flex-col items-center justify-center">
			<Card className="flex flex-col w-full shadow-none text-sm border-none">
				<div className="flex justify-center w-full mb-[-40px]">
					<Card className="md:w-[700px] md:max-w-[800px] m-4 bg-transparent border-none shadow-none">
						<CardContent className="flex gap-6 p-6 bg-accent/50 border border-accent-foreground/30 rounded-md">

							<AvatarCustom
								alt={users[1].name}
								src={users[1].photoUrl}
								size="md"
							/>

							{/* Passa o estado para o Dialog */}
							<TextAreaPostFeedDialog
								selectedOption={selectedOption}
								setSelectedOption={setSelectedOption}
							/>

						</CardContent>
					</Card>
				</div>
			</Card>

			<FeedArea />

		</div>
	)
}
