import {ArrowNarrowRightIcon, ArrowNarrowLeftIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";
import CountriesComboBox from "./CountriesComboBox";
import {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Transition} from "@headlessui/react";

function RequiredLabel(props) {
    return (
        <label htmlFor="first-name"
               className="block text-sm font-medium text-gray-700">
            {props.children} {" "}
            <span className="text-red-600">*</span>
        </label>

    )
}


function Step1({className = "", setStep, setData}) {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");

    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        console.log(email, firstName, lastName, phone, birthday);
        // if one of the fields is empty, do not submit
        if (email === "" || firstName === "" || lastName === "" || phone === "" || birthday === "") {
            setError("Please fill all the fields");
            // return; //TODO: uncomment this line to prevent the form from submitting
        }
        setData({
            firstName: firstName,
            lastName: lastName,
            email: email,
            birthDate: birthday,
            phone: phone,
        });
        setStep(2);
    }

    return (
        <div className={className}>
            <p className="mt-2 text-center text-sm text-gray-600">
                Already got an account?{' '}
                <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                    Login
                </Link>
            </p>
            {error &&
                <div
                    className="p-2 mt-3 mx-auto w-fit text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert">{error}
                </div>}
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden">
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
                                       placeholder="John"
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
                                       placeholder="Smith"
                                       className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <RequiredLabel htmlFor="email-address"
                                               className="block text-sm font-medium text-gray-700">
                                    Email address
                                </RequiredLabel>
                                <input onChange={(event) => setEmail(event.target.value)}
                                       type="text"
                                       name="email-address"
                                       id="email-address"
                                       autoComplete="email"
                                       placeholder="mail@example.com"
                                       className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <RequiredLabel htmlFor="phone"
                                               className="block text-sm font-medium text-gray-700">
                                    Phone number
                                </RequiredLabel>
                                <input onChange={(event) => setPhone(event.target.value)}

                                       type="text"
                                       name="phone"
                                       id="phone"
                                       autoComplete="phone"
                                       placeholder="+1 (555) 555-5555"
                                       className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <RequiredLabel htmlFor="birth-date"
                                               className="block text-sm font-medium text-gray-700">
                                    Date of birth
                                </RequiredLabel>
                                <input onChange={(event) => setBirthday(event.target.value)}

                                       type="text"
                                       name="birth-date"
                                       id="birth"
                                       placeholder="MM/DD/YYYY"
                                       className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 px-4 py-3 text-right sm:px-6">
                        <button
                            onClick={() => setStep(1)}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            <ArrowNarrowLeftIcon className="ml-1 h-5 w-5"/> Cancel
                        </button>
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
    )
}


function Step2({className = "", setStep, setData}) {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [street, setStreet] = useState('');
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        // if one of the fields is empty, do not submit
        if (street === "" || city === "" || postalCode === "" || country === "") {
            setError("Please fill all the fields");
            return;
        }
        setData({
            street: street,
            city: city,
            postalCode: postalCode,
            country: country
        });
    }

    return (
        <div className={className}>
            {error &&
                <div
                    className="p-2 mt-3 mx-auto w-fit text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert">{error}
                </div>}
            <form onSubmit={handleSubmit}>
                <div className="overflow-hidden">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">

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
                                       placeholder="1234 Main St"
                                       className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-2">
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
                            <div className="col-span-6 sm:col-span-2">
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

                            <div className="col-span-6 sm:col-span-2 ">
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
                    <div className="flex justify-end gap-4 px-4 py-3 text-right sm:px-6">
                        <button
                            onClick={() => setStep(1)}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                        >
                            <ArrowNarrowLeftIcon className="ml-1 h-5 w-5"/> Cancel
                        </button>
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
    )
}

export default function Signup() {
    const [step, setStep] = useState(1);
    const [stepData1, setStepData1] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        phone: '',
    });

    const [stepData2, setStepData2] = useState({
        street: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const [stepData3, setStepData3] = useState({
        password: '',
        passwordConfirm: '',
    });

    // useEffect(() => {
    //         if (step === 1)
    //             return
    //         let activeSlide: Element;
    //         let nextSlide: Element;
    //
    //         activeSlide = document.querySelector('.slide.translate-x-0');
    //         activeSlide.classList.remove('translate-x-0');
    //         activeSlide.classList.add('-translate-x-full');
    //
    //         nextSlide = activeSlide.nextElementSibling;
    //         nextSlide.classList.remove('translate-x-full');
    //         nextSlide.classList.remove('hidden')
    //         nextSlide.classList.add('translate-x-0');
    //
    //         setTimeout(function () {
    //             // activeSlide.classList.add('hidden');
    //         }, 1000);
    //         console.log("effect");
    //     }
    //     , [step])

    return (
        <div
            className="flex items-center justify-center w-screen h-screen bg-gradient-to-r from-orange-600 to-orange-400">
            <div className="flex flex-row mx-auto w-fit">

                    <div className="p-4 bg-white rounded-md shadow-xl overflow-hidden w-fit">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>
                        <Step1 className="" setStep={setStep} setData={setStepData1}/>
                    </div>



                    <div className="p-4 bg-white rounded-md shadow-xl overflow-hidden w-fit">
                        <Step2 className="" setStep={setStep} setData={setStepData2}/>
                    </div>


            </div>
        </div>
    )
}
// <Transition
//     show={step === 2}
//     enter="transition-all ease-in-out duration-300"
//     enterFrom="translate-x-full"
//     enterTo="translate-x-0"
//     leave="transition-all ease-in-out duration-300"
//     leaveFrom="translate-x-0"
//     leaveTo="translate-x-full"
// />
