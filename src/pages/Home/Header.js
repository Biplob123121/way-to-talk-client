import React from 'react'
import { Link } from 'react-router-dom';
import SharedButton from '../../SharedButton/SharedButton';

function Header() {
    return (
        <header>
            <div className="hero h-screen" style={{ backgroundImage: `url("/images/plane.jpg")` }}>
                <div className="hero-overlay bg-opacity-70"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Hello there</h1>
                        <p className="mb-5">Here, we are providing the information about Canada. If you want to go to Canada and you need information, you can contact with us. We give the information about Canadian University, Visa processing.... </p>
                        <Link to={"/about"}><SharedButton>See More</SharedButton></Link>

                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header