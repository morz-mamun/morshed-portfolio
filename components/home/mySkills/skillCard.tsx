export default function SkillCard({ category }: { category: any }) {
    return (
        <div className="bg-[#0f1524] rounded-xl p-6 transition-all duration-300 hover:bg-[#151b2e]">
            <div className="flex items-center gap-3 mb-5">
                <div className="text-blue-400">{category.icon}</div>
                <h3 className="text-xl font-semibold">{category.name}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
                {category.skills.map((skill: any) => (
                    <div
                        key={`${category.name}-${skill.name}`}
                        className={`flex items-center gap-2 p-3 rounded-md bg-[#1a1f2e] transition-all duration-300}`}
                    >
                        <div className={`flex items-center justify-center w-6 h-6 rounded ${skill.color || ""}`}>
                            {skill.icon}
                        </div>
                        <span className="text-sm">{skill.name}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}