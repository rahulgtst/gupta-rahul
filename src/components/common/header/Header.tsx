import { NavLink } from "react-router";
import { FaGithub } from "react-icons/fa";

const nav = [
  { label: "HOME", to: "#home" },
  { label: "PROJECTS", to: "#projects" },
  { label: "ARCHIVE", to: "#archive" },
  { label: "CONTACT", to: "/contact", route: true as const },
];

const Header = () => {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-outline_variant/20 bg-surface/80 backdrop-blur-nav"
      style={{ WebkitBackdropFilter: "blur(12px)" }}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-4 font-body text-label-md tracking-[0.05em] text-primary">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            className="shrink-0 font-display font-bold text-primary transition-colors duration-button hover:text-primary_fixed"
          >
            RG_ARCHIVE
          </a>

          <nav className="hidden flex-1 items-center justify-center gap-6 lg:gap-10 md:flex">
            {nav.map(({ label, to, route }) =>
              route ? (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    `${
                      isActive ? "border-b-2 border-primary pb-0.5" : ""
                    } text-primary transition-colors duration-button hover:text-primary_fixed`
                  }
                >
                  {label}
                </NavLink>
              ) : (
                <a
                  key={label}
                  href={to}
                  className="text-primary transition-colors duration-button hover:text-primary_fixed"
                >
                  {label}
                </a>
              )
            )}
          </nav>

          <a
            href="https://github.com/rahulgtst"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-primary transition-transform duration-button hover:scale-105 hover:text-primary_fixed"
            aria-label="GitHub"
          >
            <FaGithub className="h-5 w-5" />
          </a>
        </div>

        <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:hidden">
          {nav.map(({ label, to, route }) =>
            route ? (
              <NavLink
                key={label}
                to={to}
                className={({ isActive }) =>
                  `${
                    isActive ? "underline decoration-2 underline-offset-4" : ""
                  } text-primary`
                }
              >
                {label}
              </NavLink>
            ) : (
              <a key={label} href={to} className="text-primary">
                {label}
              </a>
            )
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
