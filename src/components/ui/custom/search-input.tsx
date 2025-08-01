"use client"

import { InputCustom } from "@/components/ui/custom/input-custom";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

type Props = {
	defaultValue?: string;
	hideOnSearch?: boolean;
}

export const SearchInput = ({ defaultValue, hideOnSearch }: Props) => {
	const router = useRouter();
	const pathname = usePathname();
	const [searchInput, setSearchInput] = useState(defaultValue ?? "")

	const handleSearchEnter = () => {
		if (searchInput) {
			router.push('/search?q=' + encodeURIComponent(searchInput))
		}
	}

	if (hideOnSearch && pathname === '/search') return null;

	return (
		<div className="text-sm">

			<InputCustom
				placeholder="Buscar"
				searchIcon={<MagnifyingGlassIcon className="size-6" />}
				value={searchInput}
				onChange={t => setSearchInput(t)}
				onEnter={handleSearchEnter}
			/>

		</div>


	);
}