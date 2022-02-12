import styled from 'styled-components';
import Category from './Category';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 286px;
	margin-left: 24px;
	margin-right: 24px;
	margin-bottom: 40px;
`;

const ListContainer = styled.div`
	display: flex;
	width: 100%;
	max-width: 366px;
	justify-content: space-between;
	margin: 24px 24px 0px;
`;

const ButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	max-width: 366px;
	margin: 32px 24px 40px;
	background-color: rgb(230, 238, 250);
	border-radius: 8px;
`;

const RecommendButton = styled.button`
	border: 0;
	color: inherit;
	cursor: pointer;
	display: inline-flex;
	outline: 0;
	padding: 0;
	position: relative;
	align-items: center;
	user-select: none;
	vertical-align: middle;
	justify-content: center;
	text-decoration: none;
	background-color: transparent;
	-webkit-appearance: none;
	-webkit-tap-highlight-color: transparent;
`;

const ButtonContent = styled.div`
	color: rgba(28, 31, 41, 0.96);
	height: 56px;
	display: flex;
	font-size: 16px;
	font-weight: bold;
	align-items: center;
	font-family: 'Jua', sans-serif;
	justify-content: center;
	background-color: rgb(230, 238, 250);
`;

interface CategoryProps {
	item: string;
	name: string;
}
const CategoryList = () => {
	const categories: CategoryProps[] = [
		{
			item: '/images/category/corp.png',
			name: '대기업',
		},
		{
			item: '/images/category/startup.png',
			name: '스타트업',
		},
		{
			item: '/images/category/foreign.png',
			name: '외국계',
		},
		{
			item: '/images/category/it.png',
			name: 'IT/테크',
		},
		{
			item: '/images/category/consulting.png',
			name: '전략컨설팅',
		},
		{
			item: '/images/category/mba.png',
			name: 'MBA/대학원',
		},
		{
			item: '/images/category/abroad.png',
			name: '해외취업',
		},
		{
			item: '/images/category/download.png',
			name: '전체보기',
		},
	];
	return (
		<Container>
			<ListContainer>
				{categories.slice(0, 4).map((category) => (
					<Category key={category.name} img={category.item} name={category.name} />
				))}
			</ListContainer>
			<ListContainer>
				{categories.slice(4).map((category) => (
					<Category key={category.name} img={category.item} name={category.name} />
				))}
			</ListContainer>
			<ButtonContainer>
				<RecommendButton>
					<ButtonContent>꼭 맞는 파트너 추천받기</ButtonContent>
				</RecommendButton>
			</ButtonContainer>
		</Container>
	);
};

export default CategoryList;
