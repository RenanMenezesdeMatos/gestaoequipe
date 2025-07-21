import { NavProfile } from "@/components/home/container-profile/profile-area/nav-profile";


type Props = {
	children: React.ReactNode;
}


export default function Layout({ children }: Props) {
	return (
		<div className="min-h-full flex flex-col items-center w-full bg-white font-roboto rounded-md">

			<div className="w-full">
				<NavProfile />
			</div>

			{children}

		</div>
	);
}
