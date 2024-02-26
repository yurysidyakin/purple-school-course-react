import cn from 'classnames';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.proprs';

function CardItem({ image, status, title, rating }: CardItemProps) {
	return (
		<div className={cn(styles['card-item'])}>
			<div className={cn(styles['card-item__header'])}>
				<img
					src={image}
					alt='image'
					className={cn(styles['card-item__image'])}
				/>
				<img src={rating} className={cn(styles['card-item__status-img'])}></img>
			</div>
			<div className={cn(styles['card-item__description'])}>
				<p className={cn(styles['card-item__title'])}>{title}</p>
				<div className={cn(styles['card-item__status'])}>
					<img src='../../../public/like.svg' alt='like' />
					<div className={cn(styles['card-item__status-text'])}>{status}</div>
				</div>
			</div>
		</div>
	);
}

export default CardItem;
