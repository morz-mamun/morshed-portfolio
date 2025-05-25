"use client"
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";
import React from "react";

export default function Card({ skill }) {
    const { icon, iconColor, title, description } = skill;
    const { resolvedTheme } = useTheme();

    return (
        <MagicCard  gradientColor={resolvedTheme === "dark" ? "#262626" : "#D9D9D955"} className="rounded-lg h-full overflow-hidden">
            <div className="shadow-md px-3 py-5 transition duration-300">
                <div className="flex flex-col md:flex-row md:items-center gap-2 mb-3">
                    <div className={``}>
                        {React.cloneElement(icon, { className: `h-6 w-6 ${iconColor}` })}
                    </div>
                    <h3 className="font-medium text-sm md:text-md">{title}</h3>
                </div>
                <p className="text-textPrimary dark:text-textPrimary text-sm">{description}</p>
            </div>
        </MagicCard>
    )
}