import React from 'react';
import { ReactComponent as HewlettLogoSvg } from '../../assets/shared/desktop/hewlett-packard.svg';

const HewlettLogo = props => {
	return <HewlettLogoSvg className={`hewlett-logo ${props.className}`} />;
};

export default HewlettLogo;
