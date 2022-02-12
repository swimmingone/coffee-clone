import React, { ReactChild, ReactChildren } from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Seo from './Seo';
import Header from './Header';

const BodyContainer = styled.div`
	display: flex;
	justify-content: center;
`;

interface Props {
	children: ReactChild | ReactChildren;
}
const Layout = ({ children }: Props) => {
	return (
		<>
			<Seo />
			<Header />
			{/*<NavBar />*/}
			<BodyContainer>{children}</BodyContainer>
		</>
	);
};

export default Layout;
