import React from 'react';
import ReactDOM from 'react-dom';
import './ContactPage.css';

import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';

import CallToActionSection from '../components/shared/CallToActionSection';
import ContactSection from '../components/Contact/ContactSection';

const BgCircle = () => {
	return <img src={BgCircleImg} alt=''></img>;
};

const ContactPage = () => {
	return (
		<>
			{ReactDOM.createPortal(
				<BgCircle />,
				document.getElementById('bg-circle-pricing-contact-about')
			)}
			<ContactSection />
			<CallToActionSection className='contact-page' />
		</>
	);
};

export default ContactPage;
