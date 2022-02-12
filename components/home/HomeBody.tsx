import styled from 'styled-components';
import EventList from './EventList';
import PartnerList from './PartnerList';
import CategoryList from './CategoryList';
import ReviewList from './ReviewList';
import RecommendList from './RecommendList';
import MentorList from './MentorList';
import InfoFooter from './InfoFooter';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 414px;
	border: 1px solid black;
	padding-left: 24px;
	padding-right: 24px;
`;

const HomeBody = () => {
	return (
		<Container>
			<EventList />
			<CategoryList />
			<PartnerList />
			<ReviewList />
			<RecommendList />
			<MentorList />
			<MentorList />
			<MentorList />
			<InfoFooter />
		</Container>
	);
};

export default HomeBody;
