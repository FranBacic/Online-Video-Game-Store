import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function About() {
    return (
        <div className="bg-light min-vh-100">

            <Navbar />

            {/* Hero */}
            <section className="py-5 bg-white border-bottom">
                <div className="container py-5">

                    <div className="row align-items-center g-5">

                        <div className="col-lg-6">

                            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                                ABOUT SHOPLY
                            </span>

                            <h1 className="display-4 fw-bold mb-4">
                                Shopping made
                                <span className="text-primary"> simple.</span>
                            </h1>

                            <p className="lead text-secondary mb-4">
                                Shoply is a modern e-commerce platform designed
                                to make online shopping simple, convenient and
                                enjoyable.
                            </p>

                            <Link
                                to="/app"
                                className="btn btn-primary btn-lg px-4"
                            >
                                Explore products
                            </Link>

                        </div>

                        <div className="col-lg-6">

                            <div className="bg-light rounded-4 p-5 text-center">

                                <div className="display-1 mb-3">
                                    🛍️
                                </div>

                                <h3 className="fw-bold">
                                    Everything you need
                                </h3>

                                <p className="text-secondary mb-0">
                                    Discover products, explore categories
                                    and find exactly what you're looking for.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* Our story */}
            <section className="py-5">
                <div className="container py-4">

                    <div className="row justify-content-center">

                        <div className="col-lg-8 text-center">

                            <span className="text-primary fw-semibold">
                                OUR STORY
                            </span>

                            <h2 className="display-6 fw-bold mt-2 mb-4">
                                Built with simplicity in mind
                            </h2>

                            <p className="text-secondary fs-5 lh-lg">
                                Shoply was created with one simple idea:
                                online shopping should be easy and
                                straightforward. Our platform brings
                                products and customers together in a clean
                                and user-friendly shopping experience.
                            </p>

                            <p className="text-secondary fs-5 lh-lg mb-0">
                                From browsing products to discovering new
                                categories, every part of Shoply is designed
                                to help you find what you need quickly and
                                enjoy the experience along the way.
                            </p>

                        </div>

                    </div>

                </div>
            </section>


            {/* Features */}
            <section className="py-5 bg-white">
                <div className="container py-4">

                    <div className="text-center mb-5">

                        <span className="text-primary fw-semibold">
                            WHY SHOPLY
                        </span>

                        <h2 className="display-6 fw-bold mt-2">
                            Shopping made easier
                        </h2>

                    </div>

                    <div className="row g-4">

                        <div className="col-md-4">

                            <div className="bg-light rounded-4 p-4 h-100 text-center">

                                <div className="fs-1 mb-3">
                                    🔎
                                </div>

                                <h4 className="fw-bold mb-3">
                                    Easy discovery
                                </h4>

                                <p className="text-secondary mb-0">
                                    Quickly browse products and categories
                                    to find exactly what you're looking for.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="bg-light rounded-4 p-4 h-100 text-center">

                                <div className="fs-1 mb-3">
                                    ⚡
                                </div>

                                <h4 className="fw-bold mb-3">
                                    Simple experience
                                </h4>

                                <p className="text-secondary mb-0">
                                    A clean and intuitive interface makes
                                    shopping straightforward and enjoyable.
                                </p>

                            </div>

                        </div>


                        <div className="col-md-4">

                            <div className="bg-light rounded-4 p-4 h-100 text-center">

                                <div className="fs-1 mb-3">
                                    🔒
                                </div>

                                <h4 className="fw-bold mb-3">
                                    Secure shopping
                                </h4>

                                <p className="text-secondary mb-0">
                                    Your shopping experience is designed
                                    with security and reliability in mind.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* CTA */}
            <section className="py-5">
                <div className="container py-4">

                    <div className="bg-primary text-white rounded-4 p-5 text-center">

                        <h2 className="display-6 fw-bold mb-3">
                            Ready to start shopping?
                        </h2>

                        <p className="lead mb-4">
                            Explore our collection and discover your next
                            favorite product.
                        </p>

                        <Link
                            to="/app"
                            className="btn btn-light btn-lg px-4"
                        >
                            Browse products
                        </Link>

                    </div>

                </div>
            </section>


            <Footer />

        </div>
    )
}

export default About