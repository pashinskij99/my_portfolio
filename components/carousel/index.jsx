import React from 'react'
import {Swiper, SwiperSlide} from "swiper/react"
import {Navigation, Pagination} from 'swiper'
import styles from './styles.module.scss'
import my_img from '../../assets/images/about/photo-1.jpg'

const photoArray = [my_img, my_img, my_img, my_img, my_img]

export const Carousel = () => {
	return (
		<Swiper
			className={styles.carousel}
			speed={1000}
			slidesPerView={3}
			loop
			centeredSlides={true}
			modules={[Navigation, Pagination]}
			pagination={{
				clickable: true
			}}
		>
			{photoArray.map(item => (
				<SwiperSlide className={styles.carouselItem} key={item.src}>
					<img className={styles.carouselItemImg} src={item.src} alt="Me"/>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
