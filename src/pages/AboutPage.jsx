import React from 'react';
import ReactDOM from 'react-dom';

import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';

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
			<h1>AboutPage</h1>
		</>
	);
};

export default AboutPage;
