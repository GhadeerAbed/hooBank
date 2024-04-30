import apple  from '../../../public/assets/apple.svg'
import bill  from '../../../public/assets/bill.png'
import google  from '../../../public/assets//google.svg'
import { layout } from "@/styles/page";
import styles from "@/styles/page";
import Image from "next/image";

const Billing = () => {
  return (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
         <Image src={bill} alt='billing' className='w-[100%] h-[100%] relative z-10'/>
         <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
         <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Edit enid sed massa team. Mauris eu adipiscing ultrices ametodio
        aegean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
        placerat.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image src={apple} alt="apple-store" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer" />
        <Image src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer" />
      </div>
    </div>
    </section>
  )
}

export default Billing