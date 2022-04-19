import { useState } from "react";
import { SignInUser } from '../services/Auth'

const SignIn = (props) => {
    const [formValues, setFormValues] = useState({email: '', password: ''})
    const handleChange = (e) => {
        setFormValues({...formValues, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        <div className="signin col">
        <div className="card-overlay centered">
        <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
            />
            </div>
            <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
            />
            </div>
            <button disabled={!formValues.email || !formValues.password}>
            Sign In
            </button>
        </form>
        </div>
    </div>
    );
}

export default SignIn;