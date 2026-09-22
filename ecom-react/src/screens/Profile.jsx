import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Profile() {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {

        const token = localStorage.getItem('token')

        if (!token) {
            setError('You are not logged in.')
            setLoading(false)
            return
        }

        fetch('http://localhost:8080/api/users/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error('Failed to load profile')
                }

                return response.json()
            })
            .then(data => {
                setUser(data)
                setLoading(false)
            })
            .catch(error => {
                setError('Unable to load your profile.')
                setLoading(false)
            })

    }, [])

    if (loading) {
        return (
            <div className="bg-light min-vh-100">

                <Navbar />

                <div className="container py-5 text-center">

                    <div
                        className="spinner-border text-primary"
                        role="status"
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                    <p className="text-secondary mt-3">
                        Loading profile...
                    </p>

                </div>

                <Footer />

            </div>
        )
    }

    if (error) {
        return (
            <div className="bg-light min-vh-100">

                <Navbar />

                <div className="container py-5">

                    <div className="text-center">

                        <div className="mb-3">
                            <i className="bi bi-exclamation-circle text-danger fs-1"></i>
                        </div>

                        <h2 className="fw-bold">
                            Something went wrong
                        </h2>

                        <p className="text-secondary">
                            {error}
                        </p>

                        <Link
                            to="/login"
                            className="btn btn-primary"
                        >
                            Login
                        </Link>

                    </div>

                </div>

                <Footer />

            </div>
        )
    }

    return (
        <div className="bg-light min-vh-100">

            <Navbar />

            {/* Header */}
            <section className="bg-white border-bottom">

                <div className="container py-5">

                    <div className="text-center">

                        <span className="badge bg-primary-subtle text-primary px-3 py-2 mb-3">
                            MY ACCOUNT
                        </span>

                        <h1 className="display-5 fw-bold mb-3">
                            My Profile
                        </h1>

                        <p className="text-secondary lead mb-0">
                            Manage your account information
                        </p>

                    </div>

                </div>

            </section>


            {/* Profile */}
            <main className="container py-5">

                <div className="row justify-content-center">

                    <div className="col-lg-8 col-xl-7">

                        <div className="bg-white rounded-4 shadow-sm p-4 p-md-5">

                            {/* Profile header */}
                            <div className="text-center mb-5">

                                <div className="profile-avatar mx-auto mb-3">
                                    <i className="bi bi-person"></i>
                                </div>

                                <h2 className="fw-bold mb-1">
                                    {user.username}
                                </h2>

                                <p className="text-secondary mb-0">
                                    Shoply customer
                                </p>

                            </div>


                            {/* Account information */}
                            <div>

                                <h5 className="fw-bold mb-4">
                                    Account Information
                                </h5>


                                {/* Username */}
                                <div className="profile-info mb-3">

                                    <div className="profile-info-icon">
                                        <i className="bi bi-person"></i>
                                    </div>

                                    <div>

                                        <div className="small text-secondary">
                                            Username
                                        </div>

                                        <div className="fw-semibold">
                                            {user.username}
                                        </div>

                                    </div>

                                </div>


                                {/* Email */}
                                <div className="profile-info mb-4">

                                    <div className="profile-info-icon">
                                        <i className="bi bi-envelope"></i>
                                    </div>

                                    <div>

                                        <div className="small text-secondary">
                                            Email
                                        </div>

                                        <div className="fw-semibold">
                                            {user.email}
                                        </div>

                                    </div>

                                </div>

                            </div>


                            {/* Actions */}
                            <div className="border-top pt-4">

                                <h5 className="fw-bold mb-3">
                                    Account
                                </h5>

                                <div className="d-flex gap-2 flex-wrap">

                                    <Link
                                        to="/app"
                                        className="btn btn-primary"
                                    >
                                        <i className="bi bi-bag me-2"></i>
                                        Continue shopping
                                    </Link>

                                    <Link
                                        to="/"
                                        className="btn btn-outline-dark"
                                    >
                                        Back to home
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </main>

            <Footer />

        </div>
    )
}

export default Profile