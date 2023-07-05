import { Component } from "react";
import Button from "../component/Button";
import { cardData } from "../assets/cardData";
import Cards from "../component/Cards";
import Icons from "../component/Icons";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Welcome from "./Welcome";
import Services from "./../component/Services";
import { servicesData } from "../assets/servicesData";
import { achieveData } from "../assets/achieveData";
import Achieve from "../component/Achieve";
import Portfolio from "../component/Portfolio";
import { portfolioData } from "../assets/portfolioData";
import Footer from "./Footer";
// import Hero from "./Hero";
// import '../component/main'
// import '../component/main'

export default class HomeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSticky: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 50) {
      this.setState({ isSticky: true });
    } else {
      this.setState({ isSticky: false });
    }
  };
  render() {
    const { isSticky } = this.state;

    return (
      <div class="">
        <div
          className={`${
            isSticky ? `fixed w-[80%] mx-auto top-0  z-50` : "w-full"
          } bg-[#092b5e]`}
        >
          <Navbar />
        </div>
        <Hero />
        <Welcome />

        <div class="flex flex-col lg:flex-row justify-center items-center pb-10 w-full ">
          {cardData.map((card) => (
            <Cards key={card.id} user={card} />
          ))}
        </div>

        <div class="flex flex-col items-center justify-center gap-8 text-[#1660cf] pb-10">
          <div class="w-[70%] flex flex-col items-center justify-center gap-5 text-center">
            <div class="under-line">
              <h1 class="lg:text-2xl text-xl p-2 font-bold">Our Services</h1>
            </div>
            <p class="text-sm md:text-md lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              ipsam vero quaerat, aut nisi iusto non quos vitae officiis neque
              nulla maxime nostrum.
            </p>
          </div>
          <div class="flex flex-row flex-wrap items-center justify-center  gap-5">
            {servicesData.map((service) => (
              <Services keys={service.id} user={service} />
            ))}
          </div>
        </div>

        <div class="flex flex-col pb-10 md:flex-row flex-wrap lg:flex-nowrap  gap-3 lg:gap-0 justify-center items-center w-full ">
          {achieveData.map((achieve) => (
            <Achieve key={achieve} user={achieve} />
          ))}
        </div>

        <div>
          <div class="flex flex-col items-center justify-center text-center w-[70%] m-auto gap-5 text-[#1660cf]">
            <div className="under-line text-center">
              <h1 className="p-2 lg:text-2xl text-xl font-bold">
                Our Portfolio
              </h1>
            </div>
            <p class="text-sm md:text-md lg:text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              ipsam vero quaerat, aut nisi iusto non quos vitae officiis neque
              nulla maxime nostrum.
            </p>

            <div className="uppercase font-bold flex flex-row flex-wrap gap-5 text-md pt-4 justify-center items-center">
              <a
                class="bg-gray-100 px-2 py-1 text-sm md:text-md rounded hover:bg-blue-500/20"
                href=""
              >
                web developement
              </a>
              <a
                class="bg-gray-100 px-2 py-1 text-sm md:text-md rounded hover:bg-blue-500/20"
                href=""
              >
                game developement
              </a>
              <a
                class="bg-gray-100 px-2 py-1 text-sm md:text-md rounded hover:bg-blue-500/20"
                href=""
              >
                app developement
              </a>
            </div>
          </div>

          <div class="flex flex-row flex-wrap items-center justify-center gap-2 md:gap-0  pt-5 pb-10">
            {portfolioData.map((portfolio) => (
              <Portfolio key={portfolio.id} user={portfolio} />
            ))}
          </div>
        </div>

        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
