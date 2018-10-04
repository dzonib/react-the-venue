import React from 'react';
import Slider from 'react-slick';
import slideOne from '../../resources/images/slide_one.jpg';
import slideTwo from '../../resources/images/slide_two.jpg';
import slideThree from '../../resources/images/slide_three.jpg';

const Carousel = () => {
	const settings = {
		dots: false,
		infinite: true,
		autoplay: true,
		speed: 1000
	};

	return (
		<div className="carousel-wrapper" style={{ overflow: 'hidden', height: '100vh', background: 'red' }}>
			<Slider {...settings}>
				<div>
					<div className="carousel_image" style={{ background: `url(${slideOne})`, height: '100vh' }} />
				</div>
				<div>
					<div className="carousel_image" style={{ background: `url(${slideThree})`, height: '100vh' }} />
				</div>
				<div>
					<div className="carousel_image" style={{ background: `url(${slideTwo})`, height: '100vh' }} />
				</div>
			</Slider>
		</div>
	);
};

export default Carousel;
