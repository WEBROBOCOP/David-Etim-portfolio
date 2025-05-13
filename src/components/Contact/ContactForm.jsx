import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'service_dszuxvc',
      'template_tcniajv',
      formData,
      '7sFoyRvyvjMK-nU-g'
    ).then(
      (result) => {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        alert('Failed to send message, please try again.');
      }
    );
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-700">
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm">contact.sh</div>
            </div>
            
            <div className="p-6">
              <div className="mb-8 space-y-4">
                <div className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">$</span>
                  <span>echo "de488904@gmail.com"</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">$</span>
                  <span>echo "04915904811XXX"</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <span className="text-green-400 mr-2">$</span>
                  <span>pwd</span>
                  <span className="ml-2 text-yellow-400">/Berlin/Germany</span>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <div className="flex items-center text-gray-400 mb-2">
                    <span className="text-green-400 mr-2">$</span>
                    <span>read name</span>
                  </div>
                  <input
                    type="text"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-green-400"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center text-gray-400 mb-2">
                    <span className="text-green-400 mr-2">$</span>
                    <span>read email</span>
                  </div>
                  <input
                    type="email"
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-green-400"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div>
                  <div className="flex items-center text-gray-400 mb-2">
                    <span className="text-green-400 mr-2">$</span>
                    <span>cat  message.txt</span>
                  </div>
                  <textarea
                    rows={4}
                    className="w-full bg-gray-800 border border-gray-700 rounded px-4 py-2 text-gray-300 focus:outline-none focus:border-green-400"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gray-800 border border-gray-700 text-gray-300 px-4 py-2 rounded hover:bg-gray-700 hover:text-green-400 transition-colors"
                >
                  $ ./send_message.sh
                </button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm; 