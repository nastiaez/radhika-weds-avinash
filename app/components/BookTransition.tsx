"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface BookTransitionProps {
  onComplete?: () => void;
}

export default function BookTransition({ onComplete }: BookTransitionProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onComplete?.();
    }, 1400);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] flex"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.1 }}
        >
          <motion.div
            className="w-1/2 h-full relative overflow-hidden"
            initial={{ perspective: 1200, rotateY: 0 }}
            animate={{ rotateY: -90 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "left center" }}
          >
            <div className="absolute inset-0 bg-[#8B6347]" />
            <div className="absolute inset-0" style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.05) 20px, rgba(0,0,0,0.05) 40px)",
            }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-3/4 bg-[#6B4A35]" />
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-center gap-3 pl-1">
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-4 flex flex-col justify-center gap-3 pr-1">
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
            </div>
          </motion.div>

          <motion.div
            className="w-1/2 h-full relative overflow-hidden"
            initial={{ perspective: 1200, rotateY: 0 }}
            animate={{ rotateY: 90 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ transformOrigin: "right center" }}
          >
            <div className="absolute inset-0 bg-[#8B6347]" />
            <div className="absolute inset-0" style={{
              backgroundImage: "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(0,0,0,0.05) 20px, rgba(0,0,0,0.05) 40px)",
            }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-px h-3/4 bg-[#6B4A35]" />
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-4 flex flex-col justify-center gap-3 pl-1">
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-4 flex flex-col justify-center gap-3 pr-1">
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
              <div className="w-px h-6 bg-[#6B4A35]" />
            </div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <Image
                src="/logo-transparent.png"
                alt="RA"
                width={80}
                height={80}
                className="opacity-90"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
