import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Clients from "./components/Clients";
import Community from "./components/Community";
import Spending from "./components/Spending";
import Statistics from "./components/Statistics";
import Design from "./components/Desing";
import Testimonial from "./components/Testimonial";
import Marketing from "./components/Marketing";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Navbar />

      <main>
        <Hero />

        <Clients />

        <Community />

        <Spending />

        <Statistics />

        <Design />

        <Testimonial />

        <Marketing />

        <CTA />
      </main>

      <Footer />

    </div>
  );
}

export default App;