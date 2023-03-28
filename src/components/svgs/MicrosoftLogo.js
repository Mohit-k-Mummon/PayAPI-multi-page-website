import React from 'react';
import { ReactComponent as MicrosoftLogoSvg } from '../../assets/shared/desktop/microsoft.svg';

const MicrosoftLogo = props => {
	return <MicrosoftLogoSvg className={`microsoft-logo ${props.className}`} />;
};

export default MicrosoftLogo;
