import styled from 'styled-components';

interface Props {
	item: string;
	name: string;
}

const Container = styled.div`
	width: 100%;
	img {
		max-width: 100%;
	}
`;

const ImgContainer = styled.div`
	margin: 0 3px;
	cursor: pointer;
`;

const Recommend = ({ item, name }: Props) => {
	return (
		<Container>
			<ImgContainer>
				<img src={item} alt={name} />
			</ImgContainer>
		</Container>
	);
};

export default Recommend;
