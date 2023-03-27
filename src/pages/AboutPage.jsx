import React from 'react';
import ReactDOM from 'react-dom';
import './AboutPage.css';

import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';

import AboutSection from '../components/About/AboutSection';
import CallToActionSection from '../components/shared/CallToActionSection';

const BgCircle = () => {
	return <img src={BgCircleImg} alt=''></img>;
};

const AboutPage = () => {
	return (
		<>
			{ReactDOM.createPortal(
				<BgCircle />,
				document.getElementById('bg-circle-pricing-contact-about')
			)}
			<AboutSection />
			<CallToActionSection className='about-page' />
		</>
	);
};

export default AboutPage;
