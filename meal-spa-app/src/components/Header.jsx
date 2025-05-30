import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
        <Link className="navbar-brand" to="/">Meal SPA</Link>
        <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </div>
        </nav>
    );
}
