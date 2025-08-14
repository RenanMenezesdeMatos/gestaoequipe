import { FeedbackContent } from "@/components/home/profile/profile-area/feedback-content";


type Props = {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	return (
		<div className="h-full w-full px-12">
			<h1 className="font-robotoSlab text-3xl text-purpleprimary mb-8 text-foreground">Histórico de Feedbacks</h1>

			<FeedbackContent />

			<FeedbackContent />

			<FeedbackContent />

		</div>
	)
}