import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";

export default function Card({ skill }) {
    const { icon, iconBg, iconColor, title, description } = skill;

    return (
        <MagicCard className="rounded-lg ">
            <div className="rounded-lg shadow-sm p-4 hover:shadow-md transition duration-300">
                <div className="flex items-center gap-3 mb-3">
                    <div className={`p-2 rounded-md ${iconBg}`}>
                        {React.cloneElement(icon, { className: `h-6 w-6 ${iconColor}` })}
                    </div>
                    <h3 className="font-medium text-xl">{title}</h3>
                </div>
                <p className="text-textPrimary dark:text-textPrimary text-sm">{description}</p>
            </div>
        </MagicCard>
    )
}