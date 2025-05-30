import { Link } from 'react-router-dom';

export default function CategoryItem({ strCategory, strCategoryDescription, strCategoryThumb }) {
    return (
        <div className="card">
        <img src={strCategoryThumb} className="card-img-top" alt={strCategory} />
        <div className="card-body">
            <h5 className="card-title">{strCategory}</h5>
            <p className="card-text">{strCategoryDescription.slice(0, 100)}...</p>
            <Link to={`/category/${strCategory}`} className="btn btn-primary">Смотреть блюда</Link>
        </div>
        </div>
    );
}
