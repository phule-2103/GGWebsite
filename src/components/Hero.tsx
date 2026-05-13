import { ChevronRight } from './shared/ChevronRight'
import EcosystemBg from '../assets/svg/ecosystem_horizontal.png'

export default function Hero() {
    return (
        <section className="relative pt-24 pb-4 bg-[linear-gradient(to_bottom,rgba(63,137,189,1.000),rgba(255,0,0,0))] overflow-hidden">
            <div className="container mx-auto px-8 relative z-20 text-center text-white">
                <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 max-w-4xl mx-auto leading-[1.1]">
                    Measure and Reduce Your Logistics Carbon Footprint
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 font-light">
                    Track emissions, gain real-time insights, and make smarter, more sustainable logistics decisions.
                </p>

                <button className="inline-flex items-center px-8 py-3 bg-white text-[#3F89BD] rounded-[10px] font-bold text-base hover:shadow-lg transition-all mb-12 group">
                    Explore Sustainability Solutions
                    <ChevronRight />
                </button>
            </div>

            <div className="container mx-auto px-4 relative z-10 -mt-10 lg:-mt-20">
                <img
                    src={EcosystemBg}
                    alt="Logistics Ecosystem"
                    className="w-full h-auto max-w-6xl mx-auto pointer-events-none drop-shadow-2xl"
                    fetchPriority="high"
                />
            </div>
        </section>
    )
}
