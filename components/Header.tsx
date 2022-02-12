import styled from 'styled-components';

const HeaderContainer = styled.div`
	width: 100vw;
	height: 10vh;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	position: sticky;
	top: 0;
`;

const HeaderTitle = styled.div`
	flex: 2;
	height: 100%;
	border: 1px solid black;
	font-size: 1rem;
	font-weight: bold;
	font-family: 'Jua', sans-serif;
	text-align: center;
	background-color: -gradient(90deg, #2333e5 0%, #f782b7 100%);
`;
const SearchBar = styled.div`
	flex: 1;
	border: 1px solid black;
`;

const Header = () => {
	return (
		<HeaderContainer>
			<HeaderTitle>신규가입하면 첫 커피챗 무료!</HeaderTitle>
			<SearchBar></SearchBar>
		</HeaderContainer>
	);
};

export default Header;
