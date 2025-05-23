"use client";
import { HyperText } from "@/components/magicui/hyper-text";
import { Button } from "@/components/ui/moving-border";
import { SparklesCore } from "@/components/ui/sparkles";
import { useTheme } from "next-themes";
import React from "react";


export default function SparklesPreview({title} : any) {
    const { resolvedTheme } = useTheme();
    return (
        <div className="w-full dark:bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
            {/* moving border button */}
           <div>
             <Button className="text-sm px-4 py-[7px] rounded-full font-medium bg-emerald-500/10 text-textPrimary dark:text-textPrimary border border-emerald-500/20 clip-path-badge inline-block">
               <HyperText className="text-sm">{title}</HyperText>
            </Button>
           </div>
            <div className="w-[40rem] h-24 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Core component */}
                <SparklesCore
                    background="transparent"
                    minSize={0.4}
                    maxSize={1}
                    particleDensity={1200}
                    className="w-full h-full"
                    {...resolvedTheme === "dark" ? { particleColor: "#FFFFFF" } : { particleColor: "#000000" }}
                    // particleColor="#FFFFFF"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-white dark:bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}
