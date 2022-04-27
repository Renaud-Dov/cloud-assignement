import {ArrowNarrowRightIcon, ArrowNarrowLeftIcon} from '@heroicons/react/solid'
import {Link} from "react-router-dom";
import CountriesComboBox from "./CountriesComboBox";
import {useEffect, useState, useRef} from "react";
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


function Step0({className = "", setStep, setData, setError}) {

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [birthday, setBirthday] = useState("");


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
        setStep(1);
    }

    return (
        <div className={className}>
            <form onSubmit={handleSubmit}>
                <div className="">
                    <div className="px-4 py-5 sm:p-6">
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
                        {/*<button*/}
                        {/*    onClick={() => setStep(1)}*/}
                        {/*    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"*/}
                        {/*>*/}
                        {/*    <ArrowNarrowLeftIcon className="ml-1 h-5 w-5"/> Cancel*/}
                        {/*</button>*/}
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


function Step1({className = "", setStep, setData, setError}) {

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [street, setStreet] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // if one of the fields is empty, do not submit
        if (street === "" || city === "" || postalCode === "" || country === "") {
            setError("Please fill all the fields");
            // return;
        }
        setData({
            street: street,
            city: city,
            postalCode: postalCode,
            country: country
        });
        setStep(2);
    }

    return (
        <form onSubmit={handleSubmit} className={className}>
            <p className="mt-2 text-center text-sm text-gray-600">
                Already got an account?{' '}
                <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">
                    Login
                </Link>
            </p>
            <div className="overflow-hidden">
                <div className="px-4 py-5  sm:p-6">
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
                        <div className="col-span-6 sm:col-span-3">
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
                        <div className="col-span-6 sm:col-span-3">
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
                        <div className="col-span-6 sm:col-span-3">
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
                <div className="flex self-end justify-end gap-4 px-4 py-3 text-right sm:px-6">
                    {/*<button*/}
                    {/*    onClick={() => setStep(1)}*/}
                    {/*    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"*/}
                    {/*>*/}
                    {/*    <ArrowNarrowLeftIcon className="ml-1 h-5 w-5"/> Cancel*/}
                    {/*</button>*/}
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
                    >
                        Next <ArrowNarrowRightIcon className=" ml-1 h-5 w-5"/>
                    </button>

                </div>

            </div>
        </form>
    )
}

export default function Signup() {
    const [step, setStep] = useState(0);
    const [error, setError] = useState("eoeoe");
    const [stepData0, setStepData0] = useState({
        firstName: '',
        lastName: '',
        email: '',
        birthDate: '',
        phone: '',
    });

    const [stepData1, setStepData1] = useState({
        street: '',
        city: '',
        postalCode: '',
        country: '',
    });

    const [stepData2, setStepData2] = useState({
        password: '',
        passwordConfirm: '',
    });

    function resizeCardsHeight() {
        const slides = document.querySelectorAll('.slide')
        let maxValue = 0;
        slides.forEach(slide => {
            slide.style.minHeight = '';
            maxValue = Math.max(maxValue, slide.clientHeight);
        })
        // set each slide to the max height
        slides.forEach(slide => {
            slide.style.minHeight = maxValue + 'px';
        })
        console.log(maxValue);
    }

    window.addEventListener('resize', resizeCardsHeight);

    const steps = [
        <Step0 className="" setStep={setStep} setError={setError} setData={setStepData0}/>,
        <Step1 className="" setStep={setStep} setError={setError} setData={setStepData1}/>,
        <Step1 className="" setStep={setStep} setError={setError} setData={setStepData1}/>
    ]


    useEffect(() => {
        resizeCardsHeight();
    }, [])

    return (
        <div className="flex flex-col relative items-start sm:items-center justify-center w-screen h-screen bg-gradient-to-r
                        from-orange-600 to-orange-400">
            {/*{error && <div role="alert"*/}
            {/*               className="p-2 mt-3 mx-auto w-fit text-sm text-center text-red-700 bg-red-100 rounded-lg*/}
            {/*               dark:bg-red-200 dark:text-red-800">{error}</div>}*/}
            {/*<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create new account</h2>*/}
            {/*<p className="mt-2 text-center text-sm text-gray-600">*/}
            {/*    Already got an account?{' '}*/}
            {/*    <Link to="/login" className="font-medium text-orange-600 hover:text-orange-500">*/}
            {/*        Login*/}
            {/*    </Link>*/}
            {/*</p>*/}

            {steps.map((stepComponent, index) => {
                return (
                    <div key={index}
                         className={`slide p-4 w-full h-full sm:h-min sm:w-fit rounded-md shadow-xl ${index > step ?
                             'hidden' : index === step ? 'activeSlide bg-white sm:animate-wiggle-back'
                                 : 'sm:animate-wiggle absolute pointer-events-none bg-orange-50 invisible sm:visible'}`}>
                        {stepComponent}
                    </div>
                )
            })}
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
