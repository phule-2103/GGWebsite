import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const GetInTouch: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <main className="py-16">
      <div className="container mx-auto px-8 max-w-5xl">
        <h1 className="text-4xl font-bold text-[#3F89BD] mb-4">Get in Touch</h1>
        <p className="text-gray-600 text-lg mb-12">We're here to help. Have questions or need assistance? Contact us today.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#3F89BD] mb-8">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3F89BD] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">contact@hqlgroup.com</p>
                  <p className="text-gray-600">support@hqlgroup.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3F89BD] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.489a1 1 0 00.502.756l2.048 1.029a11.042 11.042 0 005.516 5.516l1.029 2.048a1 1 0 00.756.502l7.489 1.498a1 1 0 00.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Phone</h3>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">+1 (555) 987-6543</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3F89BD] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Office Address</h3>
                  <p className="text-gray-600">139 Nguyễn Thị Nhung, KĐT Vạn Phúc, Phường Hiệp Bình Phước, TP. Thủ Đức, TP. Hồ Chí Minh
</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#3F89BD] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-[#3F89BD] mb-8">Send us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F89BD] focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F89BD] focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F89BD] focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3F89BD] focus:border-transparent"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#3F89BD] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2f6a99] transition"
              >
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                  Thank you! We've received your message and will get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-[#3F89BD] mb-8">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What is your response time?</h3>
              <p className="text-gray-600">We aim to respond to all inquiries within 24 business hours. For urgent matters, please call us directly.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer bulk orders?</h3>
              <p className="text-gray-600">Yes, we offer competitive pricing for bulk orders. Contact our sales team for more information and custom quotes.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What are your shipping options?</h3>
              <p className="text-gray-600">We offer standard and expedited shipping nationwide. Shipping costs are calculated based on order size and destination.</p>
            </div>

            <div className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you have technical support?</h3>
              <p className="text-gray-600">Yes, our technical support team is available to assist with product specifications, applications, and any technical questions.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-[#3F89BD] text-white p-8 rounded-lg text-center">
          <h2 className="text-2xl font-semibold mb-4">Need Immediate Assistance?</h2>
          <p className="mb-6">Call our support team at +1 (555) 123-4567 or email us at support@hqlgroup.com</p>
          <Link to="/" className="inline-block bg-white text-[#3F89BD] px-6 py-2 rounded font-semibold hover:bg-gray-100 transition">
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default GetInTouch;
