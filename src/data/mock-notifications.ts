export enum NotificationType {
	LIKE = "like",
	COMMENT = "comment",
	TEAM = "team",
}

export type UserAction = {
	matricula: string;
	name: string;
	avatar: string;
};

export type NotificationUser = {
	id: string;
	type: NotificationType;
	message: string;
	date: string; // ISO
	isRead: boolean;
	userAction: UserAction;
};

export const mockNotifications: NotificationUser[] = [
	{
		id: "n4",
		type: NotificationType.LIKE,
		message: "Carlos Pereira curtiu sua atualização.",
		date: "2025-08-11T15:20:00Z",
		isRead: true,
		userAction: {
			matricula: "G0055352",
			name: "Carlos Pereira",
			avatar: "https://randomuser.me/api/portraits/men/12.jpg",
		},
	},
	{
		id: "n5",
		type: NotificationType.COMMENT,
		message: "Fernanda Souza comentou: 'Muito bom, continue assim!'",
		date: "2025-08-11T13:10:00Z",
		isRead: false,
		userAction: {
			matricula: "G0055353",
			name: "Fernanda Souza",
			avatar: "https://randomuser.me/api/portraits/women/19.jpg",
		},
	},
	{
		id: "n6",
		type: NotificationType.TEAM,
		message: "Equipe de Marketing lançou a nova campanha! 📢",
		date: "2025-08-08T10:00:00Z",
		isRead: true,
		userAction: {
			matricula: "team2",
			name: "Equipe de Marketing",
			avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		},
	},
	{
		id: "n7",
		type: NotificationType.LIKE,
		message: "Ana Costa curtiu seu comentário.",
		date: "2025-08-07T19:45:00Z",
		isRead: false,
		userAction: {
			matricula: "G0055354",
			name: "Ana Costa",
			avatar: "https://randomuser.me/api/portraits/women/28.jpg",
		},
	},
	{
		id: "n8",
		type: NotificationType.COMMENT,
		message: "Pedro Almeida comentou: 'Isso vai ajudar muito o time!'",
		date: "2025-08-06T08:30:00Z",
		isRead: true,
		userAction: {
			matricula: "G0055355",
			name: "Pedro Almeida",
			avatar: "https://randomuser.me/api/portraits/men/45.jpg",
		},
	},
	{
		id: "n9",
		type: NotificationType.TEAM,
		message: "Equipe de Suporte resolveu 150 chamados esta semana! 💪",
		date: "2025-08-05T14:00:00Z",
		isRead: false,
		userAction: {
			matricula: "team3",
			name: "Equipe de Suporte",
			avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		},
	},
	{
		id: "n10",
		type: NotificationType.LIKE,
		message: "Bruno Rocha curtiu seu post.",
		date: "2025-08-04T11:12:00Z",
		isRead: true,
		userAction: {
			matricula: "G0055356",
			name: "Bruno Rocha",
			avatar: "https://randomuser.me/api/portraits/men/55.jpg",
		},
	},
	{
		id: "n11",
		type: NotificationType.COMMENT,
		message: "Clara Nunes comentou: 'Excelente iniciativa!'",
		date: "2025-08-03T17:20:00Z",
		isRead: false,
		userAction: {
			matricula: "G0055357",
			name: "Clara Nunes",
			avatar: "https://randomuser.me/api/portraits/women/65.jpg",
		},
	},
	{
		id: "n12",
		type: NotificationType.LIKE,
		message: "Lucas Martins curtiu sua publicação.",
		date: "2025-08-03T08:15:00Z",
		isRead: false,
		userAction: {
			matricula: "G0055358",
			name: "Lucas Martins",
			avatar: "https://randomuser.me/api/portraits/men/72.jpg",
		},
	},
	{
		id: "n13",
		type: NotificationType.TEAM,
		message: "Equipe de RH divulgou novas vagas internas. 📄",
		date: "2025-08-02T09:00:00Z",
		isRead: true,
		userAction: {
			matricula: "team4",
			name: "Equipe de RH",
			avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		},
	},
	{
		id: "n14",
		type: NotificationType.COMMENT,
		message: "Ricardo Moreira comentou: 'Essa mudança vai agilizar muito!'",
		date: "2025-08-01T15:00:00Z",
		isRead: false,
		userAction: {
			matricula: "G0055359",
			name: "Ricardo Moreira",
			avatar: "https://randomuser.me/api/portraits/men/84.jpg",
		},
	},
	{
		id: "n15",
		type: NotificationType.LIKE,
		message: "Juliana Santos curtiu seu comentário.",
		date: "2025-08-01T10:10:00Z",
		isRead: true,
		userAction: {
			matricula: "G0055360",
			name: "Juliana Santos",
			avatar: "https://randomuser.me/api/portraits/women/14.jpg",
		},
	},
	{
		id: "n16",
		type: NotificationType.COMMENT,
		message: "André Lima comentou: 'Boa sugestão, vamos aplicar!'",
		date: "2025-07-31T18:40:00Z",
		isRead: true,
		userAction: {
			matricula: "G0055361",
			name: "André Lima",
			avatar: "https://randomuser.me/api/portraits/men/90.jpg",
		},
	},
	{
		id: "n17",
		type: NotificationType.TEAM,
		message: "Equipe de Projetos concluiu a fase inicial do projeto X 🚀",
		date: "2025-07-30T14:20:00Z",
		isRead: false,
		userAction: {
			matricula: "team5",
			name: "Equipe de Projetos",
			avatar: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
		},
	},
	{
		id: "n18",
		type: NotificationType.LIKE,
		message: "Patrícia Ferreira curtiu seu post.",
		date: "2025-07-29T07:55:00Z",
		isRead: true,
		userAction: {
			matricula: "G0055362",
			name: "Patrícia Ferreira",
			avatar: "https://randomuser.me/api/portraits/women/50.jpg",
		},
	}
];
