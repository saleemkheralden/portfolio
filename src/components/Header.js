import './Header.css';

export default function Header() {
	return (
		<header className="portfolio-header border-gray-200">
			<div className="header-div mx-auto max-w-64">
				<h1 className="portfolio-name">Saleem Kheralden</h1>

				<nav className="portfolio-nav">
					<ul className="portfolio-nav-ul">
						<li>
							<a className="nav-link" href="#about">
								About
							</a>
						</li>
						<li>
							<a className="nav-link" href="#projects">
								Projects
							</a>
						</li>
						<li>
							<a className="nav-link" href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}
