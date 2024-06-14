import About from './about/About';
import HeroSection from './hero/HeroSection';
import Navigation from './navigation/Navigation';

function App() {
  return (
    <div className="flex flex-col items-center">
      <Navigation />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;
