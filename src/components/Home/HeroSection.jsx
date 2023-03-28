import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import phoneImg from '../../assets/home/desktop/illustration-phone-mockup.svg';

// Router
import { Link } from 'react-router-dom';

const HeroSection = () => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<section className='hero container'>
			<div className='hero__image-container'>
				<img
					data-aos='fade-down'
					data-aos-duration='800'
					data-aos-delay='100'
					src={phoneImg}
					alt='smartphone displaying a notification from payAPI'
				/>
			</div>
			<div className='hero__content'>
				<h1 data-aos='fade-right' data-aos-duration='800'>
					Start building with our APIs for absolutely free.
				</h1>
				<form
					data-aos='fade-right'
					data-aos-duration='800'
					data-aos-delay='100'
					className='hero__content-form'
				>
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
				<p data-aos='fade-right' className='hero__contact'>
					Have any questions? <Link to={'/contact'}>Contact Us</Link>
				</p>
			</div>
		</section>
	);
};

export default HeroSection;
