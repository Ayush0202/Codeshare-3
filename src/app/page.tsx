import Footer from "./components/Footer";
import HomeFeatures from "./components/HomeFeatures";
import HomeMain from "./components/HomeMain";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <HomeMain />
      <HomeFeatures />
      <Footer />
    </>
  );
}
