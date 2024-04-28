import React from 'react'
import styles from '../styles/common.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function MovieCard(movie) {
    const { id, type, title, synopsis } = movie.jawSummary;
    console.log(movie);
    return (
        <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={movie.jawSummary.backgroundImage.url} alt={title} width={260} height={200} />
            </div>
            <div className={styles.card_data}>
                <h2>{title.substring(0, 18)}</h2>
                <p>
                    {`${synopsis.substring(0, 66)} ...`}
                </p>

                <Link href={`/movie/${id}`}>
                    <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                        Read More
                    </button>

                </Link>
            </div>
        </div>)
}
