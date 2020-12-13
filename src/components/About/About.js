import React from 'react';
import './About.css';
import headshot from '../../assets/images/headshot.jpg';

function About() {
	return (
		<section id='about'>
			<h2 className='section-title'>About Me</h2>
			<img
				src={headshot}
				alt='Headshot'
				className='headshot'
			/>
			<h4 className='section-text'>
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
