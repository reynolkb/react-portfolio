import React from 'react';
import '../../index.css';
import './Navigation.css';

function Navigation() {
	return (
		<header>
			<nav>
				<ul class='main-nav'>
					<li>
						<a href='#home'>Home</a>
					</li>
					<li>
						<a href='#about'>About Me</a>
					</li>
					<li>
						<a href='#portfolio'>
							Portfolio
						</a>
					</li>
					<li>
						<a href='#contact'>Contact</a>
					</li>
					<li>
						<a href='#resume'>Resume</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Navigation;
