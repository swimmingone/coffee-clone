import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	padding: 32px 24px 40px;
	height: 272px;
`;

const TitleContainer = styled.p`
	color: rgba(28, 31, 41, 0.96);
	font-size: 18px;
	font-family: 'Jua', sans-serif;
	font-weight: 900;
	line-height: 1.5;
	margin: 0;
`;

const SubContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: 16px;
`;

const StyledImage = styled.img`
	width: 175px;
	border-radius: 8px;
	cursor: pointer;
	margin-right: 8px;
`;
const StyledText = styled.p`
	color: #1c1f29;
	cursor: pointer;
	font-size: 14px;
	font-family: 'Jua', sans-serif;
	margin-top: 8px;
`;
const Introduction = () => {
	return (
		<Container>
			<TitleContainer>커피챗 소개</TitleContainer>
			<SubContainer>
				<div>
					<StyledImage src="/images/introduction.png" alt="소개" />
					<StyledText>커피챗 소개</StyledText>
				</div>
				<div>
					<StyledImage src="/images/faq.png" alt="자주묻는질문" />
					<StyledText>자주 묻는 질문</StyledText>
				</div>
			</SubContainer>
		</Container>
	);
};

export default Introduction;
