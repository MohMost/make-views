import Banner from "@/components/Banner";
import Creations from "@/components/Creations";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Banner />
      <Creations />
      <WhyUs />
      <Services />
    </div>
  );
}
