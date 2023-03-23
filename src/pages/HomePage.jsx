import React from 'react';
import ReactDOM from 'react-dom';

// Components
import HeroSection from '../components/Home/HeroSection';
import PartnersSection from '../components/Home/PartnersSection';

// Images
import BgCircleImg from '../assets/shared/desktop/bg-pattern-circle.svg';
import FeaturesSection from '../components/Home/FeaturesSection';

const BgCircle = () => {
	return <img src={BgCircleImg} alt=''></img>;
};

const HomePage = () => {
	return (
		<>
			{ReactDOM.createPortal(<BgCircle />, document.getElementById('bg-circle-homepage'))}
			<HeroSection />
			<PartnersSection />
			<FeaturesSection />
		</>
	);
};

export default HomePage;
