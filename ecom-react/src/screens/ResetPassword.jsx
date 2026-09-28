import { useState } from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import '../App.css'

function ResetPassword() {

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()

    const token = searchParams.get('token')

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
                'http://localhost:8080/api/users/reset-password',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        token,
                        password
                    })
                }
            )

            if (!response.ok) {

                setError(
                    'This reset link is invalid or has expired.'
                )

                return
            }

            navigate('/login')

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
                        Reset your password
                    </h1>

                    <p className="text-secondary mb-0">
                        Choose a new password for your account.
                    </p>

                </div>


                {error && (
                    <div className="alert alert-danger">
                        {error}
                    </div>
                )}


                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label fw-semibold">
                            New password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Enter your new password"
                            value={password}
                            onChange={(event) =>
                                setPassword(event.target.value)
                            }
                            required
                        />

                    </div>


                    <div className="mb-4">

                        <label className="form-label fw-semibold">
                            Confirm password
                        </label>

                        <input
                            type="password"
                            className="form-control form-control-lg"
                            placeholder="Repeat your new password"
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
                        Reset password
                    </button>

                </form>

            </div>

        </div>
    )
}

export default ResetPassword