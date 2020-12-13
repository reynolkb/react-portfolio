import React from 'react';
import '../../index.css';
import './About.css';

function About() {
	return (
		<section id='about'>
			<h2 class='section-title'>About Me</h2>
			<img
				src='../../assets/images/headshot.jpg'
				alt='Headshot'
				class='headshot'
			/>
			<h4 class='section-text'>
				Full Stack Web Developer with over 5 years of
				experience with SaaS applications.
				<br />
				Experienced in delivering custom JavaScript,
				HTML, and CSS requests for client projects.
				<br />
				Knowledgeable about handling complex project
				assessments and technical systems
				implementations.
			</h4>
		</section>
	);
}

export default About;
