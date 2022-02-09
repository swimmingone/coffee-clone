import type { NextPage } from 'next';
import styled from 'styled-components';

const StyledH1 = styled.h1`
	font-family: ${(props) => props.theme.font.heading};
`;

const About: NextPage = () => {
	return <StyledH1> About </StyledH1>;
};

export default About;
