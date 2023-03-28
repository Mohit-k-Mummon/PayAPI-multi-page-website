import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

// Import Images
import mobileBanner from '../../assets/about/mobile/image-team-members.jpg';
import TabletBanner from '../../assets/about/tablet/image-team-members.jpg';
import DesktopBanner from '../../assets/about/desktop/image-team-members.jpg';

const AboutSection = () => {
	useEffect(() => {
		AOS.init({
			duration: 800,
		});
	}, []);
	return (
		<section className='about'>
			<div className='about__container'>
				<h1>We empower innovators by delivering access to the financial system</h1>
				<div className='container__text'>
					<div>
						<h2 data-aos='fade-up'>Our Vision</h2>
					</div>
					<p data-aos='fade-up' data-aos-delay='50'>
						Our main goal is to build beautiful consumer experiences along with
						developer-friendly infrastructure. The result is an intelligent tool that
						gives everyone the ability to create amazing products that solve big
						problems. We are deeply focused on democratizing financial services through
						technology.
					</p>
				</div>
				<div className='container__text'>
					<div>
						<h2 data-aos='fade-up' data-aos-delay='100'>
							Our Business
						</h2>
					</div>
					<p data-aos='fade-up' data-aos-delay='150'>
						At the core of our platform is the technical infrastructure APIs that
						connect consumers. Our innovative product provides key insights for
						businesses and individuals, as well as robust reporting for traditional
						financial institutions and developers.
					</p>
				</div>
			</div>
			<picture data-aos='zoom-in-up' data-aos-once='true' className='banner-container'>
				<source srcSet={mobileBanner} media='(max-width: 420px)'></source>
				<source srcSet={TabletBanner} media='(max-width: 768px)'></source>
				<source srcSet={DesktopBanner} media='(min-width: 769px)'></source>
				<img className='about__banner' src={mobileBanner} alt='Default' />
			</picture>
			<div className='company-overview container'>
				<div className='overview-container'>
					<div className='company-overview__stat'>
						<h3 data-aos='fade-up'>Team Members</h3>
						<p data-aos='fade-up' data-aos-delay='50'>
							300+
						</p>
					</div>
					<div className='company-overview__stat'>
						<h3 data-aos='fade-up' data-aos-delay='100'>
							Offices in the US
						</h3>
						<p data-aos='fade-up' data-aos-delay='150'>
							3
						</p>
					</div>
					<div className='company-overview__stat'>
						<h3 data-aos='fade-up' data-aos-delay='200'>
							Transactions analyzed
						</h3>
						<p data-aos='fade-up' data-aos-delay='250'>
							10M+
						</p>
					</div>
				</div>
			</div>
			<div className='about__container'>
				<div className='container__text'>
					<div>
						<h2>The Culture</h2>
					</div>
					<p>
						We strongly believe there's always an opportunity to learn from each other
						outside of day-to-day work, whether it's company-wide offsites, internal
						hackathons, or co-worker meetups. We always value cross-team collaboration
						and diversity of thought, no matter the job title.
					</p>
				</div>
				<div className='container__text'>
					<div>
						<h2>The People</h2>
					</div>
					<p>
						We're all passionate about building a more efficient and inclusive financial
						infrastructure together. At PayAPI, we have diverse backgrounds and skills.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
