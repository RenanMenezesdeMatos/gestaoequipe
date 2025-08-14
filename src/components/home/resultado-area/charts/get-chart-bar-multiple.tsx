import { ChartDataBarMultiple } from "@/data/mock-charts-user";

type ChartDataItem = {
	date: string;
	producao: number;
	desafio: number;
};

export async function GetChartBarMultiple(matricula: string) {


	const filtedData = ChartDataBarMultiple.filter((item) => item.matricula === matricula);

	const mapped: ChartDataItem[] = filtedData.map((item) => {
		return {
			date: item.date,
			producao: item.produção,
			desafio: item.desafio
		}

	});
	return mapped;
}