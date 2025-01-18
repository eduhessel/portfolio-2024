"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ImageHomeContent() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Image
        className="shadow-md"
        width={700}
        height={700}
        src={"/image-duwdu-profile.png"}
        alt="Imagem Eduardo Hessel"
      />
    </motion.section>
  );
}
