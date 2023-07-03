import { Fragment, useState } from 'react';
import Typewriter from 'typewriter-effect';
import { Button } from 'flowbite-react';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

export default function LandingPageContent() {
    
    let [warningOpen, setWarningOpen] = useState(false)
    return (
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Which is the right court for 
                    <Typewriter
                        options={{
                        strings: ['Civil Law ?', 'Renting Law ?', 'Whatever Law ?'],
                        autoStart: true,
                        loop: true,
                        }}
                    />
                </h1>
                <p className="text-[#273469] font-akkurat mt-6 text-xl leading-8 text-gray-600">
                    You don't know? We got you covered!
                </p>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button onClick={() => setWarningOpen(true)} type="button" class="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl">
                    Find the right court for your case now
                </Button>
            </div>
        </div>
    )}