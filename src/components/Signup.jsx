import {ArrowNarrowRightIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";
import CountriesComboBox from "./CountriesComboBox";
import {useState} from "react";
function RequiredLabel(props) {
    return (
        <label htmlFor="first-name"
               className="block text-sm font-medium text-gray-700">
            {props.children} {" "}
            <span className="text-red-600">*</span>
        </label>

    )
}

export default function Signup() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [country, setCountry] = useState("");
    const [city, setCity] = useState("");
    const [region, setRegion] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [street, setStreet] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");


    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target["first-name"].value);
        console.log(event.target["last-name"].value);
        console.log(event.target["email-address"].value);
        console.log(country);

    }

    return (
        <div className="flex items-center justify-center w-screen
                        h-screen bg-gradient-to-r from-orange-600 to-orange-400">
            <div className="p-4 w-full sm:w-fit bg-white rounded-md shadow-xl">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already got an account?{' '}
                    <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                        Login
                    </Link>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className=" overflow-hidden">
                        <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <RequiredLabel htmlFor="first-name"
                                                   className="block text-sm font-medium text-gray-700">
                                        First name
                                    </RequiredLabel>
                                    <input onChange={(event) => setFirstName(event.target.value)}

                                           type="text"
                                           name="first-name"
                                           id="first-name"
                                           autoComplete="given-name"
                                           className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <RequiredLabel htmlFor="last-name"
                                                   className="block text-sm font-medium text-gray-700">
                                        Last name
                                    </RequiredLabel>
                                    <input onChange={(event) => setLastName(event.target.value)}

                                           type="text"
                                           name="last-name"
                                           id="last-name"
                                           autoComplete="family-name"
                                           className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-4">
                                    <RequiredLabel htmlFor="email-address"
                                                   className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </RequiredLabel>
                                    <input onChange={(event) => setEmail(event.target.value)}
                                           type="text"
                                           name="email-address"
                                           id="email-address"
                                           autoComplete="email"
                                           className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <RequiredLabel htmlFor="birth-date"
                                                   className="block text-sm font-medium text-gray-700">
                                        Date of birth
                                    </RequiredLabel>
                                    <div className="relative">
                                        <div
                                            className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">

                                        </div>

                                    </div>
                                    <input onChange={(event) => setBirthday(event.target.value)}

                                           type="text"
                                           name="birth-date"
                                           id="birth"
                                           className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                    <RequiredLabel htmlFor="country"
                                                   className="block text-sm font-medium text-gray-700">
                                        Country
                                    </RequiredLabel>
                                    <CountriesComboBox onChange={(value) => setCountry(value)}
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                    />
                                </div>

                                <div className="col-span-6">
                                    <RequiredLabel htmlFor="street-address"
                                                   className="block text-sm font-medium text-gray-700">
                                        Street address
                                    </RequiredLabel>
                                    <input onChange={(event) => setStreet(event.target.value)}
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        autoComplete="street-address"
                                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                                    <RequiredLabel htmlFor="city" className="block text-sm font-medium text-gray-700">
                                        City
                                    </RequiredLabel>
                                    <input onChange={(event) => setCity(event.target.value)}
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <RequiredLabel htmlFor="region" className="block text-sm font-medium text-gray-700">
                                        State / Province
                                    </RequiredLabel>
                                    <input onChange={(event) => setRegion(event.target.value)}
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                                    <RequiredLabel htmlFor="postal-code"
                                                   className="block text-sm font-medium text-gray-700">
                                        ZIP / Postal code
                                    </RequiredLabel>
                                    <input onChange={(event) => setPostalCode(event.target.value)}
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="px-4 py-3 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                            >
                                Next <ArrowNarrowRightIcon className=" ml-1 h-5 w-5"/>
                            </button>
                        </div>
                    </div>
                </form>

            </div>
        </div>
    )
}
