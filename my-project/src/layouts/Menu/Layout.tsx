import cn from 'classnames';
import { NavLink, Outlet } from 'react-router-dom';
import Container from '../Container/Container';
import styles from './Layout.module.css';
import { LayoutProps } from './LayoutProps';

export function Layout({ User }: LayoutProps) {
	return (
		<Container>
			<header className={cn(styles['header'])}>
				<img src='/public/logo.svg' alt='Иконка логотипа' />
				<nav className={cn(styles['menu'])}>
					<ul className={cn(styles['menu__list'])}>
						<li className={cn(styles['menu__item'])}>
							<NavLink
								to='/'
								className={({ isActive }) =>
									cn(styles['menu__link'], {
										[styles.active]: isActive,
									})
								}
							>
								Поиск фильмов
							</NavLink>
						</li>
						<li className={cn(styles['menu__item'])}>
							<NavLink
								to='/favorites'
								className={({ isActive }) =>
									cn(styles['menu__link'], {
										[styles.active]: isActive,
									})
								}
							>
								Мои фильмы
							</NavLink>
						</li>
						<li className={cn(styles['menu__item'])}>
							<NavLink
								to='/login'
								className={({ isActive }) =>
									cn(styles['menu__link'], {
										[styles.active]: isActive,
									})
								}
							>
								Войти
								<img
									className={styles['exit-icon']}
									src='/public/exit-icon.svg'
									alt='Иконка выхода'
								/>
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
			<Outlet />
		</Container>
	);
}
