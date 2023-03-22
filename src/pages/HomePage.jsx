import React from 'react';
import ReactDOM from 'react-dom';

// Components
import HeroSection from '../components/Home/HeroSection';

// Images
import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';

const BgCircle = () => {
	return <img src={BgCircleImg} alt=''></img>;
};

const HomePage = () => {
	return (
		<>
			{ReactDOM.createPortal(<BgCircle />, document.getElementById('bg-circle-homepage'))}
			<HeroSection />
		</>
	);
};

export default HomePage;
