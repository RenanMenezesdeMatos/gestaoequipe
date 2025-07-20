'use client';
import { useRouter } from 'next/navigation';
import { useEffect } from "react";

type Props = {
	children: React.ReactNode;
}

export default function Page({ children }: Props) {
	const router = useRouter();

	useEffect(() => {
		router.push('/home/profile')
	})

	return null;
}