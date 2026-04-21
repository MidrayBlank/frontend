import { Header } from '@/widgets';

export function Home() {
	const a: number = 10;
	return (
		<>
			<Header />
			{a == 10 ? <p>Yes</p> : <p>No</p>}
			<div className="">test</div>
		</>
	);
}
