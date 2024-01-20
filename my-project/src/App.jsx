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

function App() {
	const text = [
		'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
	];

	const title = ['Поиск'];

	return (
		<>
			<Body>
				<Container>
					<Header />
					<Title title={title[0]} />
					<Text text={text[0]} />
					<InputAndButtonWrapper>
						<InputSearch />
						<Button text='Искать' />
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
				</Container>
			</Body>
		</>
	);
}

export default App;
