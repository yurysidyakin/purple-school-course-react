import styles from './Menu.module.css';
import cn from 'classnames';

function Menu() {
	return (
		<nav className={cn(styles['menu'])}>
			<ul className={cn(styles['menu__list'])}>
				<li className={cn(styles['menu__item'])}>
					<a href='#' className={cn(styles['menu__link'])}>
						Поиск фильмов
					</a>
				</li>
				<li className={cn(styles['menu__item'])}>
					<a href='#' className={cn(styles['menu__link'])}>
						Мои фильмы
					</a>
				</li>
				<li className={cn(styles['menu__item'])}>
					<a href='#' className={cn(styles['menu__link'])}>
						Войти
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
