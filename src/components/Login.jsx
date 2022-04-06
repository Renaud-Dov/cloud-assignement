import {LockClosedIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";
import {useState} from "react";

export default function Login() {

    const [email, setEmail] = useState(String);
    const [password, setPassword] = useState(String);

    function handleSubmit(event) {
        event.preventDefault();
        setEmail(event.target.email.value);
        setPassword(event.target.password.value);
    }

    return (
        <div className="flex items-center justify-center w-screen
                        h-screen bg-gradient-to-r from-orange-600 to-orange-400">
            <div className="px-40 py-20 bg-white rounded-md shadow-xl">
                <div className=" max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your
                            account</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
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
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                            />
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember"
                                    name="remember"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <Link to="/password_reset"
                                      className="font-medium text-orange-600 hover:text-orange-500">
                                    Forgot your password?
                                </Link>
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                    className="group relative w-full flex justify-center
                                               py-2 px-4 border border-transparent text-sm font-medium
                                               rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none
                                               focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                  <LockClosedIcon className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                                                  aria-hidden="true"/>
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )

}
