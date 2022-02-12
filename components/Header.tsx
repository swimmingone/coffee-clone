import styled from 'styled-components';
import SubHeader from './SubHeader';

const HeaderContainer = styled.div`
	width: 100vw;
	display: flex;
	flex-direction: column;
	overflow: scroll;
	position: sticky;
	top: 0;
	z-index: 1;
`;

const Banner = styled.div`
	display: flex;
	justify-content: center;
	flex: 2;
	height: 64px;
	color: white;
	text-align: center;
	background: linear-gradient(90deg, #2333e5 0%, #f782b7 100%);
`;
const BannerContent = styled.div`
	display: flex;
	justify-content: space-between;
	width: 366px;
`;
const BannerTitle = styled.div`
	display: flex;
	flex: 3;
	text-align: left;
	align-items: center;
	font-size: 16px;
	font-weight: bold;
	font-family: 'Jua', sans-serif;
`;
const BannerButton = styled.button`
	flex: 1;
	margin-top: 15px;
	margin-bottom: 15px;
	color: black;
	font-size: 13px;
	font-weight: bold;
	font-family: 'Jua', sans-serif;
	padding: 8px 16px;
	border-radius: 100px;
	border: none;
	background-color: white;
`;
const Header = () => {
	return (
		<HeaderContainer>
			<Banner>
				<BannerContent>
					<BannerTitle>신규가입하면 첫 커피챗 무료!</BannerTitle>
					<BannerButton>앱으로 보기</BannerButton>
				</BannerContent>
			</Banner>
			<SubHeader />
		</HeaderContainer>
	);
};

export default Header;
