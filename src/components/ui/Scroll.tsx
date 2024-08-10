"use client";

import { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";

export const Scroll = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const showThreshold = 300;

    if (scrollY > showThreshold) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    return (
        <>
         {showScrollTop && (
          <div
            className="fixed bottom-14 right-14 bg-[#2f2f2f] p-4 rounded-full cursor-pointer"
            onClick={scrollToTop}
          >
            <MdKeyboardArrowUp className="text-white w-8 h-8" />
          </div>
        )}
        </>
    )
}

// scroll.tsx