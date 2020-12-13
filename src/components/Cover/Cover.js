import React from 'react';
import './Cover.css';

function Cover() {
	return (
		<section
			id='home'
			className='cover-photo'
			alt='cover photo of macbook'>
			<div className='cover-text-box'>
				<h1>
					Hi, I'm Kyle.
					<br />
					Welcome to my portfolio.
				</h1>
				<a className='btn' href='#about'>
					Learn about me
				</a>
			</div>
		</section>
	);
}

export default Cover;
