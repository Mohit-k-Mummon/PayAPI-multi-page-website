import React from 'react';

import logo from '../../assets/shared/desktop/logo.svg';
import toggleMenu from '../../assets/shared/mobile/menu.svg';

// Router
import { NavLink } from 'react-router-dom';

const MainNavigation = props => {
	return (
		<header className='header'>
			<nav className='main-navigation container'>
				<div className='logo-container'>
					<NavLink to={'/'}>
						<img className='logo' src={logo} alt='payAPI company logo' />
					</NavLink>
					<ul>
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
				<a className='button button-primary' href='https://www.google.com'>
					Schedule a Demo
				</a>
				<img
					onClick={props.onToggleMenu}
					className='hamburger-close-icon'
					src={toggleMenu}
					alt=''
				/>
			</nav>
		</header>
	);
};

export default MainNavigation;
