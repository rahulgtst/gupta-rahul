import Social from "../social/Social.tsx"

const Footer = () => {
  return (
    <footer className="border-t border-outline_variant/25 bg-surface py-10 font-body">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <p className="text-label-md text-outline">
          © {new Date().getFullYear()} Rahul Gupta.
          All rights reserved.
        </p>
        <Social bg="light" />
      </div>
    </footer>
  );
};

export default Footer;
