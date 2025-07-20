import { users } from "@/data/user"

export const HeaderHomeCover = () => {
	const defaultUrl = "/cover.png"

	return (

		<div className={`flex flex-col items-center`}>

			<div className="w-full">
				<img
					src={users[0].coverUrl ? users[1].coverUrl : defaultUrl}
					alt={users[1].name}
					className="h-[144px] w-full object-cover" />
			</div>

		</div >

	);
}

