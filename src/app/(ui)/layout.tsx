import { HeaderLayout } from "@/components/header/header";
import { NavBarItens } from "@/components/nav/nav-bar-itens";

type Props = {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {


	return (

		<main className="min-h-screen flex flex-col justify-around">

			<header className="text-center bg-purple-primary text-white pt-3 pb-3">

				<HeaderLayout />

			</header>

			<div className="w-full max-w-[1280px] flex flex-row flex-grow justify-between px-4 mx-auto">

				<NavBarItens />

				<section className="flex flex-1 justify-center p-4">
					{children}
				</section>

			</div>

			<footer className="text-center bg-gray-600 text-white text-sm pt-3 pb-3">Todos os direitos reservados</footer>

		</main>
	);
}