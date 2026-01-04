"use client";

import Image from 'next/image'
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Award = { judul: string; desc: string };
type Orang = { nama: string; gambar: string; award: Award[] };

const orangDummy: Orang[] = [
  {
    nama: "yahya",
    gambar: "/ref/orang.png",
    award: [
      { judul: "award1", desc: "Memenangan dengan mantap" },
      { judul: "award2", desc: "Memenangan dengan mantap" },
      { judul: "award3", desc: "Memenangan dengan mantap" },
      { judul: "award4", desc: "Memenangan dengan mantap" },
    ],
  },
  {
    nama: "tama",
    gambar: "/ref/orang.png",
    award: [
      { judul: "award1", desc: "Memenangan dengan mantap" },
      { judul: "award2", desc: "Memenangan dengan mantap" },
      { judul: "award3", desc: "Memenangan dengan mantap" },
      { judul: "award4", desc: "Memenangan dengan mantap" },
    ],
  },
  {
    nama: "erik",
    gambar: "/ref/orang.png",
    award: [
      { judul: "award1", desc: "Memenangan dengan mantap" },
      { judul: "award2", desc: "Memenangan dengan mantap" },
      { judul: "award3", desc: "Memenangan dengan mantap" },
      { judul: "award4", desc: "Memenangan dengan mantap" },
    ],
  },
  {
    nama: "jonatan",
    gambar: "/ref/orang.png",
    award: [
      { judul: "award1", desc: "Memenangan dengan mantap" },
      { judul: "award2", desc: "Memenangan dengan mantap" },
      { judul: "award3", desc: "Memenangan dengan mantap" },
      { judul: "award4", desc: "Memenangan dengan mantap" },
    ],
  },
];

export default function ProfileSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);

  const current = orangDummy[index];

  const next = () => {
    setDirection(1);
    setIndex((i) => (i + 1) % orangDummy.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? orangDummy.length - 1 : i - 1));
  };

  return (
    <div className="border-b-2 border-black py-20 mx-auto flex flex-col items-center justify-center font-sans overflow-hidden">

      {/* header */}
      <div className='h-full flex flex-col items-center justify-start'>
        <div className="text-center">
          <h1 className="text-[48px] font-bold tracking-tight text-[#0b0b0b]">Profil Pengajar</h1>
          <p className="text-[16px] text-[#202020] mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
        </div>
      </div>

      {/* bawah */}
      <div className='flex w-full justify-around items-center my-6'>

        {/* Left chevron */}
        <div onClick={prev} className="cursor-pointer">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M28 13L16 26L28 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M38 13L26 26L38 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        <div className='relative w-8/10 flex items-center justify-center'>
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current.nama}
              custom={direction}
              variants={slide}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35 }}
              className='relative flex w-5/10'
            >

              <Image width={1000} height={1000} alt='' src="/ref/vector 25.png" />

              <div className="absolute flex items-end -left-10 bottom-0 h-9/10 w-1/2 rounded-3xl bg-gradient-to-br from-white/50 to-white/30 backdrop-blur-[0.2em] shadow-[0_0_5px_rgba(15,23,42,0.15)] border border-white/50">
                <Image width={3000} height={3000} alt='' src={current.gambar} />
              </div>

              <div className='absolute flex flex-col right-0 top-1/2 -translate-y-1/2 w-1/2 h-7/10 pt-10'>
                <p className='absolute top-0 left-0 bg-primary text-white font-bold p-2 pr-15 whitespace-nowrap rounded-lg'>
                  {current.nama}
                </p>

                <div className='py-2 pl-3'>
                  {current.award.map((a, i) => (
                    <div key={i} className='my-2'>
                      <p className="text-white font-bold text-[0.7em]">{a.judul}</p>
                      <p className='text-white text-[0.4em]'>{a.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right chevron */}
        <div onClick={next} className="cursor-pointer">
          <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
            <path d="M24 13L36 26L24 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 13L26 26L14 39" stroke="#0b2b56" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

      </div>
    </div>
  );
}

const slide = {
  enter: (dir: 1 | -1) => ({
    x: dir === 1 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: 1 | -1) => ({
    x: dir === 1 ? -80 : 80,
    opacity: 0,
  }),
};
