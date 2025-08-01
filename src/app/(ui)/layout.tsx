
import { HeaderLayout } from "@/components/header-layout/header";
import { NewSideBar } from "@/components/sidebar-layout/new-sidebar";

type Props = {
	children: React.ReactNode;
}

export default function Layout({ children }: Props) {


	return (

		<main className="min-h-screen flex flex-col bg-secondary">

			<header className="text-center bg-purpleprimarybackground text-white pt-3 pb-3">

				<HeaderLayout />


			</header>

			<div className="w-full max-w-7xl flex flex-row flex-grow justify-between px-4 mx-auto">

				{/* <SidebarItens /> */}
				<NewSideBar
					role="operador" /> {/* essa rola precisa vir do usuario */}

				<section className="flex flex-1 justify-center p-4 w-[94%] min-w-[80%]">
					{children}
				</section>

			</div >

			<footer className="text-center bg-primary text-muted text-sm p-3 w-full">Todos os direitos reservados</footer>

		</main >
	);
}