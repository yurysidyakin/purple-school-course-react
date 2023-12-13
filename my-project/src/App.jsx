import './App.css';
import Button from './components/Button/Button';
import Title from './components/Title/Title';
import Text from './components/Text/Text';

function App() {
  const text = [
    'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'
  ];
  const title = ['Поиск'];
  return (
    <>
      <Title title={title[0]} />
      <Text text={text[0]} />
      <Button />
    </>
  );
}

export default App;
