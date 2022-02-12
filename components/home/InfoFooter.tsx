import styled from 'styled-components';

const Container = styled.div`
	display: block;
	background-color: rgb(250, 250, 250);
	//height: 424px;
	height: 240px;
	padding-inline: 24px;
`;

const TitleContainer = styled.div`
	display: flex;
	align-items: center;
	font-family: sans-serif;
`;

const MainContainer = styled.div`
	display: flex;
`;
const InfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	font-family: 'Jua', sans-serif;
`;

const StyledHead = styled.h6`
	color: rgba(28, 31, 41, 0.96);
	font-size: 16px;
	font-weight: 900;
	line-height: 1.6;
	margin-top: 40px;
	margin-bottom: 10px;
`;

const StyledSubhead = styled.h6`
	color: rgba(28, 31, 41, 0.96);
	font-size: 13px;
	margin-left: 8px;
	letter-spacing: -0.02em;
	font-weight: 500;
	line-height: 1.6;
	margin-top: 40px;
	margin-bottom: 10px;
`;

const StyledInfo = styled.h6`
	color: rgba(42, 47, 61, 0.48);
	width: 120px;
	height: 18px;
	font-size: 12px;
	margin-top: 8px;
	margin-bottom: 0px;
`;

const StyledContent = styled.pre`
	color: rgba(42, 47, 61, 0.48);
	height: 18px;
	font-size: 12px;
	font-weight: normal;
	margin-top: 8px;
	margin-bottom: 0px;
`;

const InfoFooter = () => {
	return (
		<Container>
			<TitleContainer>
				<StyledHead>COFFEECHAT</StyledHead>
				<StyledSubhead> | </StyledSubhead>
				<StyledSubhead>주식회사 커피챗</StyledSubhead>
			</TitleContainer>
			<MainContainer>
				<InfoContainer>
					<StyledInfo>사업자 등록번호</StyledInfo>
					<StyledInfo>통신판매업 신고 번호</StyledInfo>
					<StyledInfo>사업장 주소</StyledInfo>
					<StyledInfo>전화번호</StyledInfo>
					<StyledInfo>E-mail</StyledInfo>
				</InfoContainer>
				<InfoContainer>
					<StyledContent>439-87-02115 | 대표: 박상우</StyledContent>
					<StyledContent>2021-서울성동-02009</StyledContent>
					<StyledContent>서울시 성동구 성수일로8길 55</StyledContent>
					<StyledContent>010-8680-8978</StyledContent>
					<StyledContent>team@coffeechat.kr</StyledContent>
				</InfoContainer>
			</MainContainer>
		</Container>
	);
};

export default InfoFooter;
