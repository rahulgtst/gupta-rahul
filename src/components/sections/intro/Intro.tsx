import { NavLink } from "react-router";

const Intro = () => {
  return (
    <section
      className="relative min-h-screen pt-24 font-body md:pt-28"
      id="home"
    >
      <div className="hero-grid-bg hero-depth absolute inset-0" aria-hidden />
      <div className="relative mx-auto flex min-h-[calc(100vh-6rem)] max-w-[1400px] flex-col justify-center gap-12 px-6 py-16 md:flex-row md:items-center md:gap-16 md:py-24">
        <div className="flex-1">
          <p className="text-label-md uppercase tracking-[0.05em] text-on_surface">
            Full stack software engineer
          </p>
          <h1 className="mt-4 font-display text-display-lg font-bold uppercase text-primary md:text-[4rem] md:leading-[0.95] lg:text-[4.5rem]">
            <span className="block">Rahul</span>
            <span className="block">Gupta</span>
          </h1>
        </div>

        <div className="flex max-w-xl flex-1 flex-col gap-8">
          <p className="text-body-md text-on_surface md:text-base">
            Building reliable systems with a focus on modularity, performance,
            and clear user experiences — from APIs to interfaces.
          </p>
          <div>
            <a
              href="#projects"
              className="inline-flex bg-primary px-8 py-4 text-label-md text-on_primary transition-colors duration-button hover:bg-primary_fixed"
            >
              EXPLORE WORKS
            </a>
            <p className="mt-4 text-label-md text-outline">
              <NavLink
                to="/contact"
                className="link-underline text-on_surface decoration-primary"
              >
                Or get in touch →
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
