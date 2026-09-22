import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../App.css'
import Navbar from '../components/Navbar'

function Login() {

    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [username, setusername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (event) => {

        event.preventDefault()
        setError('')

        try {

            const response = await fetch(
                'http://localhost:8080/api/users/login',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            )

            if (!response.ok) {
                setError('Invalid username or password.')
                return
            }

            const data = await response.json()

            localStorage.setItem('token', data.token)

            navigate('/app')

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


            {/* Login card */}
            <div className="auth-card bg-white rounded-4 shadow-sm p-4 p-md-5">

                <div className="text-center mb-4">

                    <h1 className="fw-bold mb-2">
                        Welcome back
                    </h1>

                    <p className="text-secondary mb-0">
                        Login to your Shoply account
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
                            Email
                        </label>

                        <input
                            type="text"
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
                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        className="btn btn-primary btn-lg w-100"
                    >
                        Login
                    </button>

                </form>


                <div className="text-center mt-4">

                    <span className="text-secondary">
                        Don't have an account?
                    </span>{' '}

                    <Link
                        to="/register"
                        className="text-primary fw-semibold text-decoration-none"
                    >
                        Create one
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

export default Login