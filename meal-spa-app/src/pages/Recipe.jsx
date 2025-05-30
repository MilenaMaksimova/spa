import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Preloader from '../components/Preloader';

export default function Recipe() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [meal, setMeal] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(res => res.json())
        .then(data => {
            setMeal(data.meals[0]);
            setLoading(false);
        });
    }, [id]);

    return (
        <>
        <button onClick={() => navigate(-1)} className="btn btn-secondary my-3">
            ⬅ Назад
        </button>

        {loading ? (
            <Preloader />
        ) : (
            <>
            <h2>{meal.strMeal}</h2>
            <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                className="img-fluid mb-4"
                style={{ maxWidth: '500px' }}
            />
            <p><strong>Категория:</strong> {meal.strCategory}</p>
            {meal.strArea && <p><strong>Кухня:</strong> {meal.strArea}</p>}

            <h4 className="mt-4">Ингредиенты:</h4>
            <table className="table">
                <tbody>
                {Array.from({ length: 20 }, (_, i) => i + 1)
                    .map(i => {
                    const ingredient = meal[`strIngredient${i}`];
                    const measure = meal[`strMeasure${i}`];
                    return ingredient && ingredient.trim() ? (
                        <tr key={i}>
                        <td>{ingredient}</td>
                        <td>{measure}</td>
                        </tr>
                    ) : null;
                    })}
                </tbody>
            </table>

            <h4 className="mt-4">Инструкция:</h4>
            <p>{meal.strInstructions}</p>

            {meal.strYoutube && (
                <div className="mt-4">
                <h4>Видео рецепт:</h4>
                <iframe
                    title="YouTube Video"
                    width="100%"
                    height="400"
                    src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                    allowFullScreen
                />
                </div>
            )}
            </>
        )}
        </>
    );
}
