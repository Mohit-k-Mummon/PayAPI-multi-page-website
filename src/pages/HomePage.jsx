import React from 'react';
import ReactDOM from 'react-dom';

import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';

const BgCircle = () => {
	return <img src={BgCircleImg} alt=''></img>;
};

const HomePage = () => {
	return (
		<>
			{ReactDOM.createPortal(<BgCircle />, document.getElementById('bg-circle-homepage'))}
			<h1>HomePage</h1>
		</>
	);
};

export default HomePage;
