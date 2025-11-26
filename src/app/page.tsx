"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MainSection from "@/components/section/MainSection";
import ProfileSection from "@/components/section/ProfileSection";


function Main() {
  return (
    <div className="min-h-screen h-full bg-linear-to-b from-tertiary via-primary-light to-tertiary pt-20">
      <MainSection/>
      <ProfileSection/>
    </div>
  );
}

export default Main;
