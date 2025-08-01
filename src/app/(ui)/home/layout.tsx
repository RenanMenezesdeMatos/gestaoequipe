import { HeaderHomeContent } from "@/components/home/profile/header/header-home-content";
import { NavHome } from "@/components/home/profile/nav-home";
import { UserMedals } from "@/components/home/profile/medals-container/user-medals";


type Props = {
	children: React.ReactNode;
}


export default function Layout({ children }: Props) {
	return (

		<div className="min-h-full w-full flex flex-col items-center rounded-md bg-background ">

			{/* Header com imagem e perfil, nome e cargo */}

			<HeaderHomeContent />

			{/* Section de melhadas */}

			<UserMedals />

			{/* Conteúdo da página */}
			<section className="flex flex-col justify-center items-center flex-1 w-[98%] bg-secondary px-2 mb-2 mt-4 h-full rounded-md">

				<NavHome
					role="operador"
				/>

				<div className="flex flex-col items-center justify-center bg-background w-full h-full mb-2 rounded-md">

					{children}

				</div>

			</section>

		</div>

	);
}
