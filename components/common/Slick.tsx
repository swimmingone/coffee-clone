import { useMemo } from 'react';
import styled from 'styled-components';
import Slider, { Settings } from 'react-slick';

const SlideWrapper = styled.section`
	position: relative;
`;

interface Props {
	/** 슬라이더 아이템 요소 */
	children: React.ReactNode;
	/** 커스텀 클래스 */
	className?: string;
	/** 자동재생 (속도 설정시 number 타입으로) */
	autoplay?: boolean | number;
	/** 슬라이더 속도 */
	speed?: number;
	/** 반복 여부 */
	loop?: boolean;
}

const Slick = ({ children, className, autoplay = false, speed = 300, loop = true }: Props) => {
	const settings = useMemo<Settings>(
		() => ({
			dots: false,
			infinite: loop,
			speed: speed,
			slidesToShow: 1,
			autoplay: Boolean(autoplay),
			autoplaySpeed: typeof autoplay === 'boolean' ? 3000 : autoplay,
			arrows: false,
			centerMode: true,
			centerPadding: '15px',
		}),
		[autoplay, loop, speed],
	);
	return (
		<SlideWrapper className={className}>
			<Slider {...settings}>{children}</Slider>
		</SlideWrapper>
	);
};

export default Slick;
