import { useLoaderData } from 'react-router-dom';
import { Product } from '../../interfaces/product.interface';
import styles from './Movie.module.css';
import { MovieProps } from './Movie.props';

export function Movie(props: MovieProps) {
	const data = useLoaderData() as Product;

	return (
		<>
			<div className={styles['head']}>
				<p>Поиск фильмов</p>
				<h2>{data.fake['#TITLE']}</h2>
			</div>
			<div className={styles['content']}>
				<div className={styles['left-side']}>
					<img
						className={styles['image']}
						src={`${data.fake['#IMG_POSTER']}`}
						alt='Постер фильма'
					/>
				</div>
				<div className={styles['right-side']}>
					<p className={styles['text']}>{data.short['description']}</p>
					<div className={styles['wrapper']}>
						<div className={styles['rank']}>{data.fake['#RANK']}</div>
						<div className={styles['status']}>
							<img src='../../../public/like.svg' alt='Иконка лайка' />
							<p> В избранное</p>
						</div>
					</div>
					<ul className={styles['detail__list']}>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Тип</p>
							<p className={styles['detail__text']}>Movie</p>
						</li>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Дата выхода</p>
							<p className={styles['detail__text']}>
								{data.short['datePublished']}
							</p>
						</li>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Длительность</p>
							<p className={styles['detail__text']}>
								{data.main.runtime['seconds'] / 60}
							</p>
						</li>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Жанр</p>
							<p className={styles['detail__text']}>
								{data.short['genre'].join(', ')}
							</p>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles['footer']}>
				<p className={styles['footer__subtitle']}>Отзывы</p>
				<div className={styles['footer__content']}>
					<div className={styles['footer__wrapper']}>
						<p className={styles['footer__title']}>
							Not as good as infinity war..
						</p>
						<div className={styles['footer__date']}>2019-04-29</div>
					</div>
					<p className={styles['footer__text']}>
						But its a pretty good film. A bit of a mess in some parts, lacking
						the cohesive and effortless feel infinity war somehow managed to
						accomplish. Some silly plot holes and characters that could&apos;ve
						been cut (Ahem, captain marvel and thanos). The use of Captain
						marvel in this film was just ridiculous. Shes there at the start,
						bails for some reason? And then pops up at the end to serve no
						purpose but deux ex machina a space ship...
					</p>
				</div>
			</div>
		</>
	);
}
