"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { apple, google } from "../../public";
import { slideIn } from "../styles/animations";

const Billing = () => (
  <section id="product" className="sectionReverse">
    <motion.div
      className="sectionImgReverse"
      variants={slideIn("left", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
     <Image
  src="/preview.png" // Path relative to the public folder
  alt="Billing"
  width={500} // Set the actual width of your image
  height={300} // Set the actual height of your image
  className="w-full h-auto relative z-[5]"
/>

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </motion.div>

    <motion.div
      className="sectionInfo"
      variants={slideIn("right", "tween", 0.2, 1.5)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <h2 className="heading2">
       Easy Digital Signing<br className="sm:block hidden" /> Secure & Encrypted 
      </h2>
      <p className="paragraph max-w-[470px] mt-5">
      Seamlessly enhance your workflow with Electrony. Effortless digital signing, secure encryption, and instant document management—simplify your paperwork like never before.
      </p>
      
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <Image
          src={apple}
          alt="google_play"
          width={128.86}
          height={42.05}
          className="object-contain mr-5 cursor-pointer"
        />
        <Image
          src={google}
          alt="google_play"
          width={144.17}
          height={43.08}
          className="object-contain cursor-pointer"
        />
      </div>
    
    </motion.div>
  </section>
);

export default Billing;
