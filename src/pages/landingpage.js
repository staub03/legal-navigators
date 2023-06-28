import { Fragment, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import LandingPageContent from '../components/landingPageContent';
import Background from '../components/backgound';

export default function LandingPage() {
  let [warningOpen, setWarningOpen] = useState(false)

return (
  <div class="flex flex-col h-screen">
    <Background/>
    <Header/>
    <LandingPageContent/>
    <Footer/>
  </div>
  )
}