import { FocusCards } from "@/components/ui/focus-cards";
 
export function Hero_2() {
  const cards = [
    {
      title: "Friendly Community & Expert Guidance",
      src: "https://i.imgur.com/1h9tUpA.png",
    },
    {
      title: "A Large Library Of Reources",
      src: "https://i.imgur.com/MulCDmw.png",
    },
    {
      title: "JEE/NEET PREP GUIDENCE",
      src: "https://i.imgur.com/3cQLqa0.png",
    },
    {
      title: "Virtual Study Sessions",
      src: "https://i.imgur.com/Zt9mjGB.png",
    },
    {
        title: "Quiz Events",
        src: "https://i.imgur.com/NrFQF0Y.png",
    },
    {
      title: "Programmers Hub",
      src: "https://i.imgur.com/8xnRVPc.png",
    },
  ];
 
  return(
    <div className="border-black rounded-xl border-2 m-2 py-2 dark:border-[#F2D7D9]">
      <h1 className="text-center font-bold antialiased text-2xl my-7">What We Offer At Our Server!</h1>
    <FocusCards cards={cards} />
    </div>
  ) 
}

export default Hero_2;