import Image from "next/image";


const MyWork = () => {
    return (
        <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="500"
            className="px-5 my-8"
        >
            <h1 className="text-center my-8 text-5xl font-bold uppercase">My Works</h1>
            <div
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="2000"
                className="flex flex-col md:flex-row gap-5 bg-[#161616] rounded-xl shadow-2xl space-y-5 mb-10"
            >
                <div className="md:w-1/2">
                    <Image
                        src="/ss4.png"
                        alt="My Photo"
                        width={500}
                        height={500}
                        // className="object-cover rounded-xl"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <p className="text-xl font-bold text-warning">MorZE</p>
                    <p>
                        MorZE is a Real Estate Website. Browse through a diverse range of
                        properties, from cozy apartments to spacious homes you can buy,
                        sell.{" "}
                    </p>
                    <p className="font-bold text-xl">Features Used</p>
                    <div className="space-x-2 space-y-2">
                        <p className="btn btn-warning btn-sm rounded-3xl">TailwindCss</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">React</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">Node.js</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">Firebase</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">MongoDB</p>
                    </div>
                    <div className="space-y-2 space-x-2">
                        <a
                            className="btn btn-warning btn-sm rounded-3xl"
                            href="https://morze-bb5a5.web.app/"
                        >
                            Live Link
                        </a>
                        <a
                            className="btn btn-warning btn-sm rounded-3xl"
                            href="https://github.com/morz-mamun/Real-Estate-Project-Client"
                        >
                            Client Site Link
                        </a>
                        <a
                            className="btn btn-warning btn-sm rounded-3xl"
                            href="https://github.com/morz-mamun/Real-Estate-Project-Server"
                        >
                            Server Site Link
                        </a>
                    </div>
                </div>
            </div>
            <div data-aos="fade-left"
                data-aos-offset="300"
                data-aos-duration="2000" className="flex flex-col md:flex-row gap-5 bg-[#161616] rounded-xl shadow-2xl space-y-5">
                <div className="md:w-1/2">
                    <Image
                        src="/ss1.png"
                        alt="My Photo"
                        width={500}
                        height={500}
                        // className="object-cover rounded-xl"
                    />
                </div>
                <div className="md:w-1/2 space-y-4">
                    <p className="text-xl font-bold text-warning">Dream Job</p>
                    <p>
                        Dream job is a Social Marketing Website. Where people can find their
                        dream job easily. Here client can post job for hire people. Job
                        hunter can any job post.
                    </p>
                    <p className="font-bold text-xl">Features Used</p>
                    <div className="space-x-2 space-y-2">
                        <p className="btn btn-warning btn-sm rounded-3xl">TailwindCss</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">React</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">Node.js</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">Firebase</p>
                        <p className="btn btn-warning btn-sm rounded-3xl">MongoDB</p>
                    </div>
                    <div className="space-y-2 space-x-2">
                        <a
                            className="btn btn-warning btn-sm rounded-3xl"
                            href="https://dream-job-finder.web.app/"
                        >
                            Live Link
                        </a>
                        <a
                            className="btn btn-warning btn-sm rounded-3xl"
                            href="https://github.com/morz-mamun/Dream-Job-Finder-Client"
                        >
                            Client Site Link
                        </a>
                        <a
                            className="btn btn-warning btn-sm rounded-3xl"
                            href="https://github.com/morz-mamun/Dream-Job-Finder-Server"
                        >
                            Server Site Link
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyWork;
