import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<ul>
				<li className='footer-li'>
					<a
						className='footer-link'
						href='https://github.com/reynolkb'
						target='_blank'>
						Github
					</a>
				</li>
				<li className='footer-li'>
					<a
						className='footer-link'
						href='https://www.linkedin.com/in/kyle-b-reynolds/'
						target='_blank'>
						LinkedIn
					</a>
				</li>
				<li className='footer-li'>
					<a className='footer-link'>Twitter</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
