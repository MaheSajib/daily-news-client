import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from "swiper";
import slide1 from '../../../image/1.jpg';
import slide2 from '../../../image/2.jpg';
import { Card } from 'react-bootstrap';
import hCard1 from '../../../image/hCard1.jpg';
import hCard2 from '../../../image/hCard2.jpg';
import './HeroSection.css';

SwiperCore.use([Autoplay]);

const HeroSection = () => {
    return (
        <div className="container">
            <div className=" d-flex row justify-content-center ">
            <div className="col-md-9 mx-auto mt-5 slider" style={{ width: '50rem' }}>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img style={{ width: '50rem' , height:'30rem'}} src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ width: '50rem' , height:'30rem'}} src={slide2} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ width: '50rem' , height:'30rem'}} src={slide1} alt="" /></SwiperSlide>
                    <SwiperSlide><img style={{ width: '50rem' , height:'30rem'}} src={slide2} alt="" /></SwiperSlide>
                </Swiper>
            </div>
            <div className="col-md-3 ">
                <Card className="mt-2 mb-2 heroCard" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hCard1} />
                    <Card.Body>
                        <Card.Title>Uproar as Brazil v Argentina clash abandoned following Covid controversy</Card.Title>
                    </Card.Body>
                </Card>

                <Card className="mt-5" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={hCard2} />
                    <Card.Body>
                        <Card.Title>Bangladesh reports 65 new Covid deaths and 2,710 new cases in 24 hrs</Card.Title>
                    </Card.Body>
                </Card>
            </div>
        </div>
        </div>
    );
};

export default HeroSection;