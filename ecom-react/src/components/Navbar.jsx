import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(
        !!localStorage.getItem('token')
    )

    const handleLogout = () => {

        localStorage.removeItem('token')

        setIsLoggedIn(false)

        navigate('/')
    }

    return (
        <nav className="navbar navbar-expand-lg bg-white border-bottom">
            <div className="container py-2">

                {/* Logo */}
                <Link
                    className="navbar-brand fw-bold fs-3"
                    to="/"
                >
                    Shop<span className="text-primary">ly</span>
                </Link>


                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>


                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav mx-auto gap-lg-3">

                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/app" className="nav-link">
                                Products
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/categories" className="nav-link">
                                Categories
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                About
                            </Link>
                        </li>

                    </ul>


                    <div className="d-flex gap-2">

                        {!isLoggedIn && (
                            <Link
                                to="/login"
                                className="btn btn-outline-dark"
                            >
                                <i className="bi bi-person me-2"></i>
                                Login/Register
                            </Link>
                        )}

                        {isLoggedIn && (
                            <Link
                                to="/profile"
                                className="btn btn-outline-dark"
                                title="Profile"
                            >
                                <i className="bi bi-person"></i>
                            </Link>
                        )}

                        {isLoggedIn && (
                            <button
                                onClick={handleLogout}
                                className="btn btn-outline-dark"
                            >
                                <i className="bi bi-box-arrow-right me-2"></i>
                                Logout
                            </button>
                        )}

                        <button className="btn btn-dark">
                            Cart 🛒
                        </button>

                    </div>

                </div>

            </div>
        </nav>
    )
}

export default Navbar