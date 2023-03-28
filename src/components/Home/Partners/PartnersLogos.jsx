import React from 'react';

import TeslaLogo from '../../../components/svgs/TeslaLogo';
import MicrosoftLogo from '../../../components/svgs/MicrosoftLogo';
import HewlettLogo from '../../../components/svgs/HewlettLogo';
import OracleLogo from '../../../components/svgs/OracleLogo';
import GoogleLogo from '../../../components/svgs/GoogleLogo';
import NvidiaLogo from '../../../components/svgs/NvidiaLogo';

const PartnersLogos = props => {
	return (
		<div className='partners__logos'>
			{/* These Svgs are their own components and they have a class in their respective components */}
			<TeslaLogo className={props.className} />
			<MicrosoftLogo className={props.className} />
			<HewlettLogo className={props.className} />
			<OracleLogo className={props.className} />
			<GoogleLogo className={props.className} />
			<NvidiaLogo className={props.className} />
		</div>
	);
};

export default PartnersLogos;
