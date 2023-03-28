import React, { useState } from 'react';

import { ReactComponent as CheckmarkIcon } from '../../assets/shared/desktop/icon-check.svg';
import PartnersLogos from '../../components/Home/Partners/PartnersLogos';

const ContactSection = () => {
	// Up to date checkbox state
	const [isChecked, setIsChecked] = useState(false);

	// Checkbox change handler
	const handleCheckBoxChange = event => {
		setIsChecked(event.target.checked);
	};

	return (
		<section className='contact container'>
			<h1 className='contact__main-heading'>
				Submit a help request and we'll get in touch shortly.
			</h1>
			<div className='contact__container'>
				<form className='contact__form'>
					<div className='input-container'>
						<label className='sr-only' htmlFor='name'>
							Name
						</label>
						<input
							type='text'
							id='name'
							name='name'
							required
							placeholder='Name'
							maxLength='100'
						></input>
					</div>
					<div className='input-container'>
						<label className='sr-only' htmlFor='email'>
							Email Address
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							placeholder='Email Address'
							maxLength='255'
						></input>
					</div>
					<div className='input-container'>
						<label className='sr-only' htmlFor='company'>
							Company Name
						</label>
						<input
							type='text'
							id='company'
							name='company'
							placeholder='Company Name'
							maxLength='100'
						></input>
					</div>
					<div className='input-container'>
						<label className='sr-only' htmlFor='title'>
							Title
						</label>
						<input
							type='text'
							id='title'
							name='title'
							placeholder='Title'
							maxLength='100'
						></input>
					</div>
					<div className='input-container'>
						<label className='sr-only' htmlFor='message'>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							required
							placeholder='Message'
							maxLength='500'
						></textarea>
					</div>
					<div className='checkbox-container'>
						<label className='sr-only' htmlFor='updates'>
							Stay up-to-date with company announcements and updates to our API
						</label>
						<input
							onChange={handleCheckBoxChange}
							type='checkbox'
							id='updates'
							name='updates'
							value='yes'
						></input>
						<CheckmarkIcon className={isChecked ? 'checked' : ''} />
						<p>Stay up-to-date with company announcements and updates to our API</p>
					</div>
					<button type='submit' className='button button-secondary button-dark'>
						Submit
					</button>
				</form>
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
