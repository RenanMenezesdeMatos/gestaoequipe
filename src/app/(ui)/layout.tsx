
import { HeaderLayout } from "@/components/header-layout/header";
import { NavBarItens } from "@/components/nav-layout/nav-bar-itens";

type Props = {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {


	return (

		<main className="min-h-screen flex flex-col">

			<header className="text-center bg-purple-primary text-white pt-3 pb-3">

				<HeaderLayout />

			</header>

			<div className="w-full max-w-7xl flex flex-row flex-grow justify-between px-4 mx-auto">

				<NavBarItens />

				<section className="flex flex-1 justify-center p-4 w-[94%] min-w-[70%]">
					{children}
				</section>

			</div >

			<footer className="text-center bg-gray-600 text-white text-sm pt-3 pb-3">Todos os direitos reservados</footer>

		</main >
	);
}