import React, { useState } from 'react';
import MainNavigation from '../components/shared/MainNavigation';

// Router
import { Outlet } from 'react-router-dom';
import MobileMenu from '../components/shared/MobileMenu';

const RootLayout = () => {
	// Mobile Menu Open/Close Logic
	const [menuActive, setMenuActive] = useState(false);

	const onMenuToggle = () => {
		setMenuActive(!menuActive);
	};

	return (
		<>
			<MainNavigation onToggleMenu={onMenuToggle} />
			<MobileMenu menuActive={menuActive} onToggleMenu={onMenuToggle} />
			<main>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
