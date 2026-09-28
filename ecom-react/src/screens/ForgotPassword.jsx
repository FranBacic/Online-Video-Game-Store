import { useState } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

function ForgotPassword() {

    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {

        event.preventDefault()

        setMessage('')
        setError('')

        try {

            const response = await fetch(
                'http://localhost:8080/api/users/forgot-password',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email
                    })
                }
            )

            if (!response.ok) {
                setError('If an account with this email exists, a password reset link has been sent.')
                return
            }

            setMessage(
                'If an account with this email exists, a password reset link has been sent.'
            )

        } catch (error) {

            setError(
                'Something went wrong. Please try again.'
            )
        }
    }

    return (
        <div className="auth-page">

            <div className="text-center mb-4">

                <Link
                    to="/"
                    className="text-decoration-none"
                >
                    <span className="fw-bold fs-2 text-dark">
                        Shop<span className="text-primary">ly</span>
                    </span>
                </Link>

            </div>


            <div className="auth-card bg-white rounded-4 shadow-sm p-4 p-md-5">

                <div className="text-center mb-4">

                    <h1 className="fw-bold mb-2">
                        Forgot your password?
                    </h1>

                    <p className="text-secondary mb-0">
                        Enter your email and we'll help you reset your password.
                    </p>

                </div>


                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}


                {message && (
                    <div className="alert alert-success">
                        {message}
                    </div>
                )}


                <form onSubmit={handleSubmit}>

                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Email
                        </label>

                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(event) =>
                                setEmail(event.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                    >
                        Send reset link
                    </button>

                </form>


                <div className="text-center mt-4">

                    <Link
                        to="/login"
                        className="text-primary fw-semibold text-decoration-none"
                    >
                        ← Back to login
                    </Link>

                </div>

            </div>

        </div>
    )
}

export default ForgotPassword