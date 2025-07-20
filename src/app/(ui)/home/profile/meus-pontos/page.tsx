import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

type Props = {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	return (
		<div className="flex flex-col gap-6 justify-center items-center w-full h-full text-4xl">
			<WrenchScrewdriverIcon className="size-24" />
			<div className=""> Em construção!! </div>
		</div>
	)
}