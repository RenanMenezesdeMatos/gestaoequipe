import { HomeMyProfile } from "../profile-container/home-my-profile";
import { ProfilePersonalData } from "../profile-container/profile-personal-data";
import { HeaderHomeCover } from "./header-home-cover";

export const HeaderHomeContent = () => {
	return (
		<div className="relative h-[240px] w-full">

			<HeaderHomeCover />

			{/* Card flutuando no centro */}
			<div className="absolute top-[40px] left-1/2 transform -translate-x-1/2">

				<HomeMyProfile />

			</div>

			{/* Dados pessoais - fora do header, vem logo depois */}
			<div className="flex flex-col justify-center items-center w-full mt-8 z-10">

				<ProfilePersonalData />

			</div>

		</div>
	);
}