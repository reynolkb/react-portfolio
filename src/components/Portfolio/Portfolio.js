import React from 'react';
import './Portfolio.css';
import Project from '../Project/Project';
import activelyDistanced from '../../assets/images/actively-distanced.png';
import colorTheory from '../../assets/images/color-theory.png';
import cityExplorer from '../../assets/images/city-explorer.png';
import weatherDashboard from '../../assets/images/weather-dashboard.png';
import noteTaker from '../../assets/images/note-taker.png';
import budgetTracker from '../../assets/images/budget-tracker.png';

function Portfolio(props) {
	return (
		<div className='portfolio-container'>
			<Project
				name='Color Theory'
				githubLink='https://github.com/reynolkb/color-theory-1.0'
				deployedLink='https://color-theory.herokuapp.com/'
				projectImage={colorTheory}></Project>
			<Project
				name='City Explorer'
				githubLink='https://github.com/reynolkb/city-explorer'
				deployedLink='https://reynolkb.github.io/city-explorer/'
				projectImage={cityExplorer}></Project>
			<Project
				name='Actively Distanced'
				githubLink='https://github.com/reynolkb/actively-distanced'
				deployedLink='https://actively-distanced.herokuapp.com/'
				projectImage={activelyDistanced}></Project>
			<Project
				name='Budget Tracker'
				githubLink='https://github.com/reynolkb/budget-tracker'
				deployedLink='https://budget-tracker-kyle.herokuapp.com/'
				projectImage={budgetTracker}></Project>
			<Project
				name='Weather Dashboard'
				githubLink='https://github.com/reynolkb/weather-dashboard'
				deployedLink='https://reynolkb.github.io/weather-dashboard/'
				projectImage={weatherDashboard}></Project>
			<Project
				name='Note Taker'
				githubLink='https://github.com/reynolkb/note-taker'
				deployedLink='https://note-taker-kyle.herokuapp.com/'
				projectImage={noteTaker}></Project>
		</div>
	);
}

export default Portfolio;
