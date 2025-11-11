import Navbar from "@/components/navbar/Navbar";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 to-slate-100">
            <Navbar />

            <section className="h-screen w-full flex flex-col md:flex-row">
                {/* Text */}
                <div className="md:w-1/2 w-full flex items-center justify-center px-8 md:px-16 py-10">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">About Me</h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            I am a robotics engineer passionate about exploration, automation, and intelligent systems. I focus on advancing
                            quality control and process improvement through automation, designing systems that think, adapt, and elevate
                            performance. This page shares a bit about who I am, what I enjoy, and where I’m headed next.
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div className="md:w-1/2 w-full h-64 md:h-full">
                    <img
                        src="/pictures/intro-picture.jpg"
                        alt="About me"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section className="h-screen w-full flex flex-col md:flex-row-reverse">
                {/* Text */}
                <div className="md:w-1/2 w-full flex items-center justify-center px-8 md:px-16 py-10">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hobbies & Interests</h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Hi! This section is a work in progress. Expect hobbies here soon!
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div className="md:w-1/2 w-full h-64 md:h-full">
                    <img
                        src="/pictures/hobbies.jpg"
                        alt="Hobbies"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>

            <section className="h-screen w-full flex flex-col md:flex-row">
                {/* Text */}
                <div className="md:w-1/2 w-full flex items-center justify-center px-8 md:px-16 py-10">
                    <div className="max-w-xl">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Roadmap</h2>
                        <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                            Hi! This section is a work in progress. Expect my future goals and a roadmap here soon!
                        </p>
                    </div>
                </div>
                {/* Image */}
                <div className="md:w-1/2 w-full h-64 md:h-full">
                    <img
                        src="/pictures/future.jpg"
                        alt="Roadmap"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>
        </div>
    );
}
