import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CardItem from '../../components/CardItem/CardItem';
import Title from '../../components/Title/Title';
import { Film } from '../../store/favorite.slice';
import { RootState } from '../../store/store';

export function Favorites() {
	const [items, setItems] = useState<Film[]>([]);
	const films = useSelector((s: RootState) => s.favorite.films);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Film>(
			`https://search.imdbot.workers.dev/?${id}`
		);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map(i => getItem(i.id)));
		setItems(res);
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);
	return (
		<>
			<Title>Избранное</Title>
			{items.map(i => {
				const film = items.find(p => p.id === i.id);
				if (!film) {
					return;
				}
				return <CardItem image={''} title={''} rank={0} id={0}></CardItem>;
			})}
		</>
	);
}
