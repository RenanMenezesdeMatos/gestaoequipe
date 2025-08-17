import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, } from "@/components/ui/dialog"

type ChallengeDialogProps = {
	title?: string;
	description?: string;
	content?: React.ReactNode;
	howToCalculate?: React.ReactNode;
}


export function ChallengeDialog({ title, description, content, howToCalculate }: ChallengeDialogProps) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button
					variant="outline"
					className="w-full bg-greenprimarybackground text-white hover:bg-greenprimarybackground"
					size="lg"> Regras </Button>
			</DialogTrigger>

			<DialogContent className="sm:max-w-2xl rounded-md">

				<DialogHeader>

					<DialogTitle className="text-3xl text-purpleprimarytext">{title}</DialogTitle>

					<DialogDescription>
						{description || "Veja as regras do desafio e como calcular os pontos."}
					</DialogDescription>

				</DialogHeader>

				{content && (
					<Card className="rounded-md shadow-none">
						<CardContent className="px-4 py-2">
							{content}
						</CardContent>
					</Card>)}

				{howToCalculate && (
					<>
						<h4 className="text-lg font-semibold mb-2 text-purpleprimarytext">Como calcular:</h4>
						<Card className="rounded-md shadow-none">
							<CardContent className="px-4 py-2">
								{howToCalculate}
							</CardContent>
						</Card>
					</>

				)}

				<DialogFooter className="sm:justify-start">
					<DialogClose asChild>
						<Button type="button" variant="secondary" className="bg-purpleprimarybackground text-white hover:bg-purpleseprimarytext">
							Fechar
						</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
