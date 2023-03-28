import React from 'react';
import { ReactComponent as OracleLogoSvg } from '../../assets/shared/desktop/oracle.svg';

const OracleLogo = props => {
	return <OracleLogoSvg className={`oracle-logo ${props.className}`} />;
};

export default OracleLogo;
