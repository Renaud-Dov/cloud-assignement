/* This example requires Tailwind CSS v2.0+ */
import {Fragment, useEffect, useState} from 'react'
import {Popover, Transition} from '@headlessui/react'
import {
    CalendarIcon,
    MenuIcon,
    PhoneIcon,
    PlayIcon,
    ShieldCheckIcon,
    ViewGridIcon,
    XIcon,
} from '@heroicons/react/outline'
import {ChevronDownIcon, MusicNoteIcon} from '@heroicons/react/solid'
import {Link, } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const links = [{
    name: "Repair instrument", icon: PlayIcon, link: '/repair',
}, {
    name: "About us", icon: ShieldCheckIcon, link: '/about',
}]
const other_links = [{name: "Contact", icon: PhoneIcon, link: '/contact',}, {
    name: "FAQ",
    icon: CalendarIcon,
    link: '/faq',
}]
// merge links and other_links
const all_links = [...links, ...other_links]

export default function Header() {
    return (<Popover as="header" className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div
                className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                <div className="flex justify-start lg:w-0 lg:flex-1">
                    <Link to={"/"}>
                        <span className="sr-only">Workflow</span>
                        <MusicNoteIcon className="h-12 w-12 text-orange-500"/>
                    </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                    <Popover.Button
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                        <span className="sr-only">Open menu</span>
                        <MenuIcon className="h-8 w-8" aria-hidden="true"/>
                    </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                    {links.map((item, index) => (<Link key={index} to={item.link}
                                                       className="text-base font-medium text-gray-900 hover:text-gray-700">
                        {item.name}
                    </Link>))}

                    <Popover className="relative">
                        {({open}) => (<>
                            <Popover.Button
                                className={classNames(open ? 'text-gray-900' : 'text-gray-500', 'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900')}
                            >
                                <span>More</span>
                                <ChevronDownIcon
                                    className={classNames(open ? 'text-gray-600' : 'text-gray-400', 'ml-2 h-5 w-5 group-hover:text-gray-500')}
                                    aria-hidden="true"
                                />
                            </Popover.Button>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <Popover.Panel
                                    className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                                    <div
                                        className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                                            {other_links.map((item, index) => (<Popover.Button key={index}>
                                                <Link
                                                    to={item.link}

                                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50">
                                                    <item.icon className="flex-shrink-0 h-6 w-6 text-orange-600"
                                                               aria-hidden="true"/>
                                                    <p className="ml-4 text-base font-medium text-gray-900">{item.name}</p>
                                                </Link>
                                            </Popover.Button>))}
                                        </div>
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </>)}
                    </Popover>
                </Popover.Group>
                {/*login/signup*/}
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <Link to={"/login"}
                          className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                        Sign in
                    </Link>
                    <Link to={"/signup"}
                          className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>

        <Transition
            as={Fragment}
            enter="duration-200 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
        >
            <Popover.Panel focus
                           className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div
                    className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <Popover.Button>
                                <Link to={"/"}>
                                    <MusicNoteIcon className="h-12 w-12 text-orange-500"/>
                                </Link>
                            </Popover.Button>
                            <div className="-mr-2">
                                <Popover.Button
                                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500">
                                    <span className="sr-only">Close menu</span>
                                    <XIcon className="h-6 w-6" aria-hidden="true"/>
                                </Popover.Button>
                            </div>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                            {all_links.map((item, index) => (<Popover.Button key={index}
                                                                             className="text-base text-left font-medium text-gray-900 hover:text-gray-700">
                                <Link to={item.link}>
                                    {item.name}
                                </Link>
                            </Popover.Button>))}
                        </div>
                        {/*login/signup mobile*/}
                        <div>
                            <Popover.Button
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-orange-600 hover:bg-orange-700">
                                <Link to={"/signup"}> Sign up </Link>
                            </Popover.Button>
                            <p className="mt-6 text-center text-base font-medium text-gray-500">
                                Existing customer?{' '}
                                <Popover.Button>
                                    <Link to={"/login"} className="text-orange-600 hover:text-orange-500">
                                        Sign in
                                    </Link>
                                </Popover.Button>
                            </p>
                        </div>
                    </div>
                </div>
            </Popover.Panel>
        </Transition>
    </Popover>)
}
