import styled from 'styled-components';
import Link from 'next/link';

const Container = styled.div`
	height: 48px;
	display: flex;
	background-color: white;
	margin: 0px 8px 0px 12px;
	justify-content: space-between;
`;

const LogoButton = styled.button`
	color: inherit;
	border: 0;
	cursor: pointer;
	margin: 0;
	display: inline-flex;
	outline: 0;
	padding: 0;
	position: relative;
	align-items: center;
	border-radius: 0;
	user-select: none;
	justify-content: center;
	background-color: transparent;
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
	width: 128px;
`;

const MenuContainer = styled.div`
	padding: 12px;
`;

const SubHeader = () => {
	return (
		<Container>
			<Link href={'/'}>
				<LogoButton>
					<img src="/images/title-logo.svg" width="104" alt="logo" />
				</LogoButton>
			</Link>
			<MenuContainer></MenuContainer>
		</Container>
	);
};

export default SubHeader;
