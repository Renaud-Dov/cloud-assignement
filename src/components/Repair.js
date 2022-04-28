import {ArrowNarrowRightIcon} from "@heroicons/react/solid";

function RequiredLabel(props) {
    return (
        <label htmlFor="first-name"
               className="block text-sm font-medium text-gray-700">
            {props.children} {" "}
            <span className="text-red-600">*</span>
        </label>

    )
}

export default function Repair() {
    function handleSubmit() {

    }

    return (
        <div className="flex flex-col relative items-start sm:items-center justify-center w-screen h-screen bg-gradient-to-r
                        from-orange-600 to-orange-400">
            <form onSubmit={handleSubmit}
                  className="slide p-4 w-full h-full sm:h-min sm:w-fit rounded-md shadow-xl bg-white">
                <div className="">
                    <div className="px-4 py-5 sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <RequiredLabel htmlFor="first-name"
                                               className="block text-sm font-medium text-gray-700">
                                    First name
                                </RequiredLabel>
                                <input

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
                                <input

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
                                <input
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
                                <input

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
                                <input

                                    type="text"
                                    name="birth-date"
                                    id="birth"
                                    placeholder="MM/DD/YYYY"
                                    className="mt-1 focus:ring-orange-500 focus:border-orange-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-6">
                                <RequiredLabel htmlFor="upload-photo"
                                               className="block text-sm font-medium text-gray-700">
                                    Upload a photo
                                </RequiredLabel>
                                <input
                                    type="file"
                                    name="upload-photo"
                                    id="upload-photo"
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
                            Send <ArrowNarrowRightIcon className=" ml-1 h-5 w-5"/>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}