import { Fragment, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import FormPageContent2 from '../components/formPageContent2';
import Background from '../components/background';

export default function Formpage2() {
  let [warningOpen, setWarningOpen] = useState(false)

return (
  <div class="flex flex-col h-screen">
    <Background/>
    <Header/>
    <FormPageContent2/>
    <Footer/>
  </div>
  )
}