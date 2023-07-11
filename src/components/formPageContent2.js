import { Button } from 'flowbite-react';
import { HiOutlineArrowLeft } from 'react-icons/hi';
import { Transition } from '@headlessui/react';

export default function FormPageContent2({ isSteps, setIsSteps, request }) {

    function assignSpecific (field) {
        request[1]=field
        console.log(request[1])
        setIsSteps(3)
    }


    return (
        <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <Transition
                    show={true}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                    Which specific topic?
                </h1>
                <div className='case-selection'>
                        <Button
                            onClick={() => { assignSpecific("Kaution") }}
                            type="button"
                            className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none border-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3"
                        >
                            Deposit
                        </Button>
                        <Button
                            onClick={() => { assignSpecific("Mieterhöhung") }}
                            type="button"
                            className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none border-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3"
                        >
                            Rent Increase
                        </Button>
                    </div>
                    <div className='back-button'>
                    <Button onClick={() => {setIsSteps(1)}} className='hover:-translate hover:scale-110 duration-300'>
                        <HiOutlineArrowLeft className="ml-0 h-4 w-4" />
                        <p>
                        &nbsp;&nbsp;&nbsp;Back&nbsp;&nbsp;&nbsp;
                        </p>                        
                    </Button>
                    </div>
                </Transition>
            </div>
        </div>
    )
}