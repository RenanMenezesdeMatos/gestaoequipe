import { Post } from "@/types/posts";

// Mock com meia dúzia de posts
export const mockPosts: Post[] = [
	{
		id: "1",
		author: {
			name: "Eduarda Lima",
			role: "Analista de Experiência Jr",
			team: "Atendimento clientes GOLD",
			avatarUrl: "https://randomuser.me/api/portraits/women/44.jpg",
		},
		publishedAt: "2025-08-14T10:00:00Z",
		visibility: "Publicado para seu time",
		content:
			"Lembramos que o prazo para inscrição no programa de bem-estar se encerra amanhã. Aproveitem a oportunidade!",
		tags: ["Avisos", "Bem-estar", "Importante!"],
		likes: 234,
		comments: 234,
		isLiked: true,
	},
	{
		id: "2",
		author: {
			name: "Carlos Souza",
			role: "Supervisor de Operações",
			team: "B2B Atendimento Fixa",
			avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg",
		},
		publishedAt: "2025-08-11T09:30:00Z",
		visibility: "Publicado para todos",
		content:
			"A partir da próxima semana teremos mudanças nos horários de coleta e entrega. Fiquem atentos às novas escalas!",
		tags: ["Avisos", "Logística"],
		likes: 98,
		comments: 12,
		isLiked: false,
	},
	{
		id: "3",
		author: {
			name: "Juliana Mendes",
			role: "Consultor de Experiencia Cliente",
			team: "Comunicação",
			avatarUrl: "https://randomuser.me/api/portraits/women/10.jpg",
		},
		publishedAt: "2025-08-19T14:20:00Z",
		visibility: "Publicado para seu time",
		content:
			"Estamos lançando a nova campanha de mídia social! Quem quiser participar dos testes de slogan, mande mensagem até sexta-feira.",
		tags: ["Campanha", "Marketing", "Colaboração"],
		likes: 176,
		comments: 45,
		isLiked: true,
	},
	{
		id: "4",
		author: {
			name: "Roberto Dias",
			role: "Gerente Experiência Cliente Sr",
			team: "TOP",
			avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg",
		},
		publishedAt: "2025-08-19T08:00:00Z",
		visibility: "Publicado para todos",
		content:
			"Manutenção preventiva dos servidores acontecerá neste sábado às 22h. O acesso ao sistema ficará temporariamente indisponível.",
		tags: ["TI", "Manutenção"],
		likes: 52,
		comments: 7,
		isLiked: false,
	},
	{
		id: "5",
		author: {
			name: "Mariana Ferreira",
			role: "Aprendiz",
			team: "Atendimento Móvel",
			avatarUrl: "https://randomuser.me/api/portraits/women/4.jpg",
		},
		publishedAt: "2025-08-20T11:15:00Z",
		visibility: "Publicado para todos",
		content:
			"Lembramos que o prazo para inscrição no programa de bem-estar se encerra amanhã. Aproveitem a oportunidade!",
		tags: ["RH", "Bem-estar"],
		likes: 310,
		comments: 89,
		isLiked: false,
	},
	{
		id: "6",
		author: {
			name: "Felipe Rocha",
			role: "Consultor Experiência Cliente",
			team: "Performance",
			avatarUrl: "https://randomuser.me/api/portraits/men/82.jpg",
		},
		publishedAt: "2025-08-21T16:45:00Z",
		visibility: "Publicado para seu time",
		content:
			"Relatório de despesas do último trimestre já está disponível na pasta compartilhada. Confiram e me avisem se houver divergências.",
		tags: ["Financeiro", "Relatórios"],
		likes: 142,
		comments: 23,
		isLiked: true,
	},
];
