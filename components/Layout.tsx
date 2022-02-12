import React, { ReactChild, ReactChildren } from 'react';

import NavBar from './NavBar';
import Seo from './Seo';

interface Props {
	children: ReactChild | ReactChildren;
}
const Layout = ({ children }: Props) => {
	return (
		<>
			<Seo />
			<NavBar />
			<div>{children}</div>
		</>
	);
};

export default Layout;
