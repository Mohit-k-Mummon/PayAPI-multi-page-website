import React from 'react';

// Component
import ContactForm from './ContactForm';
import PartnersLogos from '../../components/Home/Partners/PartnersLogos';

const ContactSection = () => {
	return (
		<section className='contact container'>
			<h1 className='contact__main-heading'>
				Submit a help request and we'll get in touch shortly.
			</h1>
			<div className='contact__container'>
				<ContactForm />
				<div className='contact__partners'>
					<h1 className='heading'>
						Join the thousands of innovators already building with us
					</h1>
					<PartnersLogos className='dark' />
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
