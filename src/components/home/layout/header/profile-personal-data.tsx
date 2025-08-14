import { users } from "@/data/user";

export const ProfilePersonalData = () => {


	return (
		<div className=" flex-col w-full h-full justify-center items-center flex">
			<h1 className="text-4xl text-purpleprimarytext">
				{users[1].name}
			</h1>
			<h2 className="text-base font-light text-muted-foreground">
				{users[1].position}
			</h2>
		</div>
	);
}