import Hero from "./ui/Hero"
import Navbar from "@/components/Navbar";
import Hero_1 from "./ui/Hero_1";
import Footer from "@/components/Footer";
import Hero_2 from "./ui/Hero_2";

export default function Home() {
  return (
    <div className="bg-amber-50 dark:bg-background">
      <Hero/> 
      <Hero_2 />
      <Hero_1 />  
      <Navbar />
      <Footer/>
    </div>
  );
}
