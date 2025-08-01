import { HomeMyProfile } from "./home-my-profile";
import { ProfilePersonalData } from "./profile-personal-data";
import { HeaderHomeCover } from "./header-home-cover";

export const HeaderHomeContent = () => {
	return (
		<div className="relative h-[240px] w-full">

			<HeaderHomeCover />


			<div className="absolute top-[40px] left-1/2 transform -translate-x-1/2">

				<HomeMyProfile />

			</div>


			<div className="flex flex-col justify-center items-center w-full mt-8 z-10">

				<ProfilePersonalData />

			</div>

		</div>
	);
}