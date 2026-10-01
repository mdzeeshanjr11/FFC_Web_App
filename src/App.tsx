import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Squad from '@/components/Squad';
import CoachesGround from '@/components/CoachesGround';
import JoinUs from '@/components/JoinUs';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-ink-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Squad />
      <CoachesGround />
      <JoinUs />
      <Footer />
    </div>
  );
}

export default App;
