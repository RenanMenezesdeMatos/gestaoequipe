'use client';

import { useEffect, useState } from "react";
import { challengeColumns, MockChallengeIndicatos, Indicator, Column } from "@/data/mock-challengers-indicator";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import { LibIcons } from "@/lib/lib-icons";

export const ChallengeArea = () => {
	const [data, setData] = useState<Indicator[] | null>(null); // começa nulo
	const [dataCollumn, setDataCollumn] = useState<Column[] | null>(null); // começa nulo

	useEffect(() => {
		const loadData = async () => {
			// simula delay, como se fosse fetch
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setData(MockChallengeIndicatos); // carrega dados
			setDataCollumn(challengeColumns); // carrega colunas
		};

		loadData();
	}, []);

	// só renderiza quando ambos os dados estiverem carregados
	if (!data || !dataCollumn) {
		return <div className="text-center text-purpleprimarytext text-xl mt-10">Carregando dados...</div>;
	}

	function orderedData(indicator: Indicator[]) {
		return indicator.toSorted((a, b) => {
			const boosterA = a.booster ?? 0; // se não tiver booster, considera 0
			const boosterB = b.booster ?? 0;

			// primeiro ordena pelo booster (maior primeiro)
			if (boosterA !== boosterB) return boosterB - boosterA;

			// depois ordena pelos pontos (maior primeiro)
			return b.pontos - a.pontos;
		});
	}

	const ordered = orderedData(data);
	console.log(ordered)

	return (
		<div className="h-full w-full flex flex-col gap-2 p-2">

			{/* Cabeçalho dinâmico , inserir ${dataCollumn.length} no grid-cols-...*/}
			<div className={`grid grid-cols-7 gap-2 text-center text-sm font-bold px-2 text-purpleprimarytext mt-6`}>

				{dataCollumn.map((col, i) => (
					<p key={i} className={`text-${col.align || "center"}`}>
						{col.label}
					</p>
				))}

			</div>

			{/* Container Cards*/}

			<div className="h-full w-full flex items-center flex-col gap-2 p-2">
				{ordered.map((indicator, idx) => (

					// Card para cada indicador
					<Card
						key={idx}
						className={`w-full flex items-center justify-center p-4 flex-1 rounded-md relative ${indicator.booster ? "border-chart-2 bg-chart-2/15" : " shadow-none bg-muted"}`}
					>

						{/* Card com foguete indicando booster no indicador */}
						{indicator.booster && (
							<div className="absolute -top-6 right-0 flex items-center gap-0 bg-purpleprimarybackground border border-purple-secondary text-white px-3 py-1 rounded-full text-2xl font-bold">
								<Rocket className="w-6 h-6 rotate-30 mr-1" />
								{indicator.booster}<span className="text-md font-normal">x</span>
							</div>
						)}

						{/* Conteúdo com os dados em si */}
						<CardContent className={`w-full grid grid-cols-${dataCollumn.length} gap-2 text-center items-center justify-center p-1`}>

							{dataCollumn.map((col, ci) => {

								if (col.key === "actions" && indicator.actions) {
									return (
										<Button
											key={ci}
											className="w-full bg-greenprimarybackground text-white hover:bg-greenprimarybackground"
											variant="outline"
											size="lg"
										>
											Regulamento
										</Button>
									);
								}

								if (col.key === "name") {
									const Icon = LibIcons[indicator.icon] || LibIcons["Home"]; // usa Home como fallback

									return (
										<div key={ci} className="flex flex-col items-center justify-center text-purpleprimarytext font-regular">
											<div><Icon className="h-8 w-8" /></div>
											<div>{indicator.name}</div>
										</div>
									);
								}

								const isPoints = col.key === "pontos";
								const textColor = isPoints ? "text-greenprimarytext font-bold text-4xl" : "text-purpleprimarytext text-4xl";
								const value = isPoints && indicator.booster ? `${indicator.pontos}` : indicator[col.key as keyof Indicator];

								return <div key={ci} className={textColor}>{value}</div>;
							})}
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
};
