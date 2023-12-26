import './Menu.css';

function Menu() {
	return (
		<nav className='menu'>
			<ul className='menu__list'>
				<li className='menu__item'>
					<a href='#' className='menu__link'>
						Поиск фильмов
					</a>
				</li>
				<li className='menu__item'>
					<a href='#' className='menu__link'>
						Мои фильмы
					</a>
				</li>
				<li className='menu__item'>
					<a href='#' className='menu__link'>
						Войти
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Menu;
