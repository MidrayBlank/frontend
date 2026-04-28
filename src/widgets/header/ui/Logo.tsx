import { Link } from 'react-router-dom';

export function Logo() {
	return (
		<Link to="/" className="navbar-brand d-flex align-items-center">
			<img
				src="/midray-logo.svg"
				alt="M"
				style={{
					width: 35,
					height: 35,
					borderRadius: '0.5rem',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					marginRight: 12,
				}}
			/>
			<div
				style={{
					fontWeight: 500,
					fontSize: '1.5rem',
					background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					backgroundClip: 'text',
					paddingTop: '0.2rem',
				}}
			>
				Midray
			</div>
		</Link>
	);
}
