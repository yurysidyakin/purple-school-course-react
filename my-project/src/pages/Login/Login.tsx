import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import InputName from '../../components/InputName/InputName';
import Title from '../../components/Title/Title';
import { AppDispatch } from '../../store/store';
import { userActions } from '../../store/user.slice';

export function Login() {
	const [inputName, setInputName] = useState('');
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const inputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputName(event.target.value);
	};

	const addName = (event: any) => {
		event.preventDefault();
		dispatch(userActions.addName(inputName));
		navigate('/');
	};

	return (
		<>
			<Title>Вход</Title>
			<InputName placeholder='Введите имя' onChange={inputChange} />
			<Button onClick={addName}>Ввойдите в профиль</Button>
		</>
	);
}
