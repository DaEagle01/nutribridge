import { useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { jwtDecode } from "jwt-decode";
import { useDispatch } from 'react-redux';
import { setUser } from "../../redux/features/auth/authSlice";

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [login, { data: response, isLoading, isSuccess, error }] = useLoginMutation();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await login(data).unwrap();
            const user = jwtDecode(res.token);
            dispatch(setUser({ user: user, token: res.token }));
            navigate("/dashboard")
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <section className="bg-gray-50">
            <div className="flex flex-col items-center px-6 pb-8 mx-auto md:h-max lg:py-0">
                <div className="w-full bg-white rounded-lg shadow my-12 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Login to your account
                        </h1>
                        <form onSubmit={handleLogin} className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                                <input type="email" name="email" id="email" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-3 text-sm font-medium text-gray-900">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="" />
                            </div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`flex justify-center items-center gap-2 w-full text-white ${isLoading ? "bg-emerald-700" : "bg-emerald-600"} hover:bg-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
                            >
                                Login
                                {isLoading && <span className="loading loading-spinner loading-xs"></span>}
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Do not have an account? {" "}
                                <NavLink to="/register" className="font-medium text-primary-600 hover:underline">
                                    Register here
                                </NavLink>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Login