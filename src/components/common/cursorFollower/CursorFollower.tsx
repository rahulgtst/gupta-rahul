import React, { useEffect, useRef } from "react";

/** Nucleus: tracks pointer. */
const EASE_INNER = 0.18;
/** Shell: trails the nucleus. */
const EASE_OUTER = 0.09;

const CursorFollower = () => {
  const shellRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0 });
  const innerPosRef = useRef({ x: 0, y: 0 });
  const outerPosRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);
  const hasMovedRef = useRef(false);

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    if (!mq.matches) return undefined;

    const root = document.documentElement;
    root.classList.add("cursor-none");

    const applyTransform = (
      el: HTMLDivElement | null,
      x: number,
      y: number,
      visible: boolean
    ) => {
      if (!el) return;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      el.style.opacity = visible ? "1" : "0";
    };

    const onMove = (e: MouseEvent) => {
      if (!hasMovedRef.current) {
        const p = { x: e.clientX, y: e.clientY };
        innerPosRef.current = p;
        outerPosRef.current = p;
        targetRef.current = p;
        hasMovedRef.current = true;
      } else {
        targetRef.current = { x: e.clientX, y: e.clientY };
      }
    };

    const tick = () => {
      const t = targetRef.current;
      const inner = innerPosRef.current;
      innerPosRef.current = {
        x: inner.x + (t.x - inner.x) * EASE_INNER,
        y: inner.y + (t.y - inner.y) * EASE_INNER,
      };

      const o = outerPosRef.current;
      const n = innerPosRef.current;
      outerPosRef.current = {
        x: o.x + (n.x - o.x) * EASE_OUTER,
        y: o.y + (n.y - o.y) * EASE_OUTER,
      };

      const v = hasMovedRef.current;
      applyTransform(shellRef.current, outerPosRef.current.x, outerPosRef.current.y, v);
      applyTransform(dotRef.current, innerPosRef.current.x, innerPosRef.current.y, v);

      rafRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      root.classList.remove("cursor-none");
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none" aria-hidden>
      {/* Outer shell: boundary only, trails nucleus */}
      <div
        ref={shellRef}
        className="fixed left-0 top-0 z-[99] h-9 w-9 rounded-full border border-outline bg-transparent opacity-0 will-change-transform"
      />
      {/* Nucleus */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 z-[100] h-2.5 w-2.5 rounded-full border border-outline bg-primary opacity-0 will-change-transform"
      />
    </div>
  );
};

export default CursorFollower;
