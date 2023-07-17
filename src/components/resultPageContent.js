import { Button, Card } from 'flowbite-react';
import { ScaleIcon } from '@heroicons/react/24/solid';
import { ArrowUturnLeftIcon, MapPinIcon, GlobeAltIcon, MapIcon } from '@heroicons/react/24/outline';
import Typewriter from 'typewriter-effect';

export default function ResultPageContent ( { setIsSteps, request, court, adress, website }) {

  return (
    <div className="relative mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <Card className="bg-legalnavverylightpurple border-none bg-opacity-40 shadow-lg rounded-3xl">
            <div className="flex flex-col items-center">
                <div className="text-legalnavverydarkpurple">
                    <ScaleIcon className="ml-0 h-14 w-14"/>
                </div>
                <h1 className="font-akkurat text-legalnavverydarkpurple text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl pt-3 pb-3">
                    <Typewriter
                        options={{
                        strings: [court],
                        cursor: "",
                        autoStart: true,
                        loop: true,
                        pauseFor: 120000
                        }}
                    />
                </h1>
                <span className="flex text-xl text-legalnavverydarkpurple">
                    <MapPinIcon className="h-6 w-6" aria-hidden="true" />
                            &nbsp;{adress}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6 pb-3">
                    <Button target="_blank" onClick={() => {window.open(website, '_blank')}} className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none border-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3">
                        <GlobeAltIcon className="h-6 w-6" aria-hidden="true" />
                            &nbsp;&nbsp;&nbsp;Website
                    </Button>
                    <Button className="font-akkurat text-[#ffffff] bg-legalnavverydarkpurple hover:-translate hover:scale-110 hover:bg-legalnavdarkpurple duration-300 focus:outline-none border-none font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 shadow-2xl mr-3">
                        <MapIcon className="h-6 w-6" aria-hidden="true" />
                            &nbsp;&nbsp;&nbsp;Show on Google Maps
                    </Button>
                </div>
                <div>
                    <Button className="font-akkurat text-legalnavverydarkpurple outline-none border-none text-decoration-line: underline">
                        What's next?
                    </Button>
                </div>
            </div>
        </Card>
        <div className='back-button py-6 pr-2 flex items-center justify-center pl-3'>
            <Button onClick={() => {setIsSteps(1)}} className='hover:-translate hover:scale-110 duration-300'>
                <ArrowUturnLeftIcon className="ml-0 h-4 w-4" />
                <p>
                    &nbsp;&nbsp;&nbsp;Start again&nbsp;&nbsp;&nbsp;
                </p>                        
            </Button>
        </div>
    </div>
  )
}


