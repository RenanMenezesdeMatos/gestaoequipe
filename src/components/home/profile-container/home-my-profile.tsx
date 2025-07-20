import { ProfilePhoto } from "@/components/ui/profile-photo";
import { users } from "@/data/user"


export const HomeMyProfile = () => {

	return (

		<div className="">

			<div className="">
				<ProfilePhoto
					alt={users[1].name}
					src={users[1].photoUrl}
					size={2}
				/>
			</div>

		</div >

	);
}