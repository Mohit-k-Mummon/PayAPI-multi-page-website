import React from 'react';
import { ReactComponent as NvidiaLogoSvg } from '../../assets/shared/desktop/nvidia.svg';

const NvidiaLogo = props => {
	return <NvidiaLogoSvg className={`nvidia-logo ${props.className}`} />;
};

export default NvidiaLogo;
