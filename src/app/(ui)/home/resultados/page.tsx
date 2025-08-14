import { ContainerCarouselCard } from "@/components/home/resultado-area/carousel-card/container-carousel-card";
import { ChartContentCard } from "@/components/home/resultado-area/charts/chart-content-card";

export default function Page() {
	return (
		<div className="flex flex-col justify-center items-center h-full w-full">
			<ContainerCarouselCard />

			<div className="flex flex-1 bg-background h-full w-[97%] mb-2">
				<ChartContentCard />
			</div>
		</div>
	)
}