import React from 'react';

// Images
import personalFinancesImg from '../../assets/home/desktop/icon-personal-finances.svg';
import consumerPaymentsImg from '../../assets/home/desktop/icon-consumer-payments.svg';
import bankingAndCoverageImg from '../../assets/home/desktop/icon-banking-and-coverage.svg';

const AdvantagesSection = () => {
	return (
		<section className='advantages container'>
			<div className='advantage-container'>
				<img src={personalFinancesImg} alt='Personal finances data visualization' />
				<h1>Personal Finances</h1>
				<p>
					Consolidate financial data from multiple sources and categorize transactions up
					to 2 years of history. Analyze reports to reconcile activities in your account.{' '}
				</p>
			</div>
			<div className='advantage-container'>
				<img src={bankingAndCoverageImg} alt='Banking and coverage services illustration' />
				<h1>Banking & Coverage</h1>
				<p>
					With our platform, you can speed up account onboarding and support ongoing
					payments for checking, savings, credit card, and brokerage accounts.
				</p>
			</div>
			<div className='advantage-container'>
				<img
					src={consumerPaymentsImg}
					alt='Consumer payments secure authentication process'
				/>
				<h1>Consumer Payments</h1>
				<p>
					It’s easier to set up secure bank payments with us through a flow designed with
					the user experience in mind. Customers could instantly authenticate their
					account.
				</p>
			</div>
		</section>
	);
};

export default AdvantagesSection;
