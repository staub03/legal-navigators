import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button, Progress } from 'flowbite-react';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

export default function PostalCodeContent() {

    const [selectedLawCase, setSelectedLawCase] = useState('');
    const navigate = useNavigate();
    const [warningOpen, setWarningOpen] = useState(false);

    function handleBackClick() {
        navigate('/formpage2')
    }

    return (
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Please enter the postal code of the counter party:
                    <div className='case-selection'>
                        <div>
                            <div className="relative mt-2 rounded-md shadow-sm">
                              <input
                                type="text"
                                name="price"
                                id="price"
                                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                placeholder="12345 Munich"
                              />
                            </div>
                        </div>
                    </div>
                    <div className='back-button'>
                        <Button onClick={handleBackClick}>
                            <HiOutlineArrowLeft className="ml-2 h-5 w-5" />
                            <p>
                                Back
                            </p>                        
                        </Button>
                    </div>
                </h1>
            </div>
        </div>
    )
}