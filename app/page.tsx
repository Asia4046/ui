import Hero from "./pages/Hero"
import Navbar from "@/components/Navbar";
import Hero_1 from "./pages/Hero_1";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Hero/>
      <Hero_1 />  
      <Navbar />
      <Footer/>
    </div>
  );
}
