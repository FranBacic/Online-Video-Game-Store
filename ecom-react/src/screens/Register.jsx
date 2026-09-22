import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'

function Register() {

    const navigate = useNavigate()

    const [username, setusername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {

        event.preventDefault()
        setError('')

        if (password !== confirmPassword) {
            setError('Passwords do not match.')
            return
        }

        try {

            const response = await fetch(
                'http://localhost:8080/api/users/register',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                }
            )

            if (!response.ok) {

                if (response.status === 409) {
                    setError('This email already has an account.')
                } else {
                    setError('Registration failed. Please try again.')
                }

                return
            }

            navigate('/login')

        } catch (error) {
            setError('Something went wrong. Please try again.')
        }
    }

    return (
        <div className="auth-page">

            {/* Logo */}
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


            {/* Register card */}
            <div className="auth-card bg-white rounded-4 shadow-sm p-4 p-md-5">

                <div className="text-center mb-4">

                    <h1 className="fw-bold mb-2">
                        Create an account
                    </h1>

                    <p className="text-secondary mb-0">
                        Join Shoply and start shopping
                    </p>

                </div>


                {error && (
                    <div className="alert alert-danger" role="alert">
                        {error}
                    </div>
                )}


                <form onSubmit={handleSubmit}>

                    {/* Username */}
                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Username
                        </label>

                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Choose a username"
                            value={username}
                            onChange={(event) =>
                                setusername(event.target.value)
                            }
                            required
                        />

                    </div>

                    {/* Email */}
                    <div className="mb-3">

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


                    {/* Password */}
                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Create a password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    {/* Confirm password */}
                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Confirm password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Repeat your password"
                            value={confirmPassword}
                            onChange={(event) =>
                                setConfirmPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                    >
                        Create account
                    </button>

                </form>


                <div className="text-center mt-4">

                    <span className="text-secondary">
                        Already have an account?
                    </span>{' '}

                    <Link
                        to="/login"
                        className="text-primary fw-semibold text-decoration-none"
                    >
                        Login
                    </Link>

                </div>

            </div>


            <div className="text-center mt-4">

                <Link
                    to="/"
                    className="text-secondary text-decoration-none"
                >
                    ← Back to Shoply
                </Link>

            </div>

        </div>
    )
}

export default Register