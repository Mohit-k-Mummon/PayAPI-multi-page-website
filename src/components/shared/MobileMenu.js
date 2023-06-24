import React from 'react';

import MobileMenuCircleImg from '../../assets/shared/desktop/bg-pattern-circle.svg';
import closeIcon from '../../assets/shared/mobile/close.svg';

// Router
import { Link } from 'react-router-dom';

const MobileMenu = props => {
	return (
		// <nav className={`mobile-menu ${props.menuActive ? 'active' : ''}`}>
		<nav
			className={`bg-secondary-mirage-blue h-screen overflow-hidden pt-12 pr-7 pb-0 pl-6 fixed ${
				props.menuActive ? 'right-0' : 'right-[-100vw]'
			} top-0 transition-all ease-in-out duration-700 w-[300px] z-10`}
		>
			<div className='h-[780px] left-[-280px] pointer-events-none absolute top-[-550px] w-[780px]'>
				<img src={MobileMenuCircleImg} alt='' />
			</div>
			<div className='border-b border-solid border-custom-border-gray flex justify-end pb-6'>
				<img
					className='pl-[10px] cursor-pointer'
					onClick={props.onToggleMenu}
					src={closeIcon}
					alt=''
				/>
			</div>
			<ul className='flex items-center flex-col gap-8 justify-between list-none mt-11'>
				<li>
					<Link className='drawer-link' to={'/pricing'} onClick={props.onToggleMenu}>
						Pricing
					</Link>
				</li>
				<li>
					<Link className='drawer-link' to={'/about'} onClick={props.onToggleMenu}>
						About
					</Link>
				</li>
				<li>
					<Link className='drawer-link' to={'/contact'} onClick={props.onToggleMenu}>
						Contact
					</Link>
				</li>
			</ul>
			<div className='flex items-center justify-center mt-8 w-full'>
				<a className='button button-primary button-long' href='https://www.google.com'>
					Schedule a Demo
				</a>
			</div>
		</nav>
	);
};

export default MobileMenu;
