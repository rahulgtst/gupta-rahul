import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { NavLink } from "react-router";
import Social from "../components/common/social/Social.tsx";

const Contact = () => {
  const formId = process.env.REACT_APP_FORM_ID || "";
  const [state, handleSubmit] = useForm(formId);

  useEffect(() => {
    document.title = "Contact | Rahul Gupta";
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <section
        className="min-h-screen pt-28 pb-16 font-body md:pt-32"
        id="contact"
      >
        <div className="mx-auto max-w-[1400px] px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              {process.env.REACT_APP_LOGO_URL ? (
                <img
                  src={process.env.REACT_APP_LOGO_URL}
                  alt=""
                  width={48}
                  height={48}
                  className="grayscale"
                />
              ) : null}
              <h1 className="font-display text-3xl font-bold uppercase tracking-tight text-primary md:text-4xl">
                Get in touch
              </h1>
              <p className="max-w-xl text-body-md text-on_surface md:text-[0.9375rem]">
                Share a short note with the important details. I&apos;ll reply as
                soon as I can.
              </p>
              <Social bg="light" />
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label
                    htmlFor="name"
                    className="text-label-md text-primary"
                  >
                    Your name <span className="text-error">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Name"
                    className="mt-2 w-full border-0 border-b-2 border-outline/40 bg-transparent px-0 py-2 text-body-md text-on_surface placeholder:text-outline/60 focus:border-primary focus:outline-none focus:ring-0"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contactaddress"
                    className="text-label-md text-primary"
                  >
                    Contact (email, phone, etc.){" "}
                    <span className="text-error">*</span>
                  </label>
                  <input
                    id="contactaddress"
                    type="text"
                    name="contactaddress"
                    required
                    placeholder="How to reach you"
                    className="mt-2 w-full border-0 border-b-2 border-outline/40 bg-transparent px-0 py-2 text-body-md text-on_surface placeholder:text-outline/60 focus:border-primary focus:outline-none focus:ring-0"
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
                    className="text-label-md text-primary"
                  >
                    Message <span className="text-error">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What would you like to work on?"
                    className="mt-2 w-full resize-y border-0 border-b-2 border-outline/40 bg-transparent px-0 py-2 text-body-md text-on_surface placeholder:text-outline/60 focus:border-primary focus:outline-none focus:ring-0"
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
                  className="w-full bg-primary py-4 text-label-md text-on_primary transition-colors duration-button hover:bg-primary_fixed disabled:opacity-50"
                >
                  {state.submitting ? "Sending…" : "Send message"}
                </button>

                {state.succeeded ? (
                  <div className="space-y-4 border border-outline_variant/30 bg-surface_container_low p-6 text-body-md text-on_surface">
                    <p>Thanks — I&apos;ll get back to you soon.</p>
                    <NavLink
                      to="/"
                      className="inline-flex bg-primary px-6 py-3 text-label-md text-on_primary transition-colors hover:bg-primary_fixed"
                    >
                      Back home
                    </NavLink>
                  </div>
                ) : null}
                {state.errors && Object.keys(state.errors).length > 0 ? (
                  <div className="space-y-4 border border-error/40 bg-error_container/50 p-6 text-body-md text-primary">
                    <p>Something went wrong. Try again or email directly.</p>
                    <NavLink
                      to="/"
                      className="inline-flex border border-outline px-6 py-3 text-label-md text-primary transition-colors hover:bg-surface_container_low"
                    >
                      Back home
                    </NavLink>
                  </div>
                ) : null}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
