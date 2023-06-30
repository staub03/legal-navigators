import Footer from '../components/footer';
import Header from '../components/header';
import Background from '../components/backgound';

export default function FaqPage() {
    return (
      <div className="bg-white flex flex-col h-screen">
        <Background/>
        <Header/>
        <Footer/>
      </div>
    )
  }