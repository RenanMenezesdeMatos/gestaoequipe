export type User = {
	id: string;
	name: string;
	description?: string;
	position?: string;
	email: string;
	admissionDate: Date;
	status: 'Férias' | 'Em produção' | 'Atividade Off'
	site: string;
	photoUrl?: string;
	role: 'admin' | 'user';
	isActive: boolean;
	createdAt: Date;
	updatedAt: Date;
	coverUrl?: string;
}