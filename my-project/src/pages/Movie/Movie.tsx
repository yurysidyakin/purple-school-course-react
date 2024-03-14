import { useParams } from 'react-router-dom';
import styles from './Movie.module.css';

export function Movie() {
	const { id } = useParams();
	return (
		<>
			<div className={styles['head']}>
				<p>Поиск фильмов</p>
				<h2>Avengers: Endgame</h2>
			</div>
			<div className={styles['content']}>
				<div className={styles['left-side']}>
					<img
						className={styles['image']}
						src={`../../../public/images/CardImage${id}.jpg`}
						alt='Постер фильма'
					/>
				</div>
				<div className={styles['right-side']}>
					<p className={styles['text']}>
						After the devastating events of Avengers: Infinity War, the universe
						is in ruins due to the efforts of the Mad Titan, Thanos. With the
						help of remaining allies, the Avengers must assemble once more in
						order to undo Thanos' actions and restore order to the universe once
						and for all, no matter what consequences may be in store.
					</p>
					<div className={styles['wrapper']}>
						<img
							className={styles['image-rating']}
							src={`../../../public/images/Rating${id}.svg`}
							alt='Рейтинг фильма'
						/>
						<div className={styles['status']}>
							<img src='../../../public/like.svg' alt='Иконка лайка' />
							<p>В избранное</p>
						</div>
					</div>
					<ul className={styles['detail__list']}>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Тип</p>
							<p className={styles['detail__text']}>Movie</p>
						</li>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Дата выхода</p>
							<p className={styles['detail__text']}>2019-04-24</p>
						</li>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Длительность</p>
							<p className={styles['detail__text']}>181 мин</p>
						</li>
						<li className={styles['detail__item']}>
							<p className={styles['detail__subtitle']}>Жанр</p>
							<p className={styles['detail__text']}>
								Adventure, Science Fiction, Action
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
