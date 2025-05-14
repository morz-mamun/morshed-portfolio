import { MagicCard } from "@/components/magicui/magic-card";
import React from "react";

export default function Card({ skill }) {
    const { icon, iconColor, title, description } = skill;

    return (
        <MagicCard className="rounded-lg h-full">
            <div className="shadow-sm px-3 py-5 hover:shadow-md transition duration-300">
                <div className="flex items-center gap-2 mb-3">
                    <div className={``}>
                        {React.cloneElement(icon, { className: `h-6 w-6 ${iconColor}` })}
                    </div>
                    <h3 className="font-medium text-md">{title}</h3>
                </div>
                <p className="text-textPrimary dark:text-textPrimary text-sm">{description}</p>
            </div>
        </MagicCard>
    )
}