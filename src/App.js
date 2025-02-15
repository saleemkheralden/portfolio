import './App.css';

import Contact from './components/Contact';
import Header from './components/Header';
import Projects from './components/Projects';
import About from './components/About';
import Footer from './components/Footer';
import Intro from './components/Intro';

export default function Portfolio() {
	return (
		<div className="container-div">
			<Header />

			<main className="portfolio-main mx-auto max-w-64">
				<Intro />

				<About />

				<Projects />

				<Contact />
			</main>

			<Footer />

		</div>
	)
}

