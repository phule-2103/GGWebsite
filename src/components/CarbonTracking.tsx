import { ChevronRight } from './shared/ChevronRight'
import FlashIcon from '../assets/svg/flash.svg'
import EyeIcon from '../assets/svg/eye.svg'
import HouseIcon from '../assets/svg/house.svg'

const trackingCards = [
    { icon: FlashIcon, title: "Optimise Delivery Routes", desc: "Reduce emissions by optimising routes and improving delivery efficiency." },
    { icon: EyeIcon, title: "Monitor Environmental Impact", desc: "Track carbon emissions across shipments with real-time insights." },
    { icon: HouseIcon, title: "Achieve Sustainability Goals", desc: "Set targets and measure progress towards your sustainability objectives." }
];

export default function CarbonTracking() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50/50">
            <div className="container mx-auto px-8 text-center max-w-6xl">
                <h2 className="text-4xl font-bold text-[#1a365d] mb-4">Real-Time Carbon Tracking</h2>
                <h3 className="text-3xl font-medium text-[#3F89BD]/80 mb-6">for Every Delivery</h3>
                <p className="text-slate-500 mb-20 max-w-2xl mx-auto">
                    Monitor emissions, optimise routes, and improve sustainability across your logistics operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    {trackingCards.map((card, i) => (
                        <div key={i} className="bg-white p-10 rounded-[40px] shadow-[0_15px_40px_-12px_rgba(0,0,0,0.06)] border border-slate-100 hover:translate-y-[-8px] transition-all text-left">
                            <div className="w-14 h-14 bg-[#3F89BD]/10 rounded-2xl flex items-center justify-center mb-8">
                                <img src={card.icon} alt={card.title} className="w-7 h-7" loading="lazy" />
                            </div>
                            <h4 className="text-xl font-bold text-[#1a365d] mb-4">{card.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{card.desc}</p>
                        </div>
                    ))}
                </div>

                <button className="inline-flex items-center px-10 py-3 border-2 border-[#3F89BD]/30 text-[#3F89BD] rounded-xl font-bold text-lg hover:bg-[#3F89BD] hover:text-white transition-all group mb-24">
                    Book A Demo
                    <ChevronRight />
                </button>
            </div>
        </section>
    )
}
