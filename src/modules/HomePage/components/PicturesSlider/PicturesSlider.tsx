import React from 'react';
import styles from './PicturesSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useTheme } from '../../../../hooks/useTheme';
import { Link } from 'react-router-dom';

const slides = [
	{ name: 'banner-1', link: '/phones/apple-iphone-14-pro-256gb-spaceblack' },
	{ name: 'banner-phones', link: '/phones' },
	{ name: 'banner-accessories', link: '/accessories' },
];

export const PicturesSlider: React.FC = () => {
	const { theme } = useTheme();

	return (
		<section className={styles.slider}>
			<div className={styles.swiperWrapper}>
				<div className={`custom-swiper-prev ${styles.navBtn}`}>
					<img
						src={`./img/icons/arrow-left-${theme}.svg`}
						alt="Previous"
					/>
				</div>

				<Swiper
					modules={[Autoplay, Pagination, Navigation]}
					autoplay={{ delay: 50000, disableOnInteraction: false }}
					loop={true}
					pagination={{ el: '.custom-pagination', clickable: true }}
					navigation={{
						prevEl: '.custom-swiper-prev',
						nextEl: '.custom-swiper-next',
					}}
					slidesPerView={1}
					className={styles.sliderSwiper}
				>
					{slides.map(({ name, link }, index) => (
						<SwiperSlide key={index}>
							<Link to={link} className={styles.linkWrapper}>
								<div
									className={`${styles.image} ${styles[name]}`}
									role="link"
									tabIndex={0}
								/>
							</Link>
						</SwiperSlide>
					))}
				</Swiper>

				<div className={`custom-swiper-next ${styles.navBtn}`}>
					<img
						src={`./img/icons/arrow-right-${theme}.svg`}
						alt="Next"
					/>
				</div>
			</div>
			<div className="custom-pagination" />
		</section>
	);
};
