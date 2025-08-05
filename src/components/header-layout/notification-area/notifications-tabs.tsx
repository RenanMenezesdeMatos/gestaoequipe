import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function NotificationTabs() {
	return (
		<div className="flex w-full max-w-sm flex-col gap-6">

			<Tabs defaultValue="all" className="">

				<TabsList className="flex ">
					<TabsTrigger value="all">Tudo</TabsTrigger>
					<TabsTrigger value="myteam">Meu Time</TabsTrigger>
					<TabsTrigger value="like">Like e Comentário</TabsTrigger>
				</TabsList>

				<TabsContent value="all">

				</TabsContent>

				<TabsContent value="myteam">

				</TabsContent>

				<TabsContent value="like">

				</TabsContent>
			</Tabs>

		</div >
	)
}
