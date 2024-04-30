import { features } from "@/constant/page";
import Button from "../Button/page";
import { layout } from "@/styles/page";
import styles from "@/styles/page";
import Image from "next/image";

const FeatureCard = ({ icon, title, content, i }) => (
  <div
    className={`flex flex-row rounded-[20px] p-6 ${
      i !== features.length ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue` }>
      <Image
        src={icon}
        alt={title}
        className="w-[50%] h-[50%] object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);
const Business = () => {
  return (
    <section id="features" className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle
          the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button styles="mt-10" content="Get Started" />
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features?.map((feature, i) => (
          <FeatureCard key={feature.id} {...feature} i={i} />
        ))}
      </div>
    </section>
  );
};

export default Business;
