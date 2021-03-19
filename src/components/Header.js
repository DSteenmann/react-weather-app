import '../css/header.css';

const Header = () => {
    return (
        <nav>
            <h1>
                WeatherApp
            </h1>
            <div>
                <span class="material-icons">search</span>
                <input placeholder="Search for city, state, country"></input>
            </div>
            <a>news</a>
        </nav>
    )
}

export default Header
