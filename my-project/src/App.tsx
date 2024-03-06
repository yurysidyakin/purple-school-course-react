import { useRef, useState } from 'react';
import db from '../public/db';
import './App.css';
import Button from './components/Button/Button';
import CardItem from './components/CardItem/CardItem';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import InputAndButtonWrapper from './components/InputAndButtonWrapper/InputAndButtonWrapper';
import InputName from './components/InputName/InputName';
import InputSearch from './components/InputSearch/InputSearch';
import Text from './components/Text/Text';
import Title from './components/Title/Title';
import Body from './layouts/Body/Body';
import Container from './layouts/Container/Container';

function App() {
	const text = [
		'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.',
	];

	const title = ['Поиск', 'Вход'];

	interface User {
		name: string;
		isLogined: boolean;
	}

	const [inputNameValue, setInputNameValue] = useState('');
	const [usersList, setUsersList] = useState([]);

	const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
		setInputNameValue(event.target.value);
	};

	const inputSearchRef = useRef();
	const inputNameRef = useRef();

	const focusInput = inputRef => {
		if (inputRef.current === inputSearchRef.current) {
			inputSearchRef.current.focus();
		} else if (inputRef.current === inputNameRef.current) {
			inputNameRef.current.focus();
		}
	};

	const handleRegistration = () => {
		if (inputNameValue.trim() === '') {
			focusInput(inputNameRef);
		}

		const newUser: User = { name: inputNameValue, isLogined: true };

		const filterUserListForName = usersList.some(
			user => user.name === newUser.name
		);
		const filterUserListForIsLogined = usersList.some(
			user => user.isLogined == false
		);

		if (!filterUserListForName && !filterUserListForIsLogined) {
			setUsersList([...usersList, newUser]);
			localStorage.setItem('users', JSON.stringify([...usersList, newUser]));
		}
		setInputNameValue('');
	};

	return (
		<>
			<Body>
				<Container>
					<Header
						User={usersList.length > 0 ? usersList[usersList.length - 1] : ''}
					/>
					<Title>{title[0]}</Title>
					<Text>{text[0]}</Text>
					<InputAndButtonWrapper>
						<InputSearch
							placeholder='Введите название фильма'
							ref={inputSearchRef}
						/>
						<Button onClick={() => focusInput(inputSearchRef)}>Искать</Button>
					</InputAndButtonWrapper>
					<CardList>
						{db.map(el => (
							<CardItem
								status={el.status}
								rating={el.rating}
								image={el.image}
								title={el.title}
								key={el.id}
							/>
						))}
					</CardList>
					<Title>{title[1]}</Title>
					<InputAndButtonWrapper>
						<InputName
							placeholder='Ваше имя'
							ref={inputNameRef}
							value={inputNameValue}
							onChange={handleChangeName}
						/>
						<Button onClick={handleRegistration}>Войти в профиль</Button>
					</InputAndButtonWrapper>
				</Container>
			</Body>
		</>
	);
}

export default App;
