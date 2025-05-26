"use client"
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/constants/experienceData";
import { motion } from "framer-motion";

export default function Experience() {
    return (
        <div className="w-full overflow-clip pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
            >
                <Timeline data={data} />
            </motion.div>
        </div>
    );
}
