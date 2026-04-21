export function Header() {
	

	return (
		<>
			{/* <!-- Шапка сайта (адаптивная под тему) --> */}
			<nav
				className="navbar navbar-expand-lg shadow-sm fixed-top"
				style={{
					background: 'var(--card-bg, #0B2347)',
					borderBottom: '1px solid var(--border-1, rgba(84,138,255,0.18))',
					backdropFilter: 'blur(2px)',
				}}
			>
				<div className="container">
					<a className="navbar-brand d-flex align-items-center" data-link>
						<div
							style={{
								width: '40px',
								height: '40px',
								background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
								borderRadius: '12px',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
								marginRight: '12px',
							}}
						>
							<span style={{ color: 'white', fontWeight: '600', fontSize: '20px' }}>M</span>
						</div>
						<strong
							style={{
								fontWeight: '500',
								fontSize: '1.5rem',
								background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
								WebkitBackgroundClip: 'text',
								WebkitTextFillColor: 'transparent',
								backgroundClip: 'text',
							}}
						>
							Midray
						</strong>
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						style={{ borderColor: 'var(--primary-500, #1E74FF)' }}
					>
						<span className="navbar-toggler-icon"></span>
					</button>
				</div>
				{/* <div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav mx-auto" style="gap: 2rem;">
							<li className="nav-item">
								<a
									className="nav-link"
									href="/monitoring"
									data-link
									style="font-weight: 400; font-size: 1.1rem; color: var(--text-100, #F4F8FF); transition: 0.2s;"
									onmouseover="this.style.color='var(--cyan-500, #19D7FF)'"
									onmouseout="this.style.color='var(--text-100, #F4F8FF)'"
								>
									<i
										className="fas fa-chart-line me-2"
										style="color: var(--cyan-400, #67E7FF);"
									></i>
									Мониторинг
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="/forecasting"
									data-link
									style="font-weight: 400; font-size: 1.1rem; color: var(--text-100, #F4F8FF); transition: 0.2s;"
									onmouseover="this.style.color='var(--cyan-500, #19D7FF)'"
									onmouseout="this.style.color='var(--text-100, #F4F8FF)'"
								>
									<i className="fas fa-chart-bar me-2" style="color: var(--cyan-400, #67E7FF);"></i>
									Прогнозирование
								</a>
							</li>
							<li className="nav-item">
								<a
									className="nav-link"
									href="/ai-report"
									data-link
									style="font-weight: 400; font-size: 1.1rem; color: var(--text-100, #F4F8FF); transition: 0.2s;"
									onmouseover="this.style.color='var(--cyan-500, #19D7FF)'"
									onmouseout="this.style.color='var(--text-100, #F4F8FF)'"
								>
									<i className="fas fa-robot me-2" style="color: var(--cyan-400, #67E7FF);"></i>
									AI-справка
								</a>
							</li>
						</ul>
						<button
							id="globalThemeToggle"
							className="btn btn-sm"
							style="background: var(--bg-700, #12386C); color: var(--text-100, #F4F8FF); border-radius: 40px; padding: 6px 14px;"
						>
							<i className="fas fa-moon me-1"></i> Тема
						</button>
					</div>
				</div> */}
			</nav>
			{/* <!-- Отступ для фиксированной шапки --> */}
			<div style={{ height: '80px' }}></div>
		</>
	);
}
