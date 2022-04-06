import {Disclosure} from '@headlessui/react'
import {ChevronUpIcon} from '@heroicons/react/solid'

const faq = [
    {
        question: 'What is the purpose of this website?',
        answer: "This website is bullshit like everything else"
    },
    {
        question: 'How do I use this website?',
        answer: "I don't know how to use this website"
    }
]

export default function FAQ() {
    return (
        <div className="w-full px-4 pt-16">
            <div className="w-full md:max-w-4xl p-2 gap-4 mx-auto bg-white text-xl rounded-2xl">
                {faq.map((value, index) =>
                    <Disclosure key={index} as="div" className="mt-2">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex justify-between items-center w-full px-4 py-2  font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>{value.question}</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    {value.answer}
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                )}

            </div>
        </div>
    )
}