import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <main className="py-16">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#3F89BD] mb-8">About Charcoal</h1>
          
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#3F89BD] mb-4">What is Charcoal?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Charcoal is a lightweight black residue consisting of carbon and any remaining ash, obtained by removing water and other volatile constituents from animal and vegetation substances. Our charcoal products are produced using sustainable practices and eco-friendly methods.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#3F89BD] mb-4">Properties of Charcoal</h2>
            <ul className="list-disc list-inside space-y-3 text-gray-700">
              <li><strong>High Porosity:</strong> Charcoal has a highly porous structure that allows it to absorb gases and liquids efficiently.</li>
              <li><strong>Lightweight:</strong> Despite its strength, charcoal is remarkably light, making it easy to transport and handle.</li>
              <li><strong>Environmentally Friendly:</strong> Our charcoal is produced from sustainably sourced biomass materials.</li>
              <li><strong>High Carbon Content:</strong> Contains up to 90% pure carbon, making it ideal for various industrial applications.</li>
              <li><strong>Biodegradable:</strong> Completely natural and biodegradable, with minimal environmental impact.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#3F89BD] mb-4">Applications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#3F89BD]">
                <h3 className="text-lg font-semibold text-[#3F89BD] mb-3">Water Purification</h3>
                <p className="text-gray-700">Used in water filtration systems to remove impurities, odors, and harmful chemicals, making it ideal for domestic and industrial water treatment.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#3F89BD]">
                <h3 className="text-lg font-semibold text-[#3F89BD] mb-3">Air Purification</h3>
                <p className="text-gray-700">Activated charcoal effectively removes pollutants, odors, and toxic gases from the air in homes, offices, and industrial facilities.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#3F89BD]">
                <h3 className="text-lg font-semibold text-[#3F89BD] mb-3">Agriculture</h3>
                <p className="text-gray-700">Improves soil quality and water retention in agriculture, helping crops grow healthier while reducing the need for chemical additives.</p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#3F89BD]">
                <h3 className="text-lg font-semibold text-[#3F89BD] mb-3">Industrial Uses</h3>
                <p className="text-gray-700">Used in various industrial processes including chemical manufacturing, food processing, and pharmaceutical production.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#3F89BD]">
                <h3 className="text-lg font-semibold text-[#3F89BD] mb-3">Health & Wellness</h3>
                <p className="text-gray-700">Commonly used in health supplements, skincare products, and detoxification treatments due to its absorptive properties.</p>
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md border-l-4 border-[#3F89BD]">
                <h3 className="text-lg font-semibold text-[#3F89BD] mb-3">Energy Production</h3>
                <p className="text-gray-700">Can be used as a renewable energy source, providing an eco-friendly alternative to fossil fuels.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#3F89BD] mb-4">Our Charcoal Products</h2>
            <p className="text-gray-700 mb-4">
              At HQL GROUP, we are committed to providing premium quality charcoal products that meet international standards. Our products are:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>100% natural and sustainably sourced</li>
              <li>Rigorously tested for quality and purity</li>
              <li>Certified by international environmental standards</li>
              <li>Available in various grades and sizes for different applications</li>
              <li>Competitively priced for both bulk and retail orders</li>
            </ul>
          </section>

          <section className="bg-[#3F89BD] text-white p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="mb-4">Interested in learning more about our charcoal products or making an order? Contact us today!</p>
            <Link to="/" className="inline-block bg-white text-[#3F89BD] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
              Back to Home
            </Link>
          </section>
        </div>
      </main>
  );
};

export default About;
