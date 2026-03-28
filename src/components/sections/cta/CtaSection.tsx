import { NavLink } from "react-router";

const CtaSection = () => {
  return (
    <section className="bg-surface_container_low py-22 md:py-28">
      <div className="mx-auto max-w-[1400px] px-6 text-center font-body">
        <h2 className="font-display text-3xl font-bold uppercase tracking-tight text-primary md:text-5xl md:leading-tight">
          Ready to build the future?
        </h2>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          <NavLink
            to="/contact"
            className="inline-flex min-w-[200px] items-center justify-center bg-primary px-8 py-4 text-label-md text-on_primary transition-colors duration-button hover:bg-primary_fixed"
          >
            START A PROJECT
          </NavLink>
          <a
            href="https://www.linkedin.com/in/rahulgtst"
            target="_blank"
            rel="noopener noreferrer"
            className="ghost-border inline-flex min-w-[200px] items-center justify-center bg-surface_container_lowest px-8 py-4 text-label-md text-primary transition-colors duration-button hover:bg-surface_container_low"
          >
            VIEW RESUME
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
