import { useRef, useState } from 'react';
import Button from '../../components/Button/Button';
import CardItem from '../../components/CardItem/CardItem';
import { CardItemProps } from '../../components/CardItem/CardItem.props';
import CardList from '../../components/CardList/CardList';
import InputAndButtonWrapper from '../../components/InputAndButtonWrapper/InputAndButtonWrapper';
import InputSearch from '../../components/InputSearch/InputSearch';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';
import './Menu.module.css';
import db from '/public/db';

export function Menu() {
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
			<Title>Поиск</Title>
			<Text>
				Введите название фильма, сериала или мультфильма для поиска и добавления
				в избранное.
			</Text>
			<InputAndButtonWrapper>
				<InputSearch
					placeholder='Введите название фильма'
					ref={inputSearchRef}
				/>
				<Button onClick={() => focusInput(inputSearchRef)}>Искать</Button>
			</InputAndButtonWrapper>
			<CardList>
				{db.map((el: CardItemProps) => (
					<CardItem
						status={el.status}
						rating={el.rating}
						image={el.image}
						title={el.title}
						key={el.id}
						id={el.id}
					/>
				))}
			</CardList>
		</>
	);
}
