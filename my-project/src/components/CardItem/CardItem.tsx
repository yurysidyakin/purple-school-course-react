import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.props';

function CardItem(props: CardItemProps) {
	return (
		<NavLink to={`/movie/${props.id}`}>
			<div className={cn(styles['card-item'])}>
				<div className={cn(styles['card-item__header'])}>
					<img
						src={props.image}
						alt='image'
						className={cn(styles['card-item__image'])}
					/>
					<img
						src={props.rating}
						className={cn(styles['card-item__status-img'])}
					></img>
				</div>
				<div className={cn(styles['card-item__description'])}>
					<p className={cn(styles['card-item__title'])}>{props.title}</p>
					<div className={cn(styles['card-item__status'])}>
						<img src='../../../public/like.svg' alt='like' />
						<div className={cn(styles['card-item__status-text'])}>
							{props.status}
						</div>
					</div>
				</div>
			</div>
		</NavLink>
	);
}

export default CardItem;
