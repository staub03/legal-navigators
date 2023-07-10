import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import LandingPageContent from '../components/landingPageContent';
import Background from '../components/background';
import { Transition } from '@headlessui/react';
import FormPageContent from '../components/formPageContent';

export default function LandingPage() {
  const [isSteps, setIsSteps] = useState(0)

return (
  <div class="flex flex-col h-screen">

    <Header isSteps={isSteps} setIsSteps={setIsSteps} />
    <Background/>
    <Transition
                    show={isSteps===0}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
      <LandingPageContent isSteps={isSteps} setIsSteps={setIsSteps} />
    </Transition>
    <Transition
                    show={isSteps===1}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
      <FormPageContent isSteps={isSteps} setIsSteps={setIsSteps} />
    </Transition>
    <Footer/>
  </div>
  )
}