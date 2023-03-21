import React from 'react';

import MobileMenuCircleImg from '../../assets/shared/desktop/bg-pattern-circle.svg';
import closeIcon from '../../assets/shared/mobile/close.svg';

// Router
import { Link } from 'react-router-dom';

const MobileMenu = props => {
	return (
		<nav className={`mobile-menu ${props.menuActive ? 'active' : ''}`}>
			<div className='mobile-menu__circle-img'>
				<img src={MobileMenuCircleImg} alt='' />
			</div>
			<div className='mobile-menu__close-icon-container'>
				<img onClick={props.onToggleMenu} src={closeIcon} alt='' />
			</div>
			<ul className='mobile-menu__links-container'>
				<li>
					<Link to={'/pricing'} onClick={props.onToggleMenu}>
						Pricing
					</Link>
				</li>
				<li>
					<Link to={'/about'} onClick={props.onToggleMenu}>
						About
					</Link>
				</li>
				<li>
					<Link to={'/contact'} onClick={props.onToggleMenu}>
						Contact
					</Link>
				</li>
			</ul>
			<div className='button-container'>
				<a className='button button-primary' href='https://www.google.com'>
					Schedule a Demo
				</a>
			</div>
		</nav>
	);
};

export default MobileMenu;
