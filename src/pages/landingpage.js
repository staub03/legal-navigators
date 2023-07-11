import { useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import LandingPageContent from '../components/landingPageContent';
import Background from '../components/background';
import { Transition } from '@headlessui/react';
import FormPageContent from '../components/formPageContent';
import NoSupport from '../components/noSupport';
import Delayed from '../components/Delayed';
import React from 'react';
import FormPageContent2 from '../components/formPageContent2';

export default await function LandingPage() {
  const [isSteps, setIsSteps] = useState(0)
  const request = [];

return (
  <div class="flex flex-col h-screen">

    <Header/>
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
                  <Delayed waitBeforeShow={150}>
      <LandingPageContent isSteps={isSteps} setIsSteps={setIsSteps} />
      </Delayed>
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
      <Delayed waitBeforeShow={200}>
      <FormPageContent isSteps={isSteps} setIsSteps={setIsSteps} request={request} />
      </Delayed>
    </Transition>
    <Transition
                    show={isSteps===99}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >  
                <Delayed waitBeforeShow={300}>
        <NoSupport isSteps={isSteps} setIsSteps={setIsSteps}/>
        </Delayed>
      </Transition>
      <Transition    
                    show={isSteps===2}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
      <Delayed waitBeforeShow={200}>
      <FormPageContent2 isSteps={isSteps} setIsSteps={setIsSteps} request={request} />
      </Delayed>
    </Transition>
    <Footer/>
  </div>
  )
}