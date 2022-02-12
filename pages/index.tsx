import type { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => {
	const StyledH1 = styled.h1`
		font-family: ${(props) => props.theme.font.heading};
	`;
	return <StyledH1>Home</StyledH1>;
};

export default Home;
