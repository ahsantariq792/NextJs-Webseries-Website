import React from 'react'
import Herosection from '../components/HeroSecton'
import HomePageImage from "../assets/homepage.jpg"
const HomePage = () => {
    return (
        <Herosection title="Home Page" imageUrl={HomePageImage} />
    )
}

export default HomePage