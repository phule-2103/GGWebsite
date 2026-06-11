import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Charcoal Supply',
      description: 'Premium quality charcoal products for various industrial and commercial applications.',
      features: ['Activated Charcoal', 'Biochar', 'Wood Charcoal', 'Bulk Orders Available'],
      icon: '🔥'
    },
    {
      title: 'Carbon Tracking & Analytics',
      description: 'Advanced carbon footprint tracking and analysis for your business operations.',
      features: ['Real-time Monitoring', 'Detailed Reports', 'Carbon Offset Recommendations', 'API Integration'],
      icon: '📊'
    },
    {
      title: 'Environmental Consulting',
      description: 'Expert consultation services to help your organization achieve sustainability goals.',
      features: ['Sustainability Audits', 'Carbon Reduction Strategies', 'Compliance Support', 'Training Programs'],
      icon: '🌱'
    },
    {
      title: 'Water Purification Solutions',
      description: 'Comprehensive water treatment systems using activated charcoal technology.',
      features: ['Filtration Systems', 'Installation Services', 'Maintenance Support', 'Custom Solutions'],
      icon: '💧'
    },
    {
      title: 'Air Quality Management',
      description: 'Advanced air purification services for industrial and residential applications.',
      features: ['Air Monitoring', 'Purification Systems', 'Odor Control', 'Emission Reduction'],
      icon: '🌬️'
    },
    {
      title: 'Agricultural Solutions',
      description: 'Soil improvement and agricultural enhancement products and services.',
      features: ['Biochar for Soil', 'Crop Enhancement', 'Yield Optimization', 'Soil Testing'],
      icon: '🌾'
    }
  ];

  return (
    <main className="py-16">
      <div className="container mx-auto px-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl font-bold text-[#3F89BD] mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for carbon tracking, environmental sustainability, and charcoal-based products. 
            We help businesses reduce their environmental impact while maintaining operational excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-[#3F89BD] hover:shadow-xl transition">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#3F89BD] mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="bg-gray-50 rounded-lg p-12 mb-16">
          <h2 className="text-3xl font-bold text-[#3F89BD] mb-8 text-center">Why Choose HQL GROUP?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3F89BD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Experience</h3>
              <p className="text-gray-600">Over 10 years of expertise in carbon management and sustainable solutions.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3F89BD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Certified Quality</h3>
              <p className="text-gray-600">All products and services meet international environmental standards.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#3F89BD] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white font-bold">✓</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-gray-600">Dedicated support team available to assist with any inquiries.</p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3F89BD] mb-8 text-center">Our Process</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-[#3F89BD] mb-2">1</div>
              <h3 className="font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate your specific needs and requirements.</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#3F89BD]"></div>
            <div className="flex-1 text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-[#3F89BD] mb-2">2</div>
              <h3 className="font-semibold text-gray-900 mb-2">Customization</h3>
              <p className="text-gray-600">We tailor solutions to fit your business goals.</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#3F89BD]"></div>
            <div className="flex-1 text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-[#3F89BD] mb-2">3</div>
              <h3 className="font-semibold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600">We deploy and integrate our solutions seamlessly.</p>
            </div>
            <div className="hidden md:block w-12 h-1 bg-[#3F89BD]"></div>
            <div className="flex-1 text-center p-6 bg-white rounded-lg shadow">
              <div className="text-4xl font-bold text-[#3F89BD] mb-2">4</div>
              <h3 className="font-semibold text-gray-900 mb-2">Support</h3>
              <p className="text-gray-600">Ongoing support and optimization for maximum results.</p>
            </div>
          </div>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-[#3F89BD] mb-8 text-center">Service Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-[#3F89BD] transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
              <p className="text-3xl font-bold text-[#3F89BD] mb-6">$499<span className="text-sm text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Basic Carbon Tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Monthly Reports
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Email Support
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">Get Started</button>
            </div>

            <div className="border-2 border-[#3F89BD] rounded-lg p-8 shadow-lg relative">
              <div className="absolute top-0 right-0 bg-[#3F89BD] text-white px-3 py-1 rounded-bl">Popular</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional</h3>
              <p className="text-3xl font-bold text-[#3F89BD] mb-6">$999<span className="text-sm text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Advanced Carbon Tracking
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Weekly Reports & Analytics
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Priority Support
                </li>
              </ul>
              <button className="w-full bg-[#3F89BD] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2f6a99] transition">Get Started</button>
            </div>

            <div className="border-2 border-gray-200 rounded-lg p-8 hover:border-[#3F89BD] transition">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
              <p className="text-3xl font-bold text-[#3F89BD] mb-6">Custom<span className="text-sm text-gray-600">/month</span></p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Custom Solutions
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  24/7 Dedicated Support
                </li>
                <li className="flex items-center text-gray-700">
                  <svg className="w-4 h-4 text-[#3F89BD] mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Consulting Included
                </li>
              </ul>
              <button className="w-full bg-gray-200 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-gray-300 transition">Contact Sales</button>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-[#3F89BD] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
          <p className="mb-6">Choose the perfect service plan for your business needs.</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link to="/get-in-touch" className="bg-white text-[#3F89BD] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
              Contact Us
            </Link>
            <Link to="/" className="border-2 border-white text-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-[#3F89BD] transition">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Services;
