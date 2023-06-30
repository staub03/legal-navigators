import Footer from '../components/footer';
import Header from '../components/header';
import Background from '../components/backgound';
import AboutUs from '../components/aboutUsContent';

  
  export default function AboutPage() {
    return (
      <div className="bg-white flex flex-col h-screen">
        <Background/>
        <Header/>
        <AboutUs/>
        <Footer/>
      </div>
    )
  }
  