import styled from 'styled-components';

const Container = styled.div`
	display: block;
	cursor: pointer;
`;
const ImageContainer = styled.button`
	width: 64px;
	height: 64px;
	display: flex;
	align-items: center;
	border-radius: 8px;
	border: none;
	justify-content: center;
	background-color: rgb(245, 247, 250);
	cursor: pointer;
`;
const NameContainer = styled.div`
	color: rgba(28, 31, 41, 0.96);
	font-size: 13px;
	margin-top: 8px;
	font-family: 'Jua', sans-serif;
	text-align: center;
`;

interface Props {
	img: string;
	name: string;
}

const Category = ({ img, name }: Props) => {
	return (
		<Container>
			<ImageContainer>
				<img src={img} alt={name} width={64} height={64} />
			</ImageContainer>
			<NameContainer>{name}</NameContainer>
		</Container>
	);
};

export default Category;
