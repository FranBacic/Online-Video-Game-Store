import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function ProductDetails() {

    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:8080/api/products/${id}`)
            .then(response => response.json())
            .then(data => setProduct(data))
    }, [id])

    if (!product) {
        return (
            <div className="bg-light min-vh-100">
                <nav className="navbar navbar-expand-lg bg-white border-bottom">
                    <div className="container py-2">
                        <Link className="navbar-brand fw-bold fs-3" to="/">
                            Shop<span className="text-primary">ly</span>
                        </Link>
                    </div>
                </nav>

                <div className="container py-5 text-center">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        )
    }

    return (
    
        <div className="bg-light min-vh-100">
            <Navbar />

            {/* Product Details */}
            <main className="container py-5">

                {/* Back button */}
                <div className="mb-4">
                    <Link
                        to="/app"
                        className="text-decoration-none text-secondary"
                    >
                        ← Back to products
                    </Link>
                </div>


                <div className="bg-white rounded-4 shadow-sm p-4 p-lg-5">

                    <div className="row g-5 align-items-center">

                        {/* Product image */}
                        <div className="col-lg-6">

                            <div className="product-details-image">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="img-fluid rounded-4"
                                />
                            </div>

                        </div>


                        {/* Product information */}
                        <div className="col-lg-6">

                            <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                                {product.category.name}
                            </span>

                            <h1 className="display-5 fw-bold mb-3">
                                {product.name}
                            </h1>

                            <p className="text-secondary fs-5 mb-4">
                                {product.description}
                            </p>

                            <div className="border-top border-bottom py-4 mb-4">

                                <span className="text-secondary">
                                    Price
                                </span>

                                <div className="display-6 fw-bold mt-1">
                                    ${product.price.toFixed(2)}
                                </div>

                            </div>


                            {/* Quantity */}
                            <div className="mb-4">

                                <label className="form-label fw-semibold">
                                    Quantity
                                </label>

                                <div
                                    className="input-group"
                                    style={{ maxWidth: '150px' }}
                                >

                                    <button className="btn btn-outline-secondary">
                                        −
                                    </button>

                                    <input
                                        type="text"
                                        className="form-control text-center"
                                        value="1"
                                        readOnly
                                    />

                                    <button className="btn btn-outline-secondary">
                                        +
                                    </button>

                                </div>

                            </div>


                            {/* Buttons */}
                            <div className="d-flex gap-3">

                                <button className="btn btn-primary btn-lg px-4">
                                    🛒 Add to cart
                                </button>

                                <button className="btn btn-outline-dark btn-lg">
                                    ♡
                                </button>

                            </div>

                        </div>

                    </div>

                </div>


                {/* Additional information */}
                <div className="row g-4 mt-4">

                    <div className="col-md-4">

                        <div className="bg-white rounded-4 p-4 h-100 shadow-sm">

                            <div className="fs-2 mb-3">
                                🚚
                            </div>

                            <h5 className="fw-bold">
                                Fast delivery
                            </h5>

                            <p className="text-secondary mb-0">
                                Get your order delivered quickly and safely
                                straight to your door.
                            </p>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="bg-white rounded-4 p-4 h-100 shadow-sm">

                            <div className="fs-2 mb-3">
                                🔒
                            </div>

                            <h5 className="fw-bold">
                                Secure payment
                            </h5>

                            <p className="text-secondary mb-0">
                                Your payment information is protected
                                with secure checkout.
                            </p>

                        </div>

                    </div>


                    <div className="col-md-4">

                        <div className="bg-white rounded-4 p-4 h-100 shadow-sm">

                            <div className="fs-2 mb-3">
                                ↩️
                            </div>

                            <h5 className="fw-bold">
                                Easy returns
                            </h5>

                            <p className="text-secondary mb-0">
                                Not satisfied? Return your product
                                easily and hassle-free.
                            </p>

                        </div>

                    </div>

                </div>

            </main>
            <Footer />
        </div>
    )
}

export default ProductDetails