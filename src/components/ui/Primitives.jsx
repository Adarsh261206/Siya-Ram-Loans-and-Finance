import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useSpring, animate } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const EASE = [0.19, 1, 0.22, 1];

/* ---------------------------------------------------------------- */
/* Sheet — curved overlapping sheet with a bridging shape             */
/* Sections never "end": each sheet slips over the previous one       */
/* ---------------------------------------------------------------- */
const SHEET_TONES = {
  white: 'bg-[#FFFEFB]',
  blue: 'bg-[#F6F2E8]',
  gold: 'bg-[#F6F2E8]',
  cream: 'bg-[#F2EDE1]',
};

function SheetShape({ shape }) {
  switch (shape) {
    case 'ring':
      return (
        <div className="pointer-events-none absolute -top-24 right-[8%] h-56 w-56 rounded-full border-[1.5px] border-gold-500/30 sm:h-72 sm:w-72" />
      );
    case 'orb':
      return (
        <div className="pointer-events-none absolute -top-28 left-[6%] h-64 w-64 rounded-full bg-gold-400/[0.16] blur-3xl sm:h-80 sm:w-80" />
      );
    case 'orbBlue':
      return (
        <div className="pointer-events-none absolute -top-28 right-[10%] h-64 w-64 rounded-full bg-navy-400/[0.14] blur-3xl sm:h-80 sm:w-80" />
      );
    case 'dots':
      return (
        <div className="pointer-events-none absolute -top-8 right-[12%] hidden h-24 w-64 bg-[radial-gradient(circle,rgba(1,49,103,0.25)_1.5px,transparent_1.5px)] bg-[size:16px_16px] [mask-image:radial-gradient(ellipse_at_center,#000,transparent_78%)] md:block" />
      );
    case 'arc':
      return (
        <div className="pointer-events-none absolute -top-14 left-[8%] hidden h-40 w-40 rounded-bl-full border-b-2 border-l-2 border-navy-800/15 lg:block" />
      );
    case 'arcGold':
      return (
        <div className="pointer-events-none absolute -top-14 right-[10%] hidden h-36 w-36 rounded-br-full border-b-2 border-r-2 border-gold-500/35 lg:block" />
      );
    case 'blob':
      return (
        <div className="pointer-events-none absolute -top-24 right-[16%] h-56 w-56 bg-gradient-to-br from-gold-300/[0.28] to-navy-300/[0.22] blur-2xl [border-radius:58%_42%_63%_37%/45%_55%_45%_55%] sm:h-64 sm:w-64" />
      );
    default:
      return null;
  }
}

export function Sheet({ children, tone = 'white', z = 10, shape = 'none', overlap = true, className = '' }) {
  return (
    <div
      style={{ zIndex: z }}
      className={`relative mx-2 rounded-[2rem] shadow-sheet sm:mx-4 sm:rounded-[3rem] lg:mx-6 ${
        overlap ? '-mt-10 sm:-mt-14' : ''
      } ${SHEET_TONES[tone] || SHEET_TONES.white} ${className}`}
    >
      <SheetShape shape={shape} />
      {children}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* useRevealOnce — in-view flag with a failsafe so content is never   */
/* left invisible (slow devices / IO quirks always resolve)           */
/* ---------------------------------------------------------------- */
export function useRevealOnce(margin = '-60px') {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin });
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setForced(true), 2600);
    return () => clearTimeout(timer);
  }, []);

  return { ref, show: inView || forced };
}

/* ---------------------------------------------------------------- */
/* Reveal — fade + rise on scroll                                     */
/* ---------------------------------------------------------------- */
export function Reveal({ children, delay = 0, y = 30, className = '' }) {
  const { ref, show } = useRevealOnce();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.85, ease: EASE, delay: show ? delay : 0 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Stagger container + item                                           */
/* ---------------------------------------------------------------- */
export function Stagger({ children, className = '', delay = 0, gap = 0.09 }) {
  const { ref, show } = useRevealOnce();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={show ? 'show' : 'hidden'}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = '', y = 26 }) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* LineReveal — masked line rise (headlines)                          */
/* CSS transition so the reveal always completes reliably             */
/* ---------------------------------------------------------------- */
export function LineReveal({ children, delay = 0, className = '', inView = true }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });
  const [mounted, setMounted] = useState(false);
  const [forced, setForced] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    const timer = setTimeout(() => setForced(true), 2600);
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(timer);
    };
  }, []);

  const show = inView ? isInView || forced : mounted;

  return (
    <span ref={ref} className={`block overflow-hidden pb-[0.08em] ${className}`}>
      <span
        className={`block will-change-transform transition-transform duration-[950ms] ease-[cubic-bezier(0.19,1,0.22,1)] ${
          show ? 'translate-y-0' : 'translate-y-[115%]'
        }`}
        style={{ transitionDelay: `${delay}s` }}
      >
        {children}
      </span>
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* SectionHeading — eyebrow + display title + lede                    */
/* ---------------------------------------------------------------- */
export function SectionHeading({
  eyebrow,
  number,
  title,
  lede,
  align = 'left',
  tone = 'light',
  className = '',
  titleClassName = '',
}) {
  const isLight = tone === 'light';
  return (
    <div
      className={`${align === 'center' ? 'mx-auto text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={`eyebrow ${
              align === 'center' ? 'justify-center' : ''
            } ${isLight ? 'text-ink-muted' : 'text-gold-300'}`}
          >
            {number && <span className="mr-1 text-gold-600">{number}</span>}
            {eyebrow}
          </span>
        </Reveal>
      )}
      <h2
        className={`display-lg mt-6 text-balance text-[2rem] sm:text-[2.6rem] lg:text-[3.1rem] ${
          isLight ? 'text-ink' : 'text-white'
        } ${titleClassName}`}
      >
        {typeof title === 'string' ? (
          <LineReveal delay={0.05}>{title}</LineReveal>
        ) : (
          title
        )}
      </h2>
      {lede && (
        <Reveal delay={0.15}>
          <p
            className={`mt-6 max-w-xl text-[15px] leading-[1.8] ${
              align === 'center' ? 'mx-auto' : ''
            } ${isLight ? 'text-ink-soft' : 'text-slate-400'}`}
          >
            {lede}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Magnetic — element drifts toward cursor                            */
/* ---------------------------------------------------------------- */
export function Magnetic({ children, strength = 0.22, className = '' }) {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 180, damping: 15, mass: 0.4 });
  const y = useSpring(0, { stiffness: 180, damping: 15, mass: 0.4 });

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - (rect.left + rect.width / 2)) * strength);
    y.set((e.clientY - (rect.top + rect.height / 2)) * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ---------------------------------------------------------------- */
/* Buttons                                                            */
/* ---------------------------------------------------------------- */
export function GoldButton({ children, onClick, href, className = '', compact = false, type = 'button' }) {
  const classes = `btn-shine group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 font-bold text-navy-950 shadow-gold-soft transition-all duration-300 hover:shadow-gold-glow hover:brightness-[1.06] active:scale-95 ${
    compact ? 'px-5 py-2.5 text-xs' : 'px-7 py-3.5 text-sm'
  } ${className}`;

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <ArrowRight
        className={`relative z-10 transition-transform duration-300 group-hover:translate-x-1 ${
          compact ? 'h-3.5 w-3.5' : 'h-4 w-4'
        }`}
      />
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}

export function GhostButton({ children, onClick, href, className = '', tone = 'dark' }) {
  const isLight = tone === 'light';
  const classes = `group inline-flex items-center justify-center gap-2.5 rounded-full border font-semibold transition-all duration-300 active:scale-95 px-6 py-3.5 text-sm ${
    isLight
      ? 'border-ink/15 text-ink hover:border-gold-500/70 hover:bg-ink/[0.03]'
      : 'border-white/15 text-slate-200 hover:border-gold-400/60 hover:bg-white/[0.04]'
  } ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </>
  );

  if (href) {
    return (
      <a href={href} onClick={onClick} className={classes}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={classes}>
      {inner}
    </button>
  );
}

/* ---------------------------------------------------------------- */
/* Counter — count-up figure on view                                  */
/* ---------------------------------------------------------------- */
export function Counter({
  to,
  from = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  duration = 2,
  delay = 0,
  grouping = true,
  className = '',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return undefined;
    const controls = animate(from, to, {
      duration,
      delay,
      ease: EASE,
      onUpdate: (v) => setValue(v),
    });
    // Failsafe: guarantee the final figure even if rAF is throttled
    const failsafe = setTimeout(() => setValue(to), (duration + delay) * 1000 + 500);
    return () => {
      controls.stop();
      clearTimeout(failsafe);
    };
  }, [inView, from, to, duration, delay]);

  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
    useGrouping: grouping,
  }).format(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

/* ---------------------------------------------------------------- */
/* Marquee — infinite horizontal scroll                               */
/* ---------------------------------------------------------------- */
export function Marquee({
  children,
  reverse = false,
  speed = 'normal',
  className = '',
  pauseOnHover = true,
}) {
  const anim =
    speed === 'slow' ? 'animate-marquee-slow' : reverse ? 'animate-marquee-reverse' : 'animate-marquee';
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${anim} ${
          pauseOnHover ? 'hover:[animation-play-state:paused]' : ''
        }`}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
