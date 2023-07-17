import Footer from '../components/footer';
import Header from '../components/header';
import Background from '../components/background';
import NextSteps from '../components/nextStepsContent';
  
  export default function NextStepsPage() {
    return (
      <div className="bg-white flex flex-col h-screen">
        <Background/>
        <Header/>
        <NextSteps/>
        <Footer/>
      </div>
    )
  }