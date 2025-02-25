import axios, { AxiosError } from 'axios';
import {
	ChangeEvent,
	MutableRefObject,
	useEffect,
	useRef,
	useState,
} from 'react';
import Button from '../../components/Button/Button';
import CardItem from '../../components/CardItem/CardItem';
import CardList from '../../components/CardList/CardList';
import InputAndButtonWrapper from '../../components/InputAndButtonWrapper/InputAndButtonWrapper';
import InputSearch from '../../components/InputSearch/InputSearch';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import './Menu.module.css';

function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const getMenu = async (name?: string) => {
		try {
			setIsLoading(true);
			const { data } = await axios.get<Product[]>(`${PREFIX}`, {
				params: {
					name,
				},
			});

			setProducts(data.description);
			setIsLoading(false);
		} catch (e) {
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			console.error(e);
			setIsLoading(false);
			return;
		}
	};

	const inputSearchRef = useRef();
	const inputNameRef = useRef();

	const focusInput = (inputRef: MutableRefObject<undefined>) => {
		if (inputRef.current === inputSearchRef.current) {
			inputSearchRef.current.focus();
		} else if (inputRef.current === inputNameRef.current) {
			inputNameRef.current.focus();
		}
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
					onChange={updateFilter}
				/>
				<Button onClick={() => focusInput(inputSearchRef)}>Искать</Button>
			</InputAndButtonWrapper>
			<CardList>
				{error && <>{error}</>}
				{!isLoading &&
					products.length > 0 &&
					products.map(el => (
						<CardItem
							rank={el['#RANK']}
							image={el['#IMG_POSTER']}
							title={el['#AKA']}
							key={el['#IMDB_ID']}
							id={el['#IMDB_ID']}
						/>
					))}
				{isLoading && <div>Загружаем фильмы...</div>}
				{products.length === 0 && <div>Фильм не найден...</div>}
			</CardList>
		</>
	);
}

export default Menu;
