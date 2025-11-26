"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainSection from "@/components/section/MainSection";
import ProfileSection from "@/components/section/ProfileSection";
import Pricing from "@/components/section/Pricing";


function Main() {
  return (
    <div className="h-full bg-linear-to-b from-tertiary via-primary-light to-tertiary pt-20">
      <MainSection/>
      <ProfileSection/>
      <Pricing/>
    </div>
  );
}

export default Main;
