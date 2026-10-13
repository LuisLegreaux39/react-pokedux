import React from 'react'
import { motion } from 'framer-motion'
import pokeball from "../../statics/images/pokeBallIcon.png"

const index = () => {
  return <motion.img 
        src={pokeball}
        alt="..."
        animate={{
          rotate:360
        }}
        transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
        style={{
          width: "10rem",
          height: "10rem",
        }}
    />
}

export default index