import React from 'react';
import ReactDOM from 'react-dom';

import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';

// Components
import PricingSection from '../components/Pricing/PricingSection';
import CallToActionSection from '../components/shared/CallToActionSection';

// CSS
import './PricingPage.css';

const BgCircle = () => {
	return <img src={BgCircleImg} alt=''></img>;
};

const PricingPage = () => {
	return (
		<>
			{ReactDOM.createPortal(
				<BgCircle />,
				document.getElementById('bg-circle-pricing-contact-about')
			)}
			<PricingSection />
			<CallToActionSection className='pricing-page' />
		</>
	);
};

export default PricingPage;
