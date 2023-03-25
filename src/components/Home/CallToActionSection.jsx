import React from 'react';

const CallToActionSection = () => {
	return (
		<section className='call-to-action container'>
			<h1>Ready to Start?</h1>
			<form className='call-to-action__form'>
				<label className='sr-only' htmlFor='input-field'>
					Enter email address
				</label>
				<input
					placeholder='Enter email address'
					id='input-field-cta'
					aria-label='Enter email address'
					type='text'
				/>
				<button id='call-to-action__form-inner-button' className='button button-primary'>
					Schedule a Demo
				</button>
			</form>
			<button
				id='call-to-action__form-outer-button'
				className='button button-primary button-long'
			>
				Schedule a Demo
			</button>
		</section>
	);
};

export default CallToActionSection;
