
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { words } from "@/constants/aboutme/aboutMe";
import { skills } from "@/constants/aboutme/cardConstants";
import Card from "./card";

export default function AboutMe() {

    return (
        <section className="container mx-auto flex items-center justify-center mb-20">
            <div className="relative w-full max-w-6xl">
                <div className="absolute inset-0 h-full w-full scale-[0.9] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                <div className="relative h-full ">

                    <div className="flex flex-col items-center overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                        {/*HEADING  */}
                        <TypewriterEffectSmooth cursorClassName="bg-brand" words={words} />
                        {/* description */}
                        <p className="max-w-4xl text-center text-textPrimary dark:text-textPrimary">I'm a passionate MERN Stack Developer with expertise in building modern, responsive web applications. Combining strong frontend skills with backend knowledge, I create seamless user experiences backed by robust server architectures. I enjoy turning complex problems into simple, beautiful, and intuitive solutions.</p>

                        {/* cards */}
                        <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-3">
                            {skills?.map((skill, index) => (<Card key={index} skill={skill} />))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}