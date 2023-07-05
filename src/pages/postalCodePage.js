import { Fragment, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import FormPageContent from '../components/formPageContent';
import Background from '../components/background';
import PostalCodeContent from '../components/postalCodeContent';

export default function PostalCodePage() {
  let [warningOpen, setWarningOpen] = useState(false)

return (
  <div class="flex flex-col h-screen">
    <Background/>
    <Header/>
    <PostalCodeContent/>
    <Footer/>
  </div>
  )
}