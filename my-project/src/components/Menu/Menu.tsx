import cn from 'classnames';
import styles from './Menu.module.css';
import { MenuProps } from './MenuProps';

function Menu({ User }: MenuProps) {
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
						{User.name}
						<img src='../../../public/user.svg' alt='Иконка пользователя' />
					</a>
				</li>
				<li className={cn(styles['menu__item'])}>
					<a href='#' className={cn(styles['menu__link'])}>
						Выйти
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
