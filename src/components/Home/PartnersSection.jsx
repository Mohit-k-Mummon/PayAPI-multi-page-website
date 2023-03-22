import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

// Images
import BgCircleImg from '../../assets/shared/desktop/bg-pattern-circle.svg';
import TeslaLogo from '../../components/svgs/TeslaLogo';
import MicrosoftLogo from '../../components/svgs/MicrosoftLogo';
import HewlettLogo from '../../components/svgs/HewlettLogo';
import OracleLogo from '../../components/svgs/OracleLogo';
import GoogleLogo from '../../components/svgs/GoogleLogo';
import NvidiaLogo from '../../components/svgs/NvidiaLogo';

// Function used to scroll to the top of the page
function scrollToTop() {
	window.scrollTo(0, 0);
}

const PartnersSection = () => {
	const navigate = useNavigate();

	// Function navigates us to another page
	// then calls scrollToTop fn
	function handleClick() {
		navigate('/about');
		scrollToTop();
	}

	return (
		<section className='partners'>
			<div className='partners__bg-circle-container'>
				<img src={BgCircleImg} alt='' />
			</div>
			<div className='partners__inner-container container'>
				<div className='partners__logos'>
					{/* These Svgs are their own components and they have a class in their respective components */}
					<TeslaLogo />
					<MicrosoftLogo />
					<HewlettLogo />
					<OracleLogo />
					<GoogleLogo />
					<NvidiaLogo />
				</div>
				<div className='partners__content'>
					<h1>Who we work with</h1>
					<p>
						Today, millions of people around the world have successfully connected their
						accounts to apps they love using our API. We provide developers with the
						tools they need to create easy and accessible experiences for their users.
					</p>
					<Link
						to={'/about'}
						onClick={handleClick}
						className='button button-secondary button-light'
					>
						About Us
					</Link>
				</div>
			</div>
		</section>
	);
};

export default PartnersSection;
