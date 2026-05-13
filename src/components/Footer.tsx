import face from '../assets/svg/logos_facebook.svg'
import instagram from '../assets/svg/logo_insta.svg'
import tiktok from '../assets/svg/logo_tiktok.svg'
import x from '../assets/svg/logo_x.svg'
import logo1 from '../assets/svg/logo1.svg'
import logo2 from '../assets/svg/logo2.svg'
import logo3 from '../assets/svg/logo3.svg'
import logo4 from '../assets/svg/logo4.png'

const socialLinks = [
    { icon: face, name: "Facebook" },
    { icon: instagram, name: "Instagram" },
    { icon: tiktok, name: "TikTok" },
    { icon: x, name: "X" }
];

const awardLogos = [logo1, logo2, logo3, logo4];

export default function Footer() {
    return (
        <footer className="bg-[#3F89BD] text-white pt-[32px]">
            <div className="container mx-auto px-8">
                <div className="mb-20">
                    <div className="text-4xl font-black tracking-tighter mb-16">
                        GO-GENIE
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-5 gap-12">
                        <div>
                            <h5 className="font-bold text-lg mb-6">Services</h5>
                            <ul className="space-y-4 text-white/70 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Last-Mile Delivery</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Warehousing</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Fulfillment</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-6">Solutions</h5>
                            <ul className="space-y-4 text-white/70 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Merchants</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Service Providers</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Gig Workers</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-6">About</h5>
                            <ul className="space-y-4 text-white/70 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">GO-GENIE®</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Our Ecosystem</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Sustainability</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Newsroom</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-6">Help & Guides</h5>
                            <ul className="space-y-4 text-white/70 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Help Center</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Contact Us</li>
                            </ul>
                        </div>
                        <div>
                            <h5 className="font-bold text-lg mb-6">Quick Links</h5>
                            <ul className="space-y-4 text-white/70 text-sm">
                                <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Terms of Service</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Data Retention Policy</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 pt-12 pb-24 flex flex-col md:flex-row justify-between items-start gap-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-20 flex-1">
                        <div>
                            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Singapore Address</p>
                            <p className="text-sm text-white/80 leading-relaxed">
                                1234 Building, Random Rd, Singapore, 17890123
                            </p>
                        </div>
                        <div>
                            <p className="text-xs uppercase tracking-widest text-white/50 mb-4">Vietnam Address</p>
                            <p className="text-sm text-white/80 leading-relaxed">
                                1234 Rd, Random District, Ho Chi Minh City, Vietnam
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <p className="text-xs uppercase tracking-widest text-white/50 mb-6">Follow us and keep updated</p>
                        <div className="flex gap-6">
                            {socialLinks.map((social, i) => (
                                <div key={i} className="group cursor-pointer">
                                    <img
                                        src={social.icon}
                                        alt={social.name}
                                        className="w-6 h-6 object-contain brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all"
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#F3F3F3] text-slate-400 py-20">
                <div className="container mx-auto px-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-16">
                        <div className="max-w-md text-left">
                            <h5 className="text-slate-800 font-bold mb-6 text-lg">Awards and Recognition</h5>
                            <ul className="text-sm space-y-2 mb-10 text-slate-500 font-medium list-none p-0">
                                <li>Brands For Good 2025 - Honouree</li>
                                <li>SPBA 2025 - Promising Brands</li>
                                <li>SPBA 2025 - Transformation Efforts</li>
                            </ul>

                            <h5 className="text-slate-800 font-bold mb-6 text-lg">Business Chambers</h5>
                            <ul className="text-sm space-y-2 text-slate-500 font-medium list-none p-0">
                                <li>Member of Singapore Chinese Chamber of Commerce & Industry (SCCCI)</li>
                                <li>Member of Singapore Business Federation (SBF)</li>
                            </ul>
                        </div>

                        <div className="flex-1 flex flex-wrap items-center justify-center lg:justify-between gap-10">
                            {awardLogos.map((logo, i) => (
                                <img
                                    key={i}
                                    src={logo}
                                    alt={`Award ${i + 1}`}
                                    className="h-16 md:h-24 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                                    loading="lazy"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-[#3F89BD] py-4">
                <div className="container mx-auto px-8">
                    <p className="text-center text-white text-sm">
                        © 2026 GO-GENIE® All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
