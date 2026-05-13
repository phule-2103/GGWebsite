import Person1 from '../assets/svg/person1.svg'
import Person2 from '../assets/svg/person2.svg'
import Person3 from '../assets/svg/person3.svg'

const steps = [
    {
        title: "Track Progress",
        desc: "Monitor your progress towards sustainability and certification targets.",
        img: Person1
    },
    {
        title: "Generate Reports",
        desc: "Create detailed reports for audits, compliance, and internal tracking.",
        img: Person2
    },
    {
        title: "Showcase Achievements",
        desc: "Highlight your sustainability efforts and build trust with customers.",
        img: Person3
    }
];

export default function ReportingCompliance() {
    return (
        <section className="pb-32 bg-[#fcfdfe]">
            <div className="container mx-auto px-8 text-center">
                <p className="text-slate-600 brightness-110 font-bold text-lg mb-2">Simplify Sustainability</p>
                <h2 className="text-4xl font-bold text-[#3F89BD] mb-6">Reporting and Compliance</h2>
                <p className="text-slate-500 mb-16 max-w-2xl mx-auto">
                    Track progress, generate reports and meet sustainability standards with ease.
                </p>

                <div className="space-y-10 max-w-5xl mx-auto">
                    {steps.map((step, i) => (
                        <div key={i} className="bg-white rounded-[40px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col md:flex-row items-center overflow-hidden hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.1)] transition-all group">
                            <div className="flex-1 p-12 md:p-16 text-left">
                                <h4 className="text-3xl font-bold text-[#1a365d] mb-4">{step.title}</h4>
                                <p className="text-slate-500 text-lg leading-relaxed">{step.desc}</p>
                            </div>
                            <div className="flex-1 relative flex items-end justify-center p-8 transition-transform group-hover:scale-105 duration-500">
                                <img src={step.img} alt={step.title} className="max-w-[400px] w-full h-auto" loading="lazy" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
