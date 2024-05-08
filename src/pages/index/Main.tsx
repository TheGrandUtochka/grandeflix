import { useSelector } from 'react-redux';
import Card from "../../components/Card/Card.tsx";

export default function Main() {
    const films = useSelector(state => state.films.films); // Проверьте правильность пути

    return (
        <div className="grid grid-cols-4 mx-12">
            {films.map(film => (
                <Card key={film.id} {...film} /> // Корректно передает пропс film в Card
            ))}
        </div>
    );
}
