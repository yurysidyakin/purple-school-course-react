import styles from './Menu.module.css';

function Menu() {
	return (
		<nav className={styles['menu']}>
			<ul className={styles['menu__list']}>
				<li className={styles['menu__item']}>
					<a href='#' className={styles['menu__link']}>
						Поиск фильмов
					</a>
				</li>
				<li className={styles['menu__item']}>
					<a href='#' className={styles['menu__link']}>
						Мои фильмы
					</a>
				</li>
				<li className={styles['menu__item']}>
					<a href='#' className={styles['menu__link']}>
						Войти
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
