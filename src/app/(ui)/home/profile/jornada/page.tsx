import { WrenchIcon } from "lucide-react";

type Props = {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	return (
		<div className="flex flex-col gap-6 justify-center items-center w-full h-full text-4xl">
			<WrenchIcon className="h-24 w-24" />
			<div className=""> Em construção!! </div>
		</div>
	)
}