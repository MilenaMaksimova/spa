import CategoryItem from './CategoryItem';

export default function CategoryList({ categories = [] }) {
    return (
        <div className="row">
        {categories.map((cat) => (
            <div className="col-md-4 mb-4" key={cat.idCategory}>
            <CategoryItem {...cat} />
            </div>
        ))}
        </div>
    );
}
