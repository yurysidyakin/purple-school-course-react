import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { favoriteActions } from '../../store/favorite.slice';
import { AppDispatch } from '../../store/store';
import styles from './CardItem.module.css';
import { CardItemProps } from './CardItem.props';

function CardItem(props: CardItemProps) {
	const dispatch = useDispatch<AppDispatch>();
	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(favoriteActions.add(props.id));
	};

	return (
		<NavLink to={`/movie/${props.id}`}>
			<div className={cn(styles['card-item'])}>
				<div className={cn(styles['card-item__header'])}>
					<img
						src={props.image}
						alt='image'
						className={cn(styles['card-item__image'])}
					/>
					<div className={cn(styles['card-item__rank'])}>
						<img src='../../../public/star-icon.svg' alt='Иконка звезды' />
						{props.rank}
					</div>
				</div>
				<div className={cn(styles['card-item__description'])}>
					<p className={cn(styles['card-item__title'])}>{props.title}</p>
					<div onClick={add} className={cn(styles['card-item__status'])}>
						<img src='../../../public/like.svg' alt='like' />
						<div className={cn(styles['card-item__status-text'])}>
							В избранное
						</div>
					</div>
				</div>
			</div>
		</NavLink>
	);
}

export default CardItem;
