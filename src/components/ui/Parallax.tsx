import { type CSSProperties, type ReactNode, useEffect, useRef } from "react";

type ParallaxProps = {
  children: ReactNode;
  className?: string;
  maxOffset?: number;
  speed?: number;
};

const clamp = (value: number, min: number, max: number) => {
  return Math.min(Math.max(value, min), max);
};

const Parallax = ({ children, className = "", maxOffset = 120, speed = 0.16 }: ParallaxProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updatePosition = () => {
      if (reducedMotion.matches || window.innerWidth < 768) {
        element.style.setProperty("--parallax-y", "0px");
        return;
      }

      const rect = element.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = clamp((viewportCenter - elementCenter) * speed, -maxOffset, maxOffset);

      element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
    };

    const requestUpdate = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        animationFrame = 0;
        updatePosition();
      });
    };

    updatePosition();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    reducedMotion.addEventListener("change", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, [maxOffset, speed]);

  return (
    <div
      ref={elementRef}
      className={`parallax-float ${className}`}
      style={{ "--parallax-y": "0px" } as CSSProperties}
    >
      {children}
    </div>
  );
};

export default Parallax;
