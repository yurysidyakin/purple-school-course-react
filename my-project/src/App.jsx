import {useRef } from 'react';
import db from '../public/db';
import './App.css';
import Button from './components/Button/Button';
import CardItem from './components/CardItem/CardItem';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import InputSearch from './components/InputSearch/InputSearch';
import InputAndButtonWrapper from './components/InputWrapper/InputAndButtonWrapper';
import Text from './components/Text/Text';
import Title from './components/Title/Title';
import Body from './layouts/Body/Body';
import Container from './layouts/Container/Container';
import InputName from './components/InputName/InputName';

function App() {
	const text = [
		'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
	];

	const title = ['Поиск', 'Вход'];

	const inputSearchRef = useRef();
	const inputNameRef = useRef();

	const focusInput = (inputRef) => {
		
		if(inputRef.current == inputSearchRef.current) {
			inputSearchRef.current.focus();
		}
		
		if(inputRef.current == inputNameRef.current) {
			inputNameRef.current.focus();
		} 
	};

	return (
		<>
			<Body>
				<Container>
					<Header />
					<Title title={title[0]} />
					<Text text={text[0]} />
					<InputAndButtonWrapper>
						<InputSearch placeholder = "Введите название фильма" ref={inputSearchRef}/>
						<Button text='Искать' onClick={()=>focusInput(inputSearchRef)}/>
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
					<Title title={title[1]} />
					<InputAndButtonWrapper>
						<InputName placeholder = "Ваше имя" ref={inputNameRef}/>
						<Button text='Войти в профиль' onClick={()=>focusInput(inputNameRef)}/>
					</InputAndButtonWrapper>
				</Container>
			</Body>
		</>
	);
}

export default App;
