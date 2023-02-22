import Header from "../../components/header/Header";
import Banner from "../banner/Banner";
import Specs from "../the-specs/Specs";
import HowItWorks from "../how-it-works/HowItWorks";
import FAQ from "../faq/FAQ";
import Footer from "../../components/footer/Footer";
import BuiltFromTheBottom from "../built-from-the-bottom/BuiltFromTheBottom";
import "./home.scss";
import '../../styles/common.scss';

const Home = () => {
  return (
    <div className="home-wrapper">
      <Header />
      <Banner />
      <Specs />
      <HowItWorks />
      <BuiltFromTheBottom />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Home;
