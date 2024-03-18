import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Features from './components/Features/Features';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Title subtitle='OUR PROGRAMS' title='What We Offer' />
     <Programs />
     <About />
    <Features />
    <Title title='BLOGS' />
    <Blogs />
    <Title subtitle='Testimonials' title='What Student Says' />
    <Testimonial />
    <Title subtitle='Contact Us' title='Get In Touch' />
    <Contact />
    <Footer />
    </div>
  );
}

export default App;
