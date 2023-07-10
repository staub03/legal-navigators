import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/' },
    { name: 'FAQ', href: 'faq' },
    { name: 'About Us', href: 'about' },
  ]

export default function Header() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 z-50 w-full h-16">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Legal Navigators</span>
                                <svg class="w-3/4 mb-1 text-legalnavverydarkpurple fill-current" viewBox="0 0 3075 1246" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="m1034.2 601.7.3 109.8 2.2 4.7c3 6.4 9 11.9 15.4 14.3 5.8 2.1 19.1 2.7 26.2 1.2l3.7-.8v-14.5h-10.2c-12.1.1-15.8-1.4-19.2-7.9-2.1-4-2.1-4.6-2.4-110.3l-.3-106.2H1034l.2 109.7zM323.2 613.7l.3 116.8 69.3.3 69.2.2v-17H341V497h-18l.2 116.7zM1200.2 613.7l.3 116.8 8.7.3 8.8.3.2-103 .3-103 67.4 102.9 67.3 103h19.8V497h-17l-.2 102.6-.3 102.7-67.4-102.7-67.4-102.6H1200l.2 116.7zM1776 508.5V520h24v-23h-24v11.5zM2242 517.2c-1.9.5-5.2 1.4-7.2 1.9l-3.8 1-.2 22.7-.3 22.7-16.2.3-16.3.2v15h33v56.7c0 60.7.3 64.5 5.1 74.9 3.4 7.1 11.2 14.6 18.4 17.5 5.3 2.1 7.5 2.3 19.5 2.3 7.9-.1 16.2-.7 20-1.5l6.5-1.5.3-7.5.3-7.6-8.8 1.4c-4.8.8-12.8 1.3-17.8 1.1-11-.4-16.9-2.9-21-8.9-5.3-7.6-5.5-9.6-5.5-70.6V581h51v-15h-51l-.2-24.7c-.2-15.4-.7-24.7-1.3-24.9-.5-.1-2.6.2-4.5.8zM788.5 552c-8 2.6-15.2 8.3-18.4 14.5-1.4 2.7-2.7 5.2-2.8 5.4-.1.2-2.1-.8-4.5-2.1-11.4-6.6-29.9-9.9-44-7.8-33.5 4.9-53.4 28.4-51.5 60.9.8 13.6 5 24.7 12.8 33.5l2.9 3.4-3.4 2.1c-4.5 2.8-10 9-12.7 14.3-3.3 6.3-3.8 18.7-1.1 24.9 2.6 6 7.3 11.3 13 14.6 4 2.4 4.3 2.8 2.8 3.7-8.6 5.2-14.5 11.8-18.8 21.3-1.8 4-2.2 6.7-2.2 16.3-.1 10.9.1 11.8 3.1 18.3 8.1 17.1 26.5 27 55.4 29.7 26.8 2.6 53.9-1.9 70.1-11.7 15.3-9.1 23.7-27.2 21-44.8-3-19.2-16.5-32.9-38.1-38.7-6.6-1.8-11.9-2.2-41.6-2.8-22.2-.5-35.4-1.2-38-2-2.3-.7-5.8-3-8.2-5.6-4-4.1-4.3-4.8-4.3-10 0-6.3 1.4-9.6 6.2-14 4.6-4.4 9.4-6.7 11.6-5.5 11.1 5.9 34.5 7.9 49.2 4.2 22.6-5.6 37.8-20.2 42.6-40.8 2.6-10.9 1.5-25.8-2.4-35.5-1.7-4.2-4.4-9.5-6.1-11.8-3-4.1-3-4.3-1.5-7.9 3.5-8.4 11.1-13 21.2-13.1h6.3l-.3-7.3-.3-7.2-6-.2c-3.8-.2-8.2.5-12 1.7zm-42.8 27.3c10.8 3.7 19.5 11.4 24.6 21.7 3 6.1 3.2 7 3.2 18 0 10.8-.2 11.9-3.1 18-7.3 15.1-22.6 24-41.4 24-23.7 0-42-14.3-44.9-35-3.6-26.4 13.7-47 41.4-49.3 4.8-.3 15.6 1 20.2 2.6zm21.8 145.9c11.8 3.5 19.1 9.1 23.7 17.8 3.1 6 3.2 17.3.1 24.2-4.2 9.2-13.6 16-27.5 19.8-15.3 4.2-43.7 4.4-58.7.5-13.9-3.6-23.9-11.1-27.6-20.8-2.5-6.7-1.7-18.4 1.7-25.2 3.2-6.2 10.2-12.8 17.1-16.1l5.2-2.5 30.5.4c23.3.3 31.7.8 35.5 1.9zM1978.5 552c-8 2.6-15.2 8.3-18.4 14.5-1.4 2.7-2.7 5.2-2.8 5.4-.1.2-2.1-.8-4.5-2.1-11.4-6.6-29.9-9.9-44-7.8-33.5 4.9-53.4 28.4-51.5 60.9.8 13.6 5 24.7 12.8 33.5l2.9 3.4-3.4 2.1c-4.5 2.8-10 9-12.7 14.3-3.3 6.3-3.8 18.7-1.1 24.9 2.6 6 7.3 11.3 13 14.6 4 2.4 4.3 2.8 2.8 3.7-8.6 5.2-14.5 11.8-18.8 21.3-1.8 4-2.2 6.7-2.2 16.3-.1 10.9.1 11.8 3.1 18.3 8.1 17.1 26.5 27 55.4 29.7 26.8 2.6 53.9-1.9 70.1-11.7 15.3-9.1 23.7-27.2 21-44.8-3-19.2-16.5-32.9-38.1-38.7-6.6-1.8-11.9-2.2-41.6-2.8-22.2-.5-35.4-1.2-38-2-2.3-.7-5.8-3-8.2-5.6-4-4.1-4.3-4.8-4.3-10 0-6.3 1.4-9.6 6.2-14 4.6-4.4 9.4-6.7 11.6-5.5 11.1 5.9 34.5 7.9 49.2 4.2 22.6-5.6 37.8-20.2 42.6-40.8 2.6-10.9 1.5-25.8-2.4-35.5-1.7-4.2-4.4-9.5-6.1-11.8-3-4.1-3-4.3-1.5-7.9 3.5-8.4 11.1-13 21.2-13.1h6.3l-.3-7.3-.3-7.2-6-.2c-3.8-.2-8.2.5-12 1.7zm-42.8 27.3c10.8 3.7 19.5 11.4 24.6 21.7 3 6.1 3.2 7 3.2 18 0 10.8-.2 11.9-3.1 18-7.3 15.1-22.6 24-41.4 24-23.7 0-42-14.3-44.9-35-3.6-26.4 13.7-47 41.4-49.3 4.8-.3 15.6 1 20.2 2.6zm21.8 145.9c11.8 3.5 19.1 9.1 23.7 17.8 3.1 6 3.2 17.3.1 24.2-4.2 9.2-13.6 16-27.5 19.8-15.3 4.2-43.7 4.4-58.7.5-13.9-3.6-23.9-11.1-27.6-20.8-2.5-6.7-1.7-18.4 1.7-25.2 3.2-6.2 10.2-12.8 17.1-16.1l5.2-2.5 30.5.4c23.3.3 31.7.8 35.5 1.9zM542.7 562.1c-21.7 3-41.4 17.9-51.7 39.3-5.6 11.6-7.5 18.9-9.1 33.6-3.9 38.2 9.5 72.5 35 89.2 20.1 13.1 47.5 14.4 70.1 3.1 15.7-7.9 30.1-26.5 33.3-43.1l.7-3.2h-17.8l-.7 3.2c-1.2 5.7-6.6 14.7-12.2 20.4-18.8 19-52.3 19-71.8-.1-6.5-6.3-12.7-16.7-15.9-26.7-2.6-8.2-5.1-23.2-4.1-24.8.4-.6 23.1-1 63.1-1H624l.1-4.8c.6-24.5-4.5-43.2-16.1-58.6-15.4-20.6-38.9-30.2-65.3-26.5zm27.7 17.8c12.9 4.5 22.9 13.8 29.6 27.4 4.1 8.2 7 19 7 25.9v3.8H499v-5.3c0-11.5 6.4-27.5 14.8-36.8 7.6-8.5 19.3-15 31.2-17.3 5.2-1 19.6.3 25.4 2.3zM894.5 562c-25.6 4.1-43.5 18.5-49 39.5-.8 3.3-1.5 7.2-1.5 8.7v2.8h17l.1-3.3c.1-7.7 6.9-18.5 15-23.8 7.5-4.9 12.9-6.8 23.5-8.1 12.7-1.6 24.2.1 33.8 5.1 12.8 6.6 17.6 16.6 17.6 36.5v11.2l-26.2 1.8c-44.4 3-50.2 3.9-62.7 9.6-21.1 9.9-31.1 31.3-25.6 54.8 4.4 18.7 19.4 32.4 40.5 36.8 15.3 3.2 36 .4 49.7-6.9 8.7-4.6 17.9-13.6 22.4-22l1.6-2.9 1.1 6.7c1.4 8.6 4.9 15.3 9.8 18.8 4.5 3.2 14.3 5.3 19.7 4.3l3.7-.7V716h-4.8c-5.1 0-8.4-1.7-10.4-5.3-1-1.7-1.4-15.2-1.9-54.7-.5-45.4-.8-53.3-2.3-58.4-5-17.6-17-28.7-36.3-33.7-9-2.3-26.1-3.2-34.8-1.9zm56.2 95.7c-1.5 29.6-14.2 49.8-36.6 58.4-11.4 4.3-28.7 4.3-40.3-.1-23.1-8.6-29-39.3-10.6-55.4 5.4-4.7 14.9-8.9 22.9-10.1 3.9-.6 52.4-4 61.8-4.4l3.4-.1-.6 11.7zM1486.5 562c-25.6 4.1-43.5 18.5-49 39.5-.8 3.3-1.5 7.2-1.5 8.7v2.8h17l.1-3.3c.1-7.7 6.9-18.5 15-23.8 7.5-4.9 12.9-6.8 23.5-8.1 12.7-1.6 24.2.1 33.8 5.1 12.8 6.6 17.6 16.6 17.6 36.5v11.2l-26.2 1.8c-44.4 3-50.2 3.9-62.7 9.6-21.1 9.9-31.1 31.3-25.6 54.8 4.4 18.7 19.4 32.4 40.5 36.8 15.3 3.2 36 .4 49.7-6.9 8.7-4.6 17.9-13.6 22.4-22l1.6-2.9 1.1 6.7c1.4 8.6 4.9 15.3 9.8 18.8 4.5 3.2 14.3 5.3 19.7 4.3l3.7-.7V716h-4.8c-5.1 0-8.4-1.7-10.4-5.3-1-1.7-1.4-15.2-1.9-54.7-.5-45.4-.8-53.3-2.3-58.4-5-17.6-17-28.7-36.3-33.7-9-2.3-26.1-3.2-34.8-1.9zm56.2 95.7c-1.5 29.6-14.2 49.8-36.6 58.4-11.4 4.3-28.7 4.3-40.3-.1-23.1-8.6-29-39.3-10.6-55.4 5.4-4.7 14.9-8.9 22.9-10.1 3.9-.6 52.4-4 61.8-4.4l3.4-.1-.6 11.7zM2085.5 562c-25.6 4.1-43.5 18.5-49 39.5-.8 3.3-1.5 7.2-1.5 8.7v2.8h17l.1-3.3c.1-7.7 6.9-18.5 15-23.8 7.5-4.9 12.9-6.8 23.5-8.1 12.7-1.6 24.2.1 33.8 5.1 12.8 6.6 17.6 16.6 17.6 36.5v11.2l-26.2 1.8c-44.4 3-50.2 3.9-62.7 9.6-21.1 9.9-31.1 31.3-25.6 54.8 4.4 18.7 19.4 32.4 40.5 36.8 15.3 3.2 36 .4 49.7-6.9 8.7-4.6 17.9-13.6 22.4-22l1.6-2.9 1.1 6.7c1.4 8.6 4.9 15.3 9.8 18.8 4.5 3.2 14.3 5.3 19.7 4.3l3.7-.7V716h-4.8c-5.1 0-8.4-1.7-10.4-5.3-1-1.7-1.4-15.2-1.9-54.7-.5-45.4-.8-53.3-2.3-58.4-5-17.6-17-28.7-36.3-33.7-9-2.3-26.1-3.2-34.8-1.9zm56.2 95.7c-1.5 29.6-14.2 49.8-36.6 58.4-11.4 4.3-28.7 4.3-40.3-.1-23.1-8.6-29-39.3-10.6-55.4 5.4-4.7 14.9-8.9 22.9-10.1 3.9-.6 52.4-4 61.8-4.4l3.4-.1-.6 11.7zM2687.5 562c-13.1 2.1-25.9 8.2-34.2 16.2-2.3 2.3-5.9 7.5-8 11.6-3.8 7.4-3.8 7.7-3.8 19.1 0 10.4.3 12.2 2.6 17.1 3.9 8.3 9.7 14.1 18.1 18.3 9.4 4.7 15 6.1 38.8 9.2 21.8 2.9 28.4 4.5 34.3 8.2 5.6 3.5 8.6 7 11.5 13.2 2.1 4.6 2.4 6.3 2 13.2-.4 7.1-.8 8.4-4.1 13.2-6.6 9.5-16.4 14.8-31 16.7-10.5 1.4-17.8 1.2-26.4-.6-18.5-3.8-30.8-14.7-35.1-30.9l-1.7-6.5H2634v3.3c0 4.9 2.7 14.4 5.8 20.1 1.4 2.8 6 8.5 10.2 12.6 14 14 30.9 19.7 55.5 18.7 7.2-.3 15.9-1.3 19.5-2.2 17-4.4 30.3-14.2 36.5-26.9 10.5-21.4 4-44.9-15.9-57.8-8.4-5.4-15.7-7.3-40.4-10.8-23.7-3.4-31.9-5.5-38.2-10.1-9.4-6.9-11.9-22.2-5.2-32.6 5.4-8.3 13.4-13.4 24.8-15.8 27.6-5.8 53.8 6.9 58.2 28.2l.8 3.8 8.6.3 8.6.3-.5-4.3c-1.3-10.3-8.4-23.2-16.8-30.6-5.8-5.1-16.5-10.4-25.5-12.6-8.2-2-24.7-2.8-32.5-1.6zM2392.1 564.5c-9.9 2.2-16.1 4.4-23 8.2-41.7 22.5-57.8 74.3-36 115.2 15.2 28.5 43.7 45.5 75.9 45.5 53.9 0 94.1-49.7 83.1-103-6.3-30.6-30.1-55.5-61.6-64.5-9.4-2.7-29.5-3.4-38.4-1.4zm28.9 14.6c37.7 6.1 64.1 44.9 56.6 82.9-6.1 30.6-31.2 52.8-63.8 56.5-14.9 1.7-34.5-4.1-47.5-14-19.5-15-30.4-40.7-27.4-64.5 2.2-16.9 8.2-29.1 20.1-41 8.6-8.5 15.6-13 26.2-16.7 12.2-4.3 23.3-5.3 35.8-3.2z"/><path d="M2431.5 612.1c-36.9 13.4-37.9 13.9-43.3 25.6-5.8 12.5-22.1 53.3-21.3 53.3 2.2 0 55-22.5 57.8-24.6 6-4.6 8.4-9.2 16.4-31.6 4.4-12.3 8.6-24 9.4-26.1.8-2 1.1-3.7.7-3.6-.4.1-9.2 3.2-19.7 7zm-13.1 28.2c1.1 1.6 2 4.3 2 6.3 0 4.7-4 8.4-8.9 8.4-4.7 0-6.4-.8-8-4.1-2.3-4.4-1.9-8.6 1.1-11.4 4.4-4.1 10.4-3.8 13.8.8zM2582 565.5c-16.3 3.8-28.6 12.5-35.2 25l-3.5 6.7-.6-9.3c-.4-5.1-.7-11.4-.7-14 0-7.7-.2-7.9-8.6-7.9h-7.4v165h17v-39.3c0-42.1.9-58.2 4-70.5 5.8-22.8 19.7-37 39.4-40.3 6.6-1.1 20.3-.7 23.9.7 1.5.5 1.7-.3 1.7-7.9 0-7.9-.1-8.5-2.2-9.1-3.9-1-22.1-.5-27.8.9zM1596 566.7c0 .5 14.5 37.5 32.3 82.3l32.3 81.5h17.6l30.9-81.4c17-44.7 30.9-81.8 30.9-82.2 0-.5-3.9-.9-8.7-.9h-8.8l-24.9 66.8c-13.8 36.7-25.6 68.2-26.4 70.1l-1.4 3.5-19.9-51c-11-28-23.4-59.6-27.5-70.2l-7.6-19.2h-9.4c-5.2 0-9.4.3-9.4.7zM1779 648.5V731h18V566h-18v82.5z"/>
                                </svg>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-legalnavverydarkpurple"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        {navigation.map((item) => (
                            <a key={item.name} href={item.href} className="text-l font-semibold font-akkurat leading-6 text-legalnavverydarkpurple hover:text-legalnavpurple">
                                {item.name}
                            </a>
                        ))}
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden transition ease-in-out" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-legalnavverylightpurple px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5"/>
                            <button
                                type="button"
                                className="-m-2.5 font-akkurat rounded-md p-2.5 text-legalnavverydarkpurple"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="-mx-3 block rounded-lg px-3 py-2 text-base font-akkurat leading-7 text-legalnavverydarkpurple hover:text-legalnavpurple"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}