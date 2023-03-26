import React from 'react';

// Images
import checkmarkIcon from '../../assets/shared/desktop/icon-check.svg';

const PricingSection = () => {
	return (
		<section className='pricing-plans container'>
			<h1 className='heading'>Pricing</h1>
			<div className='pricing-plans__container'>
				<div className='plan'>
					<header className='plan__header'>
						<h1>Free Plan</h1>
						<p>
							Build and test using our core set of products with up to 100 API
							requests{' '}
						</p>
						<div className='plan__price'>$0.00</div>
					</header>
					<ul className='plan__features'>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Transactions
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Auth
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Identity
						</li>
						<li className='excluded'>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Investments
						</li>
						<li className='excluded'>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Assets
						</li>
						<li className='excluded'>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Liabilities
						</li>
						<li className='excluded'>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Income
						</li>
					</ul>
					<div className='button-container'>
						<button className='button button-secondary button-dark'>
							Request Access
						</button>
					</div>
				</div>
				<div className='plan'>
					<header className='plan__header'>
						<h1>Basic Plan</h1>
						<p>
							Launch your project with unlimited requests and no contractual minimums{' '}
						</p>
						<div className='plan__price'>$249.00</div>
					</header>
					<ul className='plan__features'>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Transactions
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Auth
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Identity
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Investments
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Assets
						</li>
						<li className='excluded'>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Liabilities
						</li>
						<li className='excluded'>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Income
						</li>
					</ul>
					<div className='button-container'>
						<button className='button button-secondary button-dark'>
							Request Access
						</button>
					</div>
				</div>
				<div className='plan'>
					<header className='plan__header'>
						<h1>Premium Plan</h1>
						<p>
							Get tailored solutions, volume pricing, and dedicated support for your
							team{' '}
						</p>
						<div className='plan__price'>$499.00</div>
					</header>
					<ul className='plan__features'>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Transactions
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Auth
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Identity
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Investments
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Assets
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Liabilities
						</li>
						<li>
							<img src={checkmarkIcon} alt='checkmark icon' />
							Income
						</li>
					</ul>
					<div className='button-container'>
						<button className='button button-secondary button-dark'>
							Request Access
						</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default PricingSection;
