import { useEffect, useState } from 'react';
import { getAllCategories } from '../api/api';
import CategoryList from '../components/CategoryList';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

export default function Home() {
    const [categories, setCategories] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCategories().then((data) => {
        setCategories(data.categories);
        setFiltered(data.categories);
        setLoading(false);
        });
    }, []);

    const handleSearch = (str) => {
        if (!str) {
        setFiltered(categories);
        return;
        }

        const filteredList = categories.filter((item) =>
        item.strCategory.toLowerCase().includes(str.toLowerCase())
        );
        setFiltered(filteredList);
    };

    return (
        <>
        <h1 className="text-center my-4">Категории блюд</h1>
        <Search onSearch={handleSearch} />
        {loading ? <Preloader /> : <CategoryList categories={filtered} />}
        </>
    );
}

