import SceneryImg from '../assets/svg/scenery.png'

export default function Vision() {
    return (
        <section className="py-24 text-center">
            <div className="container mx-auto px-8">
                <p className="text-[#3F89BD] font-bold text-sm uppercase tracking-widest mb-4">Our Vision</p>
                <h2 className="text-4xl font-bold text-[#1a365d] mb-16">Built for Measure Sustainability</h2>

                <div className="max-w-5xl mx-auto relative group">
                    <div className="relative rounded-3xl overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                        <img
                            src={SceneryImg}
                            alt="Sustainability Vision"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>

                    <div className="bg-white p-8 md:p-12 mt-[-60px] relative z-20 max-w-4xl mx-auto rounded-3xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.05)] border border-slate-50 text-slate-500 leading-relaxed text-lg">
                        At GO-GENIE, sustainability starts with understanding your impact. We provide accurate, transparent carbon data and actionable insights so businesses can measure emissions, benchmark performance, and make informed decisions. Turning data into measurable, real-world impact.
                    </div>
                </div>
            </div>
        </section>
    )
}
