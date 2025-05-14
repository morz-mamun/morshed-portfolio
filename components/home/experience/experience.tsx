import { Timeline } from "@/components/ui/timeline";

export default function Experience() {
    const data = [
        {
            title: "Nov 2024 – Apr 2025",
            content: (
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6">
                        <div className="flex items-start justify-between mb-1">
                            <h3 className="text-xl dark:text-textPrimary font-semibold">Monster Studio</h3>
                            {/* <div className="text-sm text-gray-500">2021 - Present</div> */}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-textPrimary dark:textPrimary text-sm">Chattogram, Bangladesh. On-site</span>
                        </div>
                        <div className="mb-3 pt-2">
                            <span className="dark:text-brand font-medium">Web Developer</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-textPrimary dark:text-textPrimary">
                            <li>Worked on a large-scale e-commerce platform, enhancing user experience and performance.</li>
                            <li>Contributed to both frontend and backend development in a large-scale MERN stack project.</li>
                            <li>Worked with WhatsApp cloud API integration and Discord Bot integration.</li>
                            <li>Built reusable components and REST APIs using React.js, Remix, Express.js, Node.js, and MongoDB.</li>
                            <li>Managed and configured a large-scale Nx monorepo to optimize modularity and scalability.</li>
                            <li>Led a small frontend team, facilitating collaboration and improving productivity.</li>
                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Aug 2024 – Nov 2024",
            content: (
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6">
                        <div className="flex items-start justify-between mb-1">
                            <h3 className="text-xl dark:text-textPrimary font-semibold">Monster Studio</h3>
                            {/* <div className="text-sm text-gray-500">2021 - Present</div> */}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-textPrimary dark:textPrimary text-sm">Chattogram, Bangladesh. On-site</span>
                        </div>
                        <div className="mb-3 pt-2">
                            <span className="dark:text-brand font-medium">Web Developer</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-textPrimary dark:text-textPrimary">
                            <li>Gained practical experience with React.js, Tailwind CSS, and modern frontend workflows.</li>
                            <li>Participated in UI implementation, responsive design, and component architecture basics.</li>
                            <li>Collaborated with designers to ensure pixel-perfect implementation of UI designs.</li>
                            <li>Learned about version control using Git and GitHub for collaborative development.</li>
                            <li>Worked on a large-scale e-commerce platform, enhancing user experience and performance.</li>

                        </ul>
                    </div>
                </div>
            ),
        },
        {
            title: "Apr 2024 – Jun 2024",
            content: (
                <div className="max-w-3xl mx-auto">
                    <div className="mb-6">
                        <div className="flex items-start justify-between mb-1">
                            <h3 className="text-xl dark:text-textPrimary font-semibold">Delta Coder</h3>
                            {/* <div className="text-sm text-gray-500">2025 - Present</div> */}
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-textPrimary dark:textPrimary text-sm">Chattogram, Bangladesh. Remote</span>
                        </div>
                        <div className="mb-3 pt-2">
                            <span className="dark:text-brand font-medium">Frontend Developer</span>
                        </div>
                        <ul className="list-disc pl-5 space-y-2 text-textPrimary dark:text-textPrimary">
                            <li>Worked with the team to build <strong>Delta Translator</strong>, a multilingual web application.</li>
                            <li>Integrated translation APIs to provide real-time language conversion.</li>
                            <li>Collaborated using Git and GitHub, following agile development practices.</li>
                        </ul>
                    </div>
                </div>

            ),
        },
    ]
    return (

        <div className="relative w-full overflow-clip  pt-20">
            <Timeline data={data} />
        </div>
    )
}