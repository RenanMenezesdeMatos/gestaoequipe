import { HeaderHomeContent } from "@/components/home/header/header-home-content";
import { UserMedals } from "@/components/home/medals-container/user-medals";
import { NavHome } from "@/components/home/nav-home";


type Props = {
	children: React.ReactNode;
}


export default function Layout({ children }: Props) {
	return (
		<div className="min-h-full w-full flex flex-col items-center bg-white rounded-md">

			{/* Header com imagem e perfil, nome e cargo */}

			<HeaderHomeContent />

			{/* Section de melhadas */}

			<UserMedals />

			{/* Conteúdo da página */}
			<section className="flex flex-col justify-center items-center flex-1 w-[98%] bg-backgroundcolor px-2 mb-2 mt-4 h-full rounded-md">

				<NavHome />

				<div className="flex flex-col items-center justify-center bg-white w-full h-full mb-2 rounded-md">

					{children}

				</div>

			</section>

		</div>
	);
}
