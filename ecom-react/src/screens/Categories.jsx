import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:8080/api/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="bg-light min-vh-100">

            <Navbar />

            {/* Page header */}
            <section className="bg-white border-bottom">
                <div className="container py-5">

                    <div className="text-center">

                        <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                            SHOP BY CATEGORY
                        </span>

                        <h1 className="display-5 fw-bold mb-3">
                            Explore our categories
                        </h1>

                        <p className="text-secondary lead mb-0">
                            Find what you're looking for by browsing
                            our product categories.
                        </p>

                    </div>

                </div>
            </section>


            {/* Categories */}
            <main className="container py-5">

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
                                className="col-md-6 col-lg-4"
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

            </main>


            {/* CTA */}
            <section className="py-5">

                <div className="container">

                    <div className="bg-primary text-white rounded-4 p-5 text-center">

                        <h2 className="fw-bold mb-3">
                            Can't decide what to choose?
                        </h2>

                        <p className="mb-4">
                            Explore our complete collection and discover
                            something you'll love.
                        </p>

                        <Link
                            to="/app"
                            className="btn btn-light btn-lg px-4"
                        >
                            View all products
                        </Link>

                    </div>

                </div>

            </section>


            <Footer />

        </div>
    )
}

export default Categories