import { BackgroundBeams } from "@/components/ui/background-beams";
import { Timeline } from "@/components/ui/timeline";
import { data } from "@/constants/experienceData";

export default function Experience() {

    return (

        <div className="relative w-full overflow-clip  pt-20">
            <Timeline data={data} />
        </div>
    )
}