import { LinkProfile } from "../../../ui/linkProfile";

export const NavProfile = () => {

	return (
		<>

			<div className="flex flex-row justify-center items-center gap-8 relative mt-5 mb-5 " >

				<LinkProfile
					href="/home/profile"
					label="Perfil"
				/>

				<LinkProfile
					href="/home/profile/jornada"
					label="Jornada"
				/>

				<LinkProfile
					href="/home/profile/feedback"
					label="FeedBack"
				/>

				<LinkProfile
					href="/home/profile/meus-pontos"
					label="Meus Pontos"

				/>

			</div>


			<div className="w-full max-w-[90%] h-[1px] bg-gray-300 -mt-[23px] mx-auto mb-4" />
		</>



	);
}