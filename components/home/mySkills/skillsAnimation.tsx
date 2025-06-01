"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaReact, FaUserTie } from "react-icons/fa";
import { SiExpress, SiGithub, SiJavascript, SiNodedotjs, SiRemix, SiTailwindcss, SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";


const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-border bg-gray-200 dark:bg-[#0f1524] p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function SkillsAnimation({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);
  const div10Ref = useRef<HTMLDivElement>(null);
  const div11Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center gap-3">
          <Circle ref={div1Ref}>
            <Icons.javascript />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.typescript />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.react />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.nextjs />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.remix />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.tailwindcss />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.nodejs />
          </Circle>
          <Circle ref={div8Ref}>
            <Icons.expressjs />
          </Circle>
          <Circle ref={div9Ref}>
            <Icons.github />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div10Ref} className="size-16">
            <Icons.vscode />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div11Ref}>
            <Icons.user />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div8Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div9Ref}
        toRef={div10Ref}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div10Ref}
        toRef={div11Ref}
      />
    </div>
  );
}

export const Icons = {
  vscode: () => <VscVscodeInsiders className="text-textPrimary dark:text-blue-500" size={40} />,
  react: () => <FaReact className="text-textPrimary dark:text-cyan-400" size={24} />,
  remix: () => <SiRemix className="text-textPrimary dark:text-blue-500" size={24} />,
  nextjs: () => <RiNextjsFill className="text-textPrimary dark:text-white" size={24} />,
  nodejs: () => <SiNodedotjs className="text-textPrimary dark:text-green-500" size={24} />,
  expressjs: () => <SiExpress  className="text-textPrimary dark:text-white" size={24} />,
  tailwindcss: () => <SiTailwindcss className="text-textPrimary dark:text-cyan-400" size={24} />,
  github: () => <SiGithub className="text-textPrimary dark:text-white" size={24} />,
  javascript: () => <SiJavascript className="text-textPrimary dark:text-yellow-500" size={24} />,
  typescript: () => <SiTypescript className="text-textPrimary dark:text-blue-500" size={24} />,
  user: () => <FaUserTie className="text-textPrimary dark:text-brand" size={32} />
};
