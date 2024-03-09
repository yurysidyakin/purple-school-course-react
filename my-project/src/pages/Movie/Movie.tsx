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
				</div>
			</div>
			<div className={styles['footer']}>
				<p>
					After the devastating events of Avengers: Infinity War, the universe
					is in ruins due to the efforts of the Mad Titan, Thanos. With the help
					of remaining allies, the Avengers must assemble once more in order to
					undo Thanos' actions and restore order to the universe once and for
					all, no matter what consequences may be in store.
				</p>
			</div>
		</>
	);
}
