import Note1Icon from '../assets/svg/note1.svg'
import CarIcon from '../assets/svg/car.svg'
import EarthImg from '../assets/img/earth.png'
import eco from '../assets/img/ecosystem_sep2025_8000x4500 1.png'

const items = [
    { icon: Note1Icon, title: "Data-Driven Insights", desc: "Make informed decisions with accurate carbon tracking data." },
    { icon: CarIcon, title: "Scalable Solutions", desc: "Apply sustainability practices across your entire logistics network." },
    { icon: EarthImg, title: "Real Impact", desc: "Reduce emissions while maintaining operational efficiency." }
];

export default function ScalableSustainability() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-8 text-center max-w-6xl">
                <h2 className="text-4xl font-bold text-[#1a365d] mb-4">
                    Sustainability That <span className="text-[#3F89BD]">Scales with Your Business</span>
                </h2>
                <p className="text-slate-500 mb-20 max-w-2xl mx-auto">
                    Reduce emissions, improve efficiency, and operate more responsibly with GO-GENIE®.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mb-32">
                    {items.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-32 h-32 mb-8 relative flex items-center justify-center">
                                <img src={item.icon} alt={item.title} className="w-full h-auto drop-shadow-xl" loading="lazy" />
                            </div>
                            <h4 className="text-xl font-bold text-[#1a365d] mb-3">{item.title}</h4>
                            <p className="text-slate-500 max-w-xs mx-auto">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="relative pt-20 pb-40">
                    <img src={eco} alt="Sustainability Network" className="w-full h-auto max-w-5xl mx-auto opacity-90" loading="lazy" />

                    <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-full max-w-4xl px-8 ">
                        <div className="bg-white p-12 rounded-[40px] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.12)] border border-slate-50 text-center">
                            <h3 className="text-3xl font-bold text-[#1a365d] mb-4">Start Building a More Sustainable</h3>
                            <h3 className="text-3xl font-bold text-[#3F89BD] mb-6">Logistics Operation</h3>
                            <p className="text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                                Take control of your emissions, meet sustainability goals, and create measurable impact. <br />
                                <span className="font-bold tracking-widest text-xs uppercase brightness-110">GO SMART, GO GREEN, GO-GENIE®</span>
                            </p>
                            <button className="bg-[#3F89BD] text-white px-10 py-3 rounded-xl font-bold shadow-[0_10px_20px_-5px_rgba(64,136,188,0.4)] hover:shadow-lg transition-all active:scale-95">
                                Talk To Our Team
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
