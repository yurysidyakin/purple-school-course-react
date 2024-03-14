import cn from 'classnames';
import styles from './CardList.module.css';
import { CardListProps } from './CardList.props';

function CardList({ children }: CardListProps) {
	return <ul className={cn(styles['card-list'])}>{children}</ul>;
}

export default CardList;
