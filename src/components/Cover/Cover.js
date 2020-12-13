import React from 'react';
import '../../index.css';
import './Cover.css';

function Cover() {
	return (
		<section
			id='home'
			class='cover-photo'
			alt='cover photo of macbook'>
			<div class='cover-text-box'>
				<h1>
					Hi, I'm Kyle.
					<br />
					Welcome to my portfolio.
				</h1>
				<a class='btn' href='#about'>
					Learn about me
				</a>
			</div>
		</section>
	);
}

export default Cover;
