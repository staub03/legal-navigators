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
import PostalCode from '../components/formPageContent3';
import Loading from '../components/loadingAnimation';
import ResultPageContent from '../components/resultPageContent';

export default function LandingPage() {
  const [isSteps, setIsSteps] = useState(0)
  const [request, setRequest] = useState([]);
  const [court, setCourt] = useState("");
  const [adress, setAdress] = useState("");
  const [website, setWebsite] = useState("");

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
      <FormPageContent isSteps={isSteps} setIsSteps={setIsSteps} request={request} setRequest={setRequest}/>
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
      <FormPageContent2 isSteps={isSteps} setIsSteps={setIsSteps} request={request} setRequest={setRequest} court={court} setCourt={setCourt} setAdress={setAdress} setWebsite={setWebsite}/>
      </Delayed>
    </Transition>
    <Transition    
                    show={isSteps===3}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
      <Delayed waitBeforeShow={200}>
      <PostalCode isSteps={isSteps} setIsSteps={setIsSteps} request={request} court={court} setCourt={setCourt} adress={adress} setAdress={setAdress} website={website} setWebsite={setWebsite}/>
      </Delayed>
    </Transition>
    <Transition    
                    show={isSteps===4}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
      <Loading/>
    </Transition>
    <Transition    
                    show={isSteps===5}
                    enter="transition-opacity duration-150"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-150"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
      <Delayed waitBeforeShow={200}>
      <ResultPageContent setIsSteps={setIsSteps} court={court} adress={adress} website={website}/>
      </Delayed>
    </Transition>
    <Footer/>
  </div>
  )
}