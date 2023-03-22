import React from 'react';

import phoneImg from '../../assets/home/desktop/illustration-phone-mockup.svg';

const HeroSection = () => {
	return (
		<section className='hero container'>
			<div className='hero__image-container'>
				<img src={phoneImg} alt='smartphone displaying a notification from payAPI' />
			</div>
			<div className='hero__content'>
				<h1>Start building with our APIs for absolutely free.</h1>
				<form className='hero__content-form'>
					<label className='sr-only' htmlFor='input-field'>
						Enter email address
					</label>
					<input
						placeholder='Enter email address'
						id='input-field'
						aria-label='Enter email address'
						type='text'
					/>
					<button id='hero__form-inner-button' className='button button-primary'>
						Schedule a Demo
					</button>
				</form>
				<button id='hero__form-outer-button' className='button button-primary button-long'>
					Schedule a Demo
				</button>
			</div>
		</section>
	);
};

export default HeroSection;
