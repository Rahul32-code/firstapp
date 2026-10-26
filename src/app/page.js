
import BannnerSection from "./components/home-components/BannnerSection";
import LatestProduct from "./components/home-components/LatestProduct";

export const metadata = {
  title: "Home",
  description: "Explore our latest products and offers.",
};

export default function Home() {
  return (
    <>
      <BannnerSection />
      <LatestProduct />
    </>
  );
}
