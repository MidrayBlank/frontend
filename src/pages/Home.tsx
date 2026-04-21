import { Header } from '@/widgets';

export function Home() {
	const a: number = 10121;
	return (
		<>
			<Header count={a} cn="test" />
			<div className="">test</div>
		</>
	);
}
