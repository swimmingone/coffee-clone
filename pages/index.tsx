import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-family: ${(props) => props.theme.font.heading};
`;

const Home: NextPage = () => {
	return <StyledH1> Hello </StyledH1>;
};

export default Home;
