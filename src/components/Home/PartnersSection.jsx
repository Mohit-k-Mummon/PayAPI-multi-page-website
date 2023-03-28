import React from 'react';

import { Link, useNavigate } from 'react-router-dom';

// Images
import BgCircleImg from '../../assets/shared/desktop/bg-pattern-circle.svg';
import PartnersLogos from './Partners/PartnersLogos';

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
				<PartnersLogos className='light' />
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
