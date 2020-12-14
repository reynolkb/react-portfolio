import React from 'react';
import './Portfolio.css';
import Project from '../Project/Project';
import activelyDistanced from '../../assets/images/actively-distanced.png';
import reactTodoApp from '../../assets/images/react-todo-app.png';
import cityExplorer from '../../assets/images/city-explorer.png';

function Portfolio(props) {
	return (
		<div className='portfolio-container'>
			<Project
				name='Todo List'
				githubLink='https://github.com/reynolkb/react-todo-app'
				deployedLink='https://reynolkb.github.io/react-todo-app/'
				projectImage={reactTodoApp}></Project>
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
		</div>
	);
}

export default Portfolio;
