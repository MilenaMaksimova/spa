import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';

export default function Category() {
    const { name } = useParams(); // вытаскиваем имя категории из URL
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`)
        .then(res => res.json())
        .then(data => {
            setMeals(data.meals || []);
            setLoading(false);
        });
    }, [name]);

    return (
        <>
        <button onClick={() => navigate(-1)} className="btn btn-secondary my-3">
            ⬅ Назад
        </button>

        <h2 className="mb-4">Блюда категории: {name}</h2>

        {loading ? (
            <Preloader />
        ) : (
            <div className="row">
            {meals.map(meal => (
                <div className="col-md-4 mb-4" key={meal.idMeal}>
                <div className="card">
                    <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                    <div className="card-body">
                    <h5 className="card-title">{meal.strMeal}</h5>
                    <p>
                        <button
                        className="btn btn-primary"
                        onClick={() => navigate(`/meal/${meal.idMeal}`)}
                        >
                        Смотреть рецепт
                        </button>
                    </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        )}
        </>
    );
}
