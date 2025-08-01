import { NavProfile } from "@/components/home/profile/container-profile-area/profile-area/nav-profile";



type Props = {
	children: React.ReactNode;
}


export default function Layout({ children }: Props) {
	return (
		<div className="min-h-full flex flex-col items-center w-full font-roboto rounded-md">

			<div className="w-full">
				<NavProfile
					role="operador" />
			</div>

			{children}

		</div>
	);
}
