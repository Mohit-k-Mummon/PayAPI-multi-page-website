import React from 'react';
import { ReactComponent as TeslaLogoSvg } from '../../assets/shared/desktop/tesla.svg';

const TeslaLogo = props => {
	return <TeslaLogoSvg className={`tesla-logo ${props.className}`} />;
};

export default TeslaLogo;
