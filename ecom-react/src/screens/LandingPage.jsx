
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function LandingPage() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>

            <Navbar />

            {/* Hero */}
            <section className="bg-light">

                <div className="container py-5">

                    <div className="row align-items-center min-vh-75">

                        <div className="col-lg-6 py-5">

                            <span className="badge bg-primary-subtle text-primary mb-3 px-3 py-2">
                                LEVEL UP YOUR SETUP
                            </span>

                            <h1 className="display-3 fw-bold mb-4">
                                Everything you need
                                <span className="text-primary">
                                    {' '}to play & explore.
                                </span>
                            </h1>

                            <p className="lead text-secondary mb-4">
                                Discover the latest video games, gaming gear,
                                electronics and tech essentials, all in one place.
                            </p>

                            <div className="d-flex gap-3">

                                <Link
                                    to="/app"
                                    className="btn btn-primary btn-lg px-4"
                                >
                                    Shop now
                                </Link>

                                <Link
                                    to="/categories"
                                    className="btn btn-outline-dark btn-lg px-4"
                                >
                                    Browse categories
                                </Link>

                            </div>

                        </div>


                        <div className="col-lg-6">

                            <div className="hero-image">

                                <img
                                    src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=1200&q=80"
                                    alt="Gaming setup"
                                    className="img-fluid rounded-4 shadow"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* Categories */}
            <section className="container py-5">

                <div className="text-center mb-5">

                    <p className="text-primary fw-semibold mb-2">
                        EXPLORE
                    </p>

                    <h2 className="fw-bold">
                        Shop by category
                    </h2>

                    <p className="text-secondary">
                        Find games, gaming gear and technology for your setup.
                    </p>

                </div>


                {categories.length === 0 ? (

                    <div className="text-center py-5">

                        <div className="spinner-border text-primary mb-3">
                            <span className="visually-hidden">
                                Loading...
                            </span>
                        </div>

                        <p className="text-secondary">
                            Loading categories...
                        </p>

                    </div>

                ) : (

                    <div className="row g-4">

                        {categories.map(category => (

                            <div
                                className="col-md-4"
                                key={category.id}
                            >

                                <Link
                                    to={`/app?category=${category.id}`}
                                    className="text-decoration-none"
                                >

                                    <div className="category-card position-relative overflow-hidden rounded-4">

                                        <img
                                            src="https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=800&q=80"
                                            className="w-100"
                                            alt={category.name}
                                        />

                                        <div className="category-overlay">

                                            <h3>
                                                {category.name}
                                            </h3>

                                            <p>
                                                Explore our {category.name.toLowerCase()} collection.
                                            </p>

                                            <span className="btn btn-light">
                                                Shop now →
                                            </span>

                                        </div>

                                    </div>

                                </Link>

                            </div>

                        ))}

                    </div>

                )}

            </section>


            {/* Features */}
            <section className="bg-light py-5">

                <div className="container">

                    <div className="row g-4 text-center">

                        <div className="col-md-4">

                            <div className="p-4">

                                <div className="feature-icon mb-3">
                                    🚚
                                </div>

                                <h5 className="fw-bold">
                                    Fast delivery
                                </h5>

                                <p className="text-secondary mb-0">
                                    Get your games and tech delivered quickly
                                    and safely to your doorstep.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="p-4">

                                <div className="feature-icon mb-3">
                                    🎮
                                </div>

                                <h5 className="fw-bold">
                                    Gaming & technology
                                </h5>

                                <p className="text-secondary mb-0">
                                    From the latest games to gaming gear
                                    and modern electronics.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="p-4">

                                <div className="feature-icon mb-3">
                                    🔒
                                </div>

                                <h5 className="fw-bold">
                                    Secure shopping
                                </h5>

                                <p className="text-secondary mb-0">
                                    Shop with confidence with secure and
                                    reliable online ordering.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="container py-5">

                <div className="bg-dark text-white rounded-4 p-5 text-center">

                    <h2 className="fw-bold mb-3">
                        Ready to level up?
                    </h2>

                    <p className="text-white-50 mb-4">
                        Browse our collection of games, gaming gear
                        and technology.
                    </p>

                    <Link
                        to="/app"
                        className="btn btn-light btn-lg px-5"
                    >
                        Explore products
                    </Link>

                </div>

            </section>


            <Footer />

        </div>
    )
}

export default LandingPage

