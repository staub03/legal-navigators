import { Fragment, useState } from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import CourtRecContent from '../components/courtRecContent';
import Background from '../components/background';

export default function CourtRecommendation() {
  let [warningOpen, setWarningOpen] = useState(false)

return (
  <div class="flex flex-col h-screen">
    <Background/>
    <Header/>
    <CourtRecContent/>
    <Footer/>
  </div>
  )
}