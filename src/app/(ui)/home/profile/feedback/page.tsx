import { FeedbackContent } from "@/components/home/container-profile/profile-area/feedback-content";


type Props = {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	return (
		<div className="h-full w-full px-12">
			<h1 className="font-robotoSlab text-3xl text-purple-primary mb-8">Histórico de Feedbacks</h1>

			<FeedbackContent />

			<FeedbackContent />

			<FeedbackContent />

		</div>
	)
}