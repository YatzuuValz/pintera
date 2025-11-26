import React from "react";
import { motion } from "framer-motion";

function MainSection() {
  return (
    <div className="w-full flex py-20 flex-row items-center justify-center gap-10 border-b-2 border-black">
      <div className="w-1/3">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-8/10 aspect-square bg-primary rounded-full shadow-2xl z-10 relative"
        ></motion.div>
      </div>
      <div className="w-1/3">
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mt-6 z-10 tracking-tight bg-[radial-gradient(circle_at_150%_50%,#FFFBE8_0%,#FFFBE8_10%,#091F5B_100%)] bg-clip-text text-transparent"
        >
          pintera
        </motion.h1>
        <h2 className="text-2xl font-bold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam nobis labore eligendi quidem fuga non harum rem qui optio porro mollitia praesentium</h2>
        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil iusto ipsa suscipit non rem blanditiis voluptatibus praesentium</p>
      </div>
    </div>
  );
}

export default MainSection;
