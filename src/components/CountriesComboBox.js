import {useState, Fragment} from "react";
import {Combobox, Transition} from "@headlessui/react";
import {registerLocale, getNames} from "i18n-iso-countries";
import {SelectorIcon} from "@heroicons/react/solid";
import Flags from 'country-flag-icons/react/3x2';

registerLocale(require("i18n-iso-countries/langs/en.json"));
const countries = getNames("en", {select: "official"});
const countryNames = Object.keys(countries).map(key => countries[key]);


function Flag(props) {
    const country = props.country;

    const FlagComponent = Flags[Object.keys(countries).find(key => countries[key] === country)];

    return <FlagComponent className={props.className}/>;

}


export default function CountriesComboBox(props) {
    const [selectedCountry, setSelectedCountry] = useState("")
    const [query, setQuery] = useState('')

    const filteredCountries = query === '' ? countryNames : countryNames.filter((person) => {
        return person.toLowerCase().includes(query.toLowerCase())
    })

    function updateCountry(value) {
        setSelectedCountry(value)
        props.onChange(value)
    }

    return (<Combobox className="overflow-hidden top-16" value={selectedCountry} onChange={updateCountry}>
        {({activeOption, open}) => (<>
            {open ? (<div>
                    <Combobox.Input autoFocus id="country"
                                    name="country"
                                    autoComplete="country-name"
                                    className="mt-1 flex block w-full py-2 px-3 border border-gray-300 bg-white
                                               rounded-md shadow-sm focus:outline-none text-left focus:ring-orange-500
                                               focus:border-orange-500 sm:text-sm"
                                    displayValue={(country) => country}
                                    onChange={(event) => setQuery(event.target.value)}/>
                </div>)
                : <Combobox.Button className="mt-1 flex block w-full py-2 px-3 border border-gray-300 bg-white
                                              rounded-md shadow-sm focus:outline-none text-left focus:ring-orange-500
                                              focus:border-orange-500 sm:text-sm items-center">
                    {(activeOption || selectedCountry) &&
                        <Flag country={activeOption || selectedCountry} className="w-4 h-4 mr-4"/>
                    }
                    {(!activeOption && !selectedCountry) && <span className="text-gray-500">Choose a country</span>}

                    <span className="flex-1">{activeOption || selectedCountry}</span>
                    <SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true"/>
                </Combobox.Button>}
            <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
            >
                <Combobox.Options
                    className="absolute py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1
                               ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredCountries.length === 0 && query !== '' ? (
                            <div className="cursor-default select-none relative py-2 px-4 text-gray-700">
                                Nothing found.
                            </div>) :
                        (filteredCountries.map((country, index) => (
                            <Combobox.Option key={index} value={country}
                                             className={({active}) => `flex cursor-default select-none relative flex items-center
                                           py-2 pr-4 hover:bg-orange-400 ${active ? 'text-white bg-orange-600' : 'text-gray-900'}`}>
                                <Flag country={country} className="w-4 h-4 ml-5"/>
                                <span className={`block pl-5 truncate font-normal`}>{country}</span>
                            </Combobox.Option>
                        )))}

                </Combobox.Options>
            </Transition>
        </>)}
    </Combobox>)
}