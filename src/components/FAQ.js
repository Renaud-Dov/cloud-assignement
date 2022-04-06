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
    },
    {
        question: 'How do I contact you?',
        answer: "I don't know how to contact you"
    },
    {
        question: 'How do I report a bug?',
        answer: "I don't know how to report a bug"
    }
]

export default function FAQ() {
    return (
        <div className="w-full px-4 pt-16">
            <div className="w-full md:max-w-4xl p-2 mx-auto bg-white text-xl rounded-2xl">
                <h1 className="text-3xl sm:text-6xl font-bold text-gray-800">FAQ</h1>
                {faq.map((value, index) =>
                    <Disclosure key={index} as="div" className="mt-8 first:mt-0">
                        {({open}) => (
                            <>
                                <Disclosure.Button
                                    className="flex justify-between items-center w-full px-4 py-2
                                               font-medium text-left text-orange-900 bg-orange-100 rounded-lg
                                               hover:bg-orange-200 focus:outline-none focus-visible:ring
                                               focus-visible:ring-orange-500 focus-visible:ring-opacity-75">
                                    <span>{value.question}</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'transform rotate-180' : ''} w-5 h-5 text-orange-500`}
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