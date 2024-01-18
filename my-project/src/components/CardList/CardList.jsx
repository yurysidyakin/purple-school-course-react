import styles from './CardList.module.css';
import cn from 'classnames';

function CardList({ children }) {
	return <ul className={cn(styles['card-list'])}>{children}</ul>;
}

export default CardList;
