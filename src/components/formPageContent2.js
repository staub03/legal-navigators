import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button, Progress } from 'flowbite-react';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';
import { HiOutlineArrowLeft, HiOutlineArrowRight, HiShoppingCart } from 'react-icons/hi';

export default function FormPageContent2() {

    function handleBackClick() {
        navigate('/formpage')
    }

    const navigate = useNavigate();
    const [warningOpen, setWarningOpen] = useState(false);

    function handleClick() {
        setWarningOpen(true);
        navigate('/PostalCodePage');
    }
    return (
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Is your claim worth more than 5,000€
                    <div className='case-selection'>
                        <Progress progress={20} />
                        <Button
                            onClick={() => handleClick()}
                            type="button"
                            className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3"
                        >
                            YES
                        </Button>
                        <Button
                            type="button"
                            className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl"
                        >
                            NO
                        </Button>
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