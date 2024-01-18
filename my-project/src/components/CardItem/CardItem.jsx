import styles from './CardItem.module.css';

function CardItem({ image, status, title, rating }) {
	return (
		<div className={styles['card-item']}>
			<div className={styles['card-item__header']}>
				<img src={image} alt='image' className={styles['card-item__image']} />
				<img src={rating} className={styles['card-item__status-img']}></img>
			</div>
			<div className={styles['card-item__description']}>
				<p className={styles['card-item__title']}>{title}</p>
				<div className={styles['card-item__status']}>
					<img src='../../../public/like.svg' alt='like' />
					<div className={styles['card-item__status-text']}>{status}</div>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
