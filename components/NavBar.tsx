import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Container = styled.nav`
	margin-top: 1rem;
	width: 5rem;
`;

const StyledLink = styled.a`
      text-decoration: : none;
	  cursor: pointer;
	  font-family: ${(props) => props.theme.font.heading};
	  color: ${(props) => (props.classname === 'active' ? 'tomato' : 'black')};
`;

const NavBar = () => {
	const router = useRouter();
	return (
		<Container>
			<Link href={'/'}>
				<StyledLink classname={router.pathname === '/' ? 'active' : ''}>Home</StyledLink>
			</Link>
			<Link href={'/about'}>
				<StyledLink classname={router.pathname === '/about' ? 'active' : ''}>
					About
				</StyledLink>
			</Link>
		</Container>
	);
};

export default NavBar;
