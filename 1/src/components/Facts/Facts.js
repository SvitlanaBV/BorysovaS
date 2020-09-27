import React from 'react';
import SlideFacts from "./SlideFacts";
import SwiperCore, {Navigation, Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';
//import {useScreenSize} from "../../utils/useScreenSize";

SwiperCore.use([Navigation, Pagination]);

const Facts = ({title, slides}) => {
    //const winSize = useScreenSize();
    const factsSlides = slides.map((slide) => <SwiperSlide key={slide.id}>
        <SlideFacts item={slide} />
    </SwiperSlide>);

    return (
        <section className="facts container">
            <h2 className="facts-title">
                {title}
            </h2>
            <div className="swiper-button-prev"/>
            <Swiper
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={{
                    el: '.facts-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return `<span class="facts-pagination-bullet ${className}"></span>`;
                     },
                }}
                spaceBetween={30}
                slidesPerView={3}
                slidesPerGroup={3}
                centeredSlides={true}
                //loop={true}
                //loopFillGroupWithBlank={true}
            >
                {factsSlides}
            </Swiper>
            <div className="swiper-button-next"/>
            <div className="facts-pagination" />

        </section>
    );
};

export default Facts;