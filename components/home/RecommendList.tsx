import styled from 'styled-components';
import Slick from '../common/Slick';
import Recommend from './Recommend';

interface recommendsProps {
	item: string;
	name: string;
}

const Container = styled.div`
	height: 324px;
	padding-top: 24px;
	padding-bottom: 24px;
`;

const TitleContainer = styled.div`
	color: rgba(28, 31, 41, 0.8);
	font-size: 18px;
	font-family: 'Jua', sans-serif;
	font-weight: bold;
	padding-left: 24px;
	margin-bottom: 24px;
	padding-right: 24px;
`;

const RecommendList = () => {
	const recommends: recommendsProps[] = [
		{
			item: '/images/recommend/recommend01.png',
			name: 'recommend01',
		},
		{
			item: '/images/recommend/recommend02.png',
			name: 'recommend02',
		},
		{
			item: '/images/recommend/recommend03.png',
			name: 'recommend03',
		},
	];
	return (
		<Container>
			<TitleContainer>추천 파트너</TitleContainer>
			<Slick>
				{recommends.map((recommend) => (
					<Recommend key={recommend.name} item={recommend.item} name={recommend.name} />
				))}
			</Slick>
		</Container>
	);
};

export default RecommendList;
