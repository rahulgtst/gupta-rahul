import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router";
import Social from "../components/common/social/Social.tsx";
import Logo from "../assets/images/Logo.png";

const Contact = () => {
  const [state, handleSubmit] = useForm("xdkorlkr");

  useEffect(() => {
    document.title = 'Contact | Rahul Gupta';
  }, []);

  return (
    <section
      className="flex items-center justify-center min-h-screen bg-gray-100"
      id="contact"
    >
      <div className="container mx-auto px-6">
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto font-body">
          {/* Vertical divider line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-primary" />

          {/* Left content (text) */}
          <div className="text-black space-y-6 pr-5">
            <img src={Logo} alt="Logo" width={50}/>
            <h3 className="text-2xl font-bold mb-4">Let's Get in Touch</h3>
            <p className="text-lg text-black-100 max-w-2xl mx-auto">
              I'd love to hear from you! Please fill out the form with every mandatory
              & relevant details, and I'll get back to you as soon as possible.
            </p>
            <Social bg="light" />
            <div className="pt-4">
              <p className="text-sm">
                Prefer another way? Reach out via social media or drop a message
                through the form.
              </p>
            </div>
          </div>

          {/* Right content (form) */}
          <div className="pl-5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black mb-2 font-medium"
                >
                  Your Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Please enter your name"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white/20 text-black border border-black/30 placeholder-gray-300"
                />
              </div>
              <div>
                <label
                  htmlFor="contactaddress"
                  className="block text-black mb-2 font-medium"
                >
                  Your Contact Information (Email, Phone, etc.){" "}
                  <span className="text-red-400">*</span>
                </label>
                <input
                  id="contactaddress"
                  type="text"
                  name="contactaddress"
                  required
                  placeholder="Please enter any reachable contact information"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white/20 text-black border border-black/30 placeholder-gray-300"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-black mb-2 font-medium"
                >
                  Your Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Please enter what do you want to talk about"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary bg-white/20 text-black border border-black/30 placeholder-gray-300"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-secondary text-black py-4 rounded-lg font-bold hover:bg-secondary/90 transition-colors disabled:opacity-50 text-lg"
              >
                {state.submitting ? "Sending..." : "Let's Start The Chat"}
              </button>

              {/* Success & Error messages */}
              {state.succeeded && (
                <>
                  <p className="text-green-400 text-center font-medium">
                    Thanks for reaching out! I'll get back to you soon.
                  </p>
                  <NavLink to={"/"} end>
                    <button className="w-full mt-4 bg-secondary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors">
                      Back to Home Page
                    </button>
                  </NavLink>
                </>
              )}
              {state.errors && Object.keys(state.errors).length > 0 && (
                <>
                  <p className="text-red-400 text-center font-medium">
                    Oops! Something went wrong. Please try again or email me
                    directly.
                  </p>
                  <NavLink to={"/"} end>
                    <button className="w-full mt-4 bg-secondary text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-secondary/90 transition-colors">
                      Back to Home Page
                    </button>
                  </NavLink>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
