import styled from 'styled-components';
import Slick from '../common/Slick';
import Event from './Event';

interface eventsProps {
	item: string;
	name: string;
}

const Container = styled.div`
	height: 268px;
	margin-bottom: 24px;
`;

const EventList = () => {
	const events: eventsProps[] = [
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
				{events.map((event) => (
					<Event key={event.name} item={event.item} name={event.name} />
				))}
			</Slick>
		</Container>
	);
};

export default EventList;
