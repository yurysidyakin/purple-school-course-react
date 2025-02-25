import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { AppDispatch, RootState } from '../../store/store';
import { userActions } from '../../store/user.slice';
import Container from '../Container/Container';
import styles from './Layout.module.css';
import { LayoutProps } from './LayoutProps';

export function Layout({ User }: LayoutProps) {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const logout = () => {
		dispatch(userActions.logout());
		navigate('auth/login');
	};
	const films = useSelector((s: RootState) => s.favorite.films);
	console.log(films.reduce((acc, item) => (acc += item.count), 0));

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
							<div className={cn(styles['menu__link--favorites'])}>
								{films.length}
							</div>
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
									onClick={logout}
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
