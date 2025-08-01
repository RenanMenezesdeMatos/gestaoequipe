'use client'

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import Link from "next/link";
import { CircleUser, LogOut, PanelBottom, Package } from "lucide-react";
import { LinkNewSidebar } from "./link-new-sidebar";
import { getSidebarItems } from "./new-sidebar-config";
import { Skeleton } from "@/components/ui/skeleton";

type SidebarItem = {
	href: string;
	label: string;
	icon: React.ElementType;
};

type NewSidebarProps = {
	role: string;
};

export const NewSideBar = ({ role }: NewSidebarProps) => {
	const [menuItems, setMenuItems] = useState<SidebarItem[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchMenu() {
			setLoading(true);
			const items = await getSidebarItems(role); // Role vinda do layout ou vem diretor o user mesmo, pensar de onde vamos  recuperar os dados
			setMenuItems(items);
			setLoading(false);
		}

		fetchMenu();
	}, [role]); // useEffect depende da role

	return (
		<div className="flex flex-col">
			<aside className="left-0 z-10 hidden w-14 h-full border-x bg-background sm:flex flex-col">
				<nav className="flex flex-col items-center gap-4 px-2 py-5">
					<Link
						href="#"
						className="flex h-9 w-9 shrink-0 items-center justify-center bg-purpleprimarybackground text-primary-foreground rounded-full"
					>
						<CircleUser className="h-5 w-5 text-white" />
						<span className="sr-only">Avatar</span>
					</Link>

					{loading ? (
						Array.from({ length: 4 }).map((_, index) => (
							<Skeleton key={index} className="h-5 w-5 rounded-md my-1 p-4" />
						))
					) : (
						menuItems.map((item) => (
							<LinkNewSidebar
								key={item.href}
								href={item.href}
								icon={item.icon}
								label={item.label}
							/>
						))
					)}
				</nav>

				<nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
					<LinkNewSidebar
						href="/sair"
						icon={LogOut}
						label="Sair" />
				</nav>
			</aside>

			{/* Mobile */}
			<div className="sm:hidden flex flex-col bg-slate-500 sm:gap-4 sm:p-4 sm:pl-14">
				<header className="sticky top-0 z-30 flex h-14 items-center px-4 border-b bg-background gap-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
					<Sheet>
						<SheetTrigger asChild>
							<Button size={"icon"} variant={"outline"} className="sm:hidden">
								<PanelBottom className="h-5 w-5" />
								<span className="sr-only">Abrir / Fechar Menu</span>
							</Button>
						</SheetTrigger>

						<SheetContent className="sm:max-w-xs" side={"left"}>
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="#"
									className="flex h-10 w-10 bg-purpleprimarybackground rounded-full text-lg items-center justify-center text-primary-foreground md:text-base gap-2"
									prefetch={false}
								>
									<Package className="h-5 w-5 transition-all" />
									<span className="sr-only">Logo</span>
								</Link>

								{menuItems.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground"
										prefetch={false}
									>
										<item.icon className="h-5 w-5 transition-all" />
										{item.label}
									</Link>
								))}
							</nav>
						</SheetContent>
					</Sheet>
					<h2>Menu</h2>
				</header>
			</div>
		</div>
	);
};
