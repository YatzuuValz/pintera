"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

function header() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-20 bg-primary px-8 flex items-center justify-between fixed top-0 z-50"
    >
      {/* Logo Placeholder (Lingkaran Putih) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
        className="w-4/100 aspect-square bg-primary-light rounded-full mx-10"
      />

      {/* Menu Navigasi */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="hidden md:flex items-center space-x-12 text-primary-light text-md font-medium ml-10"
      >
        <Link href={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300 transition"
          >
            Tentang
          </motion.div>
        </Link>
        <Link href={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="font-bold border-b-2 border-white pb-1"
          >
            Pengajar
          </motion.div>
        </Link>

        <Link href={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="hover:text-gray-300 transition"
          >
            Harga
          </motion.div>
        </Link>
      </motion.div>

      {/* Tombol Daftar */}
      <Link href={"/login"}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mx-10 cursor-pointer bg-linear-to-r from-tertiary to-primary-light  text-primary px-13 py-4 rounded-xl font-bold text-sm hover:bg-white transition shadow-md"
        >
          Daftar
        </motion.div>
      </Link>
    </motion.nav>
  );
}

export default header;
