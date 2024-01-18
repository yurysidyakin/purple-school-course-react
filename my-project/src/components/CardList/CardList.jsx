import styles from './CardList.module.css';

function CardList({ children }) {
	return <ul className={styles['card-list']}>{children}</ul>;
}

export default CardList;
