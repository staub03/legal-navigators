import Footer from '../components/footer';
import Header from '../components/header';
import Background from '../components/background';
import FaqContent from '../components/faqContent';

export default function FaqPage() {
    return (
      <div className="bg-white flex flex-col h-screen">
        <Background/>
        <Header/>
        <FaqContent/>
        <Footer/>
      </div>
    )
  }