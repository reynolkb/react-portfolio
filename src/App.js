import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Cover from './components/Cover/Cover';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import ContactForm from './components/Contact/Contact';
import Resume from './components/Resume/Resume';
import Footer from './components/Footer/Footer';

function App() {
	const pages = ['homepage', 'about', 'project', 'contact', 'resume'];
	const [activePage, setActivePage] = useState(pages[0]);

	function conditionalNav() {
		if (activePage === 'about' || activePage === 'homepage') {
			return (
				<>
					<Cover></Cover>
					<About></About>
				</>
			);
		} else if (activePage === 'project') {
			return <Portfolio></Portfolio>;
		} else if (activePage === 'contact') {
			return <ContactForm></ContactForm>;
		} else if (activePage === 'resume') {
			return <Resume></Resume>;
		}
	}

	return (
		<div className='App'>
			<Navigation
				pages={pages}
				activePage={activePage}
				setActivePage={setActivePage}></Navigation>
			<main>{conditionalNav()}</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
