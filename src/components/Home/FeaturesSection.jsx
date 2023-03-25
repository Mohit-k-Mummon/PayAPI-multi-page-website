import React from 'react';

import { ReactComponent as EasyImplementImg } from '../../assets/home/desktop/easy-implement.svg';
import { ReactComponent as SimpleUIUX } from '../../assets/home/desktop/illustration-simple-ui.svg';
import BgCircle from '../../assets/shared/desktop/bg-pattern-circle.svg';

const FeaturesSection = () => {
	return (
		<section className='features container'>
			<img className='bg-circle' src={BgCircle} alt='' />
			<div className='feature-easy'>
				<div className='feature-easy__img-container'>
					<EasyImplementImg className='easy-img' />
				</div>
				<div className='feature-easy__content'>
					<h1>Easy to implement</h1>
					<p>
						Our API comes with just a few lines of code. You’ll be up and running in no
						time. We built our documentation page to integrate payments functionality
						with ease.
					</p>
				</div>
			</div>
			<div className='feature-simple-ui'>
				<div className='feature-simple-ui__img-container'>
					<SimpleUIUX className='simple-img' />
				</div>
				<div className='feature-simple__content'>
					<h1>Simple UI & UX</h1>
					<p>
						Our pre-built form is easy to integrate in your app or website’s checkout
						flow and designed to optimize conversion.
					</p>
				</div>
			</div>
		</section>
	);
};

export default FeaturesSection;
