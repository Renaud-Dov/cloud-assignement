import {LockClosedIcon} from '@heroicons/react/solid'
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import PropTypes from 'prop-types';
import {getToken, login, setToken} from "../auth";

export default function Login(props) {

    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);
    const [remember, setRemember] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    let navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        setLoading(true);
        setError("");

        login(email, password).then(
            (response) => {
                setToken(response.data.token, remember);
                navigate("/",{replace: true});
            }
        ).catch((_) => {
                setError("Invalid email or password");
                setLoading(false);
            }
        );
    }
    if (getToken()) {
        navigate("/",{replace: true});
    }

    return (
        <div
            className="flex fixed items-center justify-center w-screen h-screen bg-gradient-to-r from-orange-600 to-orange-400">
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                {error &&
                    <div
                        className="p-4 mb-8 text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                        role="alert">{error}
                    </div>}
                <div className=" max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 2xl:h-32 w-auto" alt="Workflow"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                        <h2 className="mt-6 text-center text-3xl 2xl:text-3xl font-extrabold text-gray-900">
                            Sign in to your account</h2>
                        <p className="mt-2 text-center text-sm 2xl:text-xl text-gray-600">
                            Or{' '}
                            <Link to="/signup" className="font-medium text-orange-600 hover:text-orange-500">
                                Sign up
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                        {/*<input type="hidden" name="remember" defaultValue="true"/>*/}
                        <div className="rounded-md shadow-sm -space-y-px">
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                onChange={(event) => setEmail(event.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                           border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md
                                           focus:outline-none focus:ring-orange-500 focus:border-orange-500
                                           focus:z-10 sm:text-sm 2xl:text-xl"
                                placeholder="Email address"
                            />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                onChange={(event) => setPassword(event.target.value)}
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border
                                           border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md
                                           focus:outline-none focus:ring-orange-500 focus:border-orange-500
                                           focus:z-10 sm:text-sm 2xl:text-xl"
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    onChange={(event) => setRemember(event.target.checked)}
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm 2xl:text-lg text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/password_reset"
                                      className="font-medium text-orange-600 hover:text-orange-500 2xl:text-md">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit" disabled={loading}
                                    className="group relative w-full flex justify-center
                                               py-2 px-4 border border-transparent text-sm 2xl:text-lg font-medium
                                               rounded-md text-white bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300
                                               focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                  <LockClosedIcon
                                      className='h-5 w-5 text-orange-500 group-disabled:text-gray-500 group-hover:text-orange-400'
                                      aria-hidden="true"/>
                                </span>
                                Sign in
                                {loading &&
                                    <svg
                                        className="absolute right-0 animate-spin text-orange-200 fill-orange-400 h-5 w-5 mr-3 ..."
                                        viewBox="0 0 101 101">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="currentColor"/>
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentFill"/>

                                    </svg>}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
