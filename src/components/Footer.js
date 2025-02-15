import './Footer.css';

export default function Footer() {
	return (
		<footer className="portfolio-footer">
			<div className="max-w-64 mx-auto text-center">
				<p>&copy; {new Date().getFullYear()} Saleem Kheralden. All rights reserved.</p>
			</div>
	  </footer>
	);
}