import React, { useState, useRef } from 'react';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    try {
      // Add your form submission logic here
      setSubmitStatus('success');
      formRef.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-primary" id="contact">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Interested in collaborating?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto">
            I'm always open to discussing development projects or partnership opportunities. 
            Let's queue up a time to chat. I'll bring the coffee! ☕
          </p>
        </div>
        <div className="max-w-2xl mx-auto bg-white/10 p-8 rounded-xl backdrop-blur-sm">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2 font-medium">What's your name?</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white/20 text-white border border-white/30 placeholder-gray-300"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-white mb-2 font-medium">Where can I reach you?</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="john@example.com"
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white/20 text-white border border-white/30 placeholder-gray-300"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-white mb-2 font-medium">What's your project about?</label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, goals, and timeline..."
                className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white/20 text-white border border-white/30 placeholder-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-secondary text-white py-4 rounded-lg font-bold hover:bg-secondary/90 transition-colors disabled:opacity-50 text-lg"
            >
              {isSubmitting ? 'Sending...' : "Let's Start a Conversation"}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-400 text-center font-medium">
                Thanks for reaching out! I'll get back to you soon. 🚀
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-400 text-center font-medium">
                Oops! Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact; 