"use client"
import * as React from "react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { GetChartBarMultiple } from "./get-chart-bar-multiple"

export const description = "An interactive area chart"

type ChartDataItem = {
	date: string;
	producao: number;
	desafio: number;
};


const chartConfig = {
	visitors: {
		label: "Visitors",
	},
	producao: {
		label: "Produção",
		color: "var(--chart-1)",
	},
	desafio: {
		label: "Desafio",
		color: "var(--chart-2)",
	},
} satisfies ChartConfig
export function ChartAreaInteractive() {
	const [charData, setChartData] = React.useState<ChartDataItem[]>([]);

	React.useEffect(() => {
		async function fetchMenu() {
			const itens = await GetChartBarMultiple("G0055350");
			setChartData(itens);
		};

		console.log(charData)

		fetchMenu();
	}, ["G0055350"])



	const [timeRange, setTimeRange] = React.useState("90d")
	const filteredData = charData.filter((item) => {
		const date = new Date(item.date)
		const referenceDate = new Date("2024-06-30")
		let daysToSubtract = 90
		if (timeRange === "30d") {
			daysToSubtract = 30
		} else if (timeRange === "7d") {
			daysToSubtract = 7
		}
		const startDate = new Date(referenceDate)
		startDate.setDate(startDate.getDate() - daysToSubtract)
		return date >= startDate
	})
	return (
		<Card className="pt-0 w-full bg-accent/40 rounded-md">
			<CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
				<div className="grid flex-1 gap-1">
					<CardTitle>Histórico de resultados</CardTitle>
					<CardDescription>
						Histórico dos últimos 3 meses de produção
					</CardDescription>
				</div>

				<Select value={timeRange} onValueChange={setTimeRange}>

					<SelectTrigger
						className="hidden w-[160px] rounded-md sm:ml-auto sm:flex"
						aria-label="Select a value"
					>

						<SelectValue placeholder="Last 3 months" />

					</SelectTrigger>

					<SelectContent className="rounded-md">
						<SelectItem value="90d" className="rounded-md">
							Últimos 3 meses
						</SelectItem>
						<SelectItem value="30d" className="rounded-md">
							Últimos 30 dias
						</SelectItem>
						<SelectItem value="7d" className="rounded-md">
							Últimos 7 dias
						</SelectItem>
					</SelectContent>

				</Select>
			</CardHeader>
			<CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
				<ChartContainer
					config={chartConfig}
					className="aspect-auto h-[250px] w-full"
				>
					<AreaChart data={filteredData}  >
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="35%"
									stopColor="var(--color-purple-primary)"
									stopOpacity={1}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-purple-primary)"
									stopOpacity={0.3}
								/>
							</linearGradient>
							<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="10%"
									stopColor="var(--color-pink-primary)"
									stopOpacity={1}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-pink-primary)"
									stopOpacity={0.3}
								/>
							</linearGradient>
						</defs>
						<CartesianGrid vertical={false} />

						<XAxis
							className="font-regular text-xs"
							dataKey="date"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							minTickGap={32}
							tickFormatter={(value) => {
								const date = new Date(value)
								return date.toLocaleDateString("pt-br", {
									month: "2-digit",
									day: "2-digit",
								})
							}}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									labelFormatter={(value) => {
										return new Date(value).toLocaleDateString("pt-br", {
											month: "short",
											day: "numeric",
										})
									}}
									indicator="line"
								/>
							}
						/>
						<Area
							dataKey="desafio"
							type="natural"
							fill="url(#fillMobile)"
							stroke="var(--color-pink-primary)"
							stackId="a"
						/>
						<Area
							dataKey="producao"
							type="natural"
							fill="url(#fillDesktop)"
							stroke="var(--color-purple-primary)"
							stackId="a"
						/>
						<ChartLegend content={<ChartLegendContent />} />
					</AreaChart>
				</ChartContainer>
			</CardContent>
		</Card>
	)
}
