// src/components/AosInit.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosInit() {
  useEffect(() => {
    AOS.init({ once: false, duration: 800 });
    AOS.refresh();
  }, []);

  return null;
}
