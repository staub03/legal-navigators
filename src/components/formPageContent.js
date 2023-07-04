import { Fragment, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Typewriter from 'typewriter-effect';
import { Button, Progress } from 'flowbite-react';
import { Transition } from '@headlessui/react';
import { Dialog } from '@headlessui/react';

export default function FormPageContent() {

    const [selectedLawCase, setSelectedLawCase] = useState('');
    const navigate = useNavigate();
    const [warningOpen, setWarningOpen] = useState(false);

    function handleClick(lawCase) {
        setWarningOpen(true);
        setSelectedLawCase(lawCase);
        console.log(selectedLawCase)
        navigate('/formpage2');
    }
    return (
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Which of those Law Cases do you feel fits more to your case?
                    <div className='case-selection'>
                        <Progress progress={20} />
                        <Button
                            onClick={() => handleClick('renting')}
                            type="button"
                            className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3"
                        >
                            Renting Law
                        </Button>
                        <Button
                            onClick={() => handleClick('renting')}
                            type="button"
                            className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl"
                        >
                            Family Law
                        </Button>
                    </div>
                </h1>
            </div>
        </div>
    )
}