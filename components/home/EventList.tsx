import styled from 'styled-components';
import Slick from '../common/Slick';
import Event from './Event';

interface itemsProps {
	item: string;
	name: string;
}

const Container = styled.div`
	height: 268px;
	margin-bottom: 24px;
`;

const EventList = () => {
	const items: itemsProps[] = [
		{
			item: '/images/event/event01.png',
			name: 'event01',
		},
		{
			item: '/images/event/event02.png',
			name: 'event02',
		},
		{
			item: '/images/event/event03.png',
			name: 'event03',
		},
		{
			item: '/images/event/event04.png',
			name: 'event04',
		},
		{
			item: '/images/event/event05.png',
			name: 'event05',
		},
		{
			item: '/images/event/event06.png',
			name: 'event06',
		},
	];
	return (
		<Container>
			<Slick>
				{items.map((item, index) => (
					<Event key={item.name} item={item.item} name={item.name} />
				))}
			</Slick>
		</Container>
	);
};

export default EventList;
