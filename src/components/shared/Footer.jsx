import React from 'react';

// Images
import BgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';
import { ReactComponent as Logo } from '../../assets/shared/desktop/logo.svg';
import { ReactComponent as FacebookIcon } from '../../assets/shared/desktop/facebook.svg';
import { ReactComponent as TwitterIcon } from '../../assets/shared/desktop/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/shared/desktop/linkedin.svg';

// Router
import { NavLink } from 'react-router-dom';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__bg-circle-container'>
				<img src={BgCircle} alt='' />
			</div>
			<div className='inner-container container'>
				<div className='logo-links-container '>
					<NavLink to={'/'}>
						<Logo className='logo' />
					</NavLink>
					<ul className='footer__links'>
						<li>
							<NavLink to={'/pricing'}>Pricing</NavLink>
						</li>
						<li>
							<NavLink to={'/about'}>About</NavLink>
						</li>
						<li>
							<NavLink to={'/contact'}>Contact</NavLink>
						</li>
					</ul>
				</div>
				<ul className='social'>
					<li>
						<a href='https://www.facebook.com'>
							<FacebookIcon />
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com'>
							<TwitterIcon />
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com'>
							<LinkedInIcon />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
};

export default Footer;
