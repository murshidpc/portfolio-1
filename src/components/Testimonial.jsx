import LinearGradient from "./LinearGradient";
import { motion } from "framer-motion";

const Testimonials = () => {
  const commonStyle = `relative h-[350px] md:w-1/3 mt-32 before:absolute before:-top-[120px] before:-ml-[110px] before:left-1/2 flex flex-col justify-end p-16`;

  return (
    <section id="testimonials" className="pt-48 pb-48">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="text-4xl font-semibold font-playfair mb-5 text-red">
          TESTIMONIALS
        </p>
        <LinearGradient width="w-2/5 mx-auto" />
        <p className="mt-10 mb-7">
          Here's What People are Saying About My Work. Aliquam aliquet integer
          ut fames odio in at. At magna ornare dictum lectus. “
        </p>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-6">
        <motion.div
          className={`bg-blue ${commonStyle} before:content-person2`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl font-semibold">''</p>
          <p className="text-xl">
            A auctor pharetra hendrerit mattis amet etiam interdum platea.
          </p>
        </motion.div>
        <motion.div
          className={`bg-red ${commonStyle} before:content-person1`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl font-semibold">''</p>
          <p className="text-xl">
            Fames odio in at. At magna ornare dictum lectus.
          </p>
        </motion.div>
        <motion.div
          className={`bg-yellow ${commonStyle} before:content-person3`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="font-playfair text-6xl font-semibold">''</p>
          <p className="text-xl">
            Aliquam aliquet integer ut fames odio in at. At magna ornare dictum
            lectus.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
