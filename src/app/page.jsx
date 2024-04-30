import React from "react";
import styles from "../styles/page.jsx";
import Navbar from "@/components/Navbar/page.jsx";
import Hero from "@/components/Hero/page.jsx";
import Stats from "@/components/Stats/page.jsx";
import Business from "@/components/Business/page.jsx";
import Billing from "@/components/Billing/page.jsx";
import CardDeal from "@/components/CardDeal/page.jsx";
import Testimonial from "@/components/Testimonial/page.jsx";
import Clients from "@/components/Clients/page.jsx";
import CTA from "@/components/CTA/page.jsx";
import Footer from "@/components/Footer/page.jsx";
const Home = () =>{
  return (
    <div className="bg-primary w-full overflow-hidden ">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div
        className={`bg-primary ${styles.flexStart}  ${styles.paddingX} text-white`}
      >
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonial />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
