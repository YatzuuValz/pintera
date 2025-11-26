"use client";
import Header from "@/components/header";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Login() {
  return (
    <div className="bg-primary-light font-sans  h-screen pt-20 flex flex-col md:flex-row justify-between ">
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative z-10 mb-10 md:mb-0">
        <div>
          <Image src="/ref/Group18.png" fill alt=""></Image>
          <Image src="/ref/Ellipse14.png" fill alt=""></Image>
          <Image src="/ref/Group18.png" fill alt=""></Image>
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-48 h-48 md:w-64 md:h-64 bg-primary rounded-full shadow-2xl z-10 relative"
          ></motion.div>
        </div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mt-6 z-10 tracking-tight bg-[radial-gradient(circle_at_150%_50%,#FFFBE8_0%,#FFFBE8_10%,#091F5B_100%)] bg-clip-text text-transparent"
        >
          pintera
        </motion.h1>
      </div>

      <div className="w-full md:w-1/2 flex justify-center z-20 items-center">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            type: "spring",
            bounce: 0.4,
          }}
          className="relative w-full max-w-lg"
        >
          <Image
            src="/ref/skewedrec.png"
            alt="Background Shape"
            fill
            className="absolute inset-0 -z-10 object-fill drop-shadow-2xl"
          />

          <div className="p-12">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold mb-8 text-primary-light"
            >
              Lorem Ipsum
            </motion.h2>
            <form className="space-y-6">
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                <label className="block text-sm text-gray-200 mb-2 font-medium">
                  Login, email or phone number
                </label>
                <div className="relative">
                  <input
                    type="text"
                    className="w-full bg-primary-light/20 border border-primary-light/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0E4FF] transition backdrop-blur-sm"
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                <label className="block text-sm text-gray-200 mb-2 font-medium">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    className="w-full bg-primary-light/20 border border-primary-light/30 rounded-xl px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-[#D0E4FF] transition backdrop-blur-sm"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 }}
                className="pt-4"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="button"
                  className="w-full bg-[#051135] text-white font-bold py-3 px-4 rounded-xl hover:bg-black transition shadow-lg border border-[#344EAD]/50"
                >
                  Log In
                </motion.button>
              </motion.div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
