import { Fragment, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import FormPageContent from '../components/formPageContent';
import Background from '../components/background';

export default function Formpage() {
  let [warningOpen, setWarningOpen] = useState(false)

return (
  <div class="flex flex-col h-screen">
    <Background/>
    <Header/>
    <FormPageContent/>
    <Footer/>
  </div>
  )
}