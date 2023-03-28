import React from 'react';
import { ReactComponent as GoogleLogoSvg } from '../../assets/shared/desktop/google.svg';

const GoogleLogo = props => {
	return <GoogleLogoSvg className={`google-logo ${props.className}`} />;
};

export default GoogleLogo;
