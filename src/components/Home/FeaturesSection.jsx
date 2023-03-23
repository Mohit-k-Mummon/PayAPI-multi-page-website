import React from 'react';

import { ReactComponent as EasyImplementImg } from '../../assets/home/desktop/easy-implement.svg';

const FeaturesSection = () => {
	return (
		<section className='features container'>
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
			<div className='feature-simple-ui/ux'></div>
		</section>
	);
};

export default FeaturesSection;
