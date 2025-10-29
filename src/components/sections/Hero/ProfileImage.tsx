import Image from "next/image";
import { motion } from 'framer-motion';
import { FadeInSlideUpItem } from "@/src/lib/animationPresets";


const ProfileImage = () => {
  return (
    <motion.div
      variants={FadeInSlideUpItem}
      layout
      style={{ transform: 'translateZ(0)' }}
      className="relative max-w-64 mx-auto group"
    >
      <div
        className="aspect-[3/4] grid items-end rounded-b-full overflow-hidden hover:scale-110 duration-300"
      >
        <div
          className="absolute aspect-square mx-auto object-cover inset-[auto_0_0] rounded-full border-4 border-text bg-gradient-to-br from-primary to-accent"
        />
        <Image
          src="/CVImage(1).webp"
          alt="Foto de Patricio Pittana"
          width={320}
          height={320}
          priority
          className="relative right-3 top-5 scale-150 group-hover:-translate-y-4 duration-300 pointer-events-none"
        />
      </div>
    </motion.div>
  )
}

export default ProfileImage
