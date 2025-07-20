type Props = {
	label: string,
	icon: React.JSX.Element;
}

export const Medal = ({ label, icon }: Props) => {

	return (

		<div className=" flex flex-col justify-center items-center mx-2 text-purple-primary">

			<div className="flex flex-col justify-center items-center w-14 h-14 rounded-full bg-backgroundgray cursor-pointer hover:border-2 hover:border-solid hover:border-green-primary hover:text-green-primary transition-all duration-100 ease-in-out">

				<div className=" w-10 h-10">
					{icon}
				</div>

			</div>

			<div className="text-xs mt-2 cursor-pointer">
				{label}
			</div>
		</div>
	);
}