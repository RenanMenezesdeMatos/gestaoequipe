

type Props = {
	label: string;
	onClick?: () => void;
	size: 1 | 2 | 3;
	type: 1 | 2 | 3; // 1 = primary, 2 = secondary, 3 = tertiary
}

export const Button = ({ label, onClick, size, type }: Props) => {
	return (
		<div onClick={onClick}
			className={`flex justify-center items-center cursor-pointer rounded-md p-3  font-bold
				${size === 1 && 'h14 text-lg'}
				${size === 2 && 'h10 text-md'}
				${size === 3 && 'h7 text-xs'}

				${type === 1 && 'bg-purple-primary hover:bg-purple-secondary transition-colors text-white'}
				${type === 2 && 'bg-white  text-purple-primary border border-purple-primary hover:bg-purple-secondary hover:text-white transition-colors'}
				${type === 3 && 'bg-green-primary text-white border border-green-secondary hover:bg-green-secondary transition-color'}
			`}>

			{label}
		</div>
	);
}