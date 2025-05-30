import { useState } from 'react';

export default function Search({ onSearch }) {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(value.trim());
    };

    return (
        <form className="input-group my-4" onSubmit={handleSubmit}>
        <input
            type="text"
            className="form-control"
            placeholder="Поиск блюда по названию..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Поиск</button>
        </form>
    );
}
