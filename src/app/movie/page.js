import MovieCard from "../components/MovieCard";
import styles from '../styles/common.module.css'
const Movie = async () => {

    console.log("hi");

    const url = 'https://netflix54.p.rapidapi.com/search?query';

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    var response = await fetch(url, options);
    response = await response.json()
    const data = response.titles

    return (
        <>
            <section className={styles.movieSection}>
                <h1 className="text-center">Series & Movie</h1>
                <div className={styles.card_section}>
                    {
                        data.map((movie, index) =>
                            <MovieCard key={index} {...movie} />
                        )
                    }
                </div>
            </section>
        </>
    )
}

export default Movie