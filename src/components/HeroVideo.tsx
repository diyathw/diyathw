import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroVideo() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, 90]);
  const opacity = useTransform(scrollY, [0, 480, 820], [0.55, 0.32, 0]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) void video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.1 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  if (reduceMotion) {
    return <div className="hero-video hero-video--static" aria-hidden="true" />;
  }

  return (
    <motion.div className="hero-video" aria-hidden="true" style={{ y, opacity }}>
      <video ref={videoRef} muted loop playsInline preload="metadata" poster="/videos/hero-particles-poster.jpg">
        <source src="/videos/hero-particles.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
