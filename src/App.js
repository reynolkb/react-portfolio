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

	if (activePage === 'about' || activePage === 'homepage') {
		return (
			<div className='App'>
				<Navigation
					pages={pages}
					activePage={activePage}
					setActivePage={
						setActivePage
					}></Navigation>
				<main>
					<Cover></Cover>
					<About></About>
				</main>
				<Footer></Footer>
			</div>
		);
	} else if (activePage === 'project') {
		return (
			<div className='App'>
				<Navigation
					pages={pages}
					activePage={activePage}
					setActivePage={
						setActivePage
					}></Navigation>
				<main>
					<Portfolio></Portfolio>
				</main>
				<Footer></Footer>
			</div>
		);
	} else if (activePage === 'contact') {
		return (
			<div className='App'>
				<Navigation
					pages={pages}
					activePage={activePage}
					setActivePage={
						setActivePage
					}></Navigation>
				<main>
					<ContactForm></ContactForm>
				</main>
				<Footer></Footer>
			</div>
		);
	} else if (activePage === 'resume') {
		return (
			<div className='App'>
				<Navigation
					pages={pages}
					activePage={activePage}
					setActivePage={
						setActivePage
					}></Navigation>
				<main>
					<Resume></Resume>
				</main>
				<Footer></Footer>
			</div>
		);
	}
}

export default App;
