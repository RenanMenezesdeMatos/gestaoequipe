import { Button } from "@/components/ui/button";
import { ProfilePhoto } from "@/components/ui/profile-photo";
import { users } from "@/data/user";

export default function Page() {
	return (
		<div className="w-full px-12 h-full flex items-center gap-4 justify-between">

			<div className="flex w-2/4 gap-2">

				<div className="flex flex-col gap-1 text-sm font-medium pr-6">
					<span>Nome:</span>
					<span>Sobrenome:</span>
					<span>E-mail:</span>
					<span>Nascimento:</span>
					<span>Site:</span>
					<span>Entrada:</span>
					<span>Saída:</span>
					<span>EPS:</span>
				</div>

				<div className="flex flex-col gap-1 text-sm font-light">
					<span>{users[1].name.split(" ")[0]}</span>
					<span>{users[1].name.split(" ").at(-1)}</span>
					<span>{users[1].email}</span>
					<span>{users[1].admissionDate.toLocaleDateString()}</span>
					<span>{users[1].site}</span>
					<span>{users[1].isActive}</span>
					<span>{"09:00"}</span>
					<span>{"18:00"}</span>
					<span>{"Empresa A"}</span>
				</div>

			</div>



			<div className="flex items-center justify-center w-2/4 h-full">

				<div className="flex items-center h-full w-2/4">

					<ProfilePhoto
						alt={users[1].name}
						size={2}
						src={users[1].photoUrl}
					/>

				</div>

				<div className="flex flex-col gap-2">

					<div>
						<Button
							label="Editar Perfil"
							size={3}
							type={2}
						/>
					</div>
					<div>
						<Button
							label="Trocar Foto"
							size={3}
							type={2}
						/>
					</div>

				</div>

			</div>

		</div>
	)
}